import collections
from datetime import date, datetime

from db import open_db_connection


class Filter:
    def __init__(self, operator='=', **kwargs):
        self.fields = list(kwargs.keys())
        self.values = list(kwargs.values())
        self.q = '{} {} ?'.format(self.fields[0], operator)

    def _join(self, arg, other):
        self.q += ' {} '.format(arg) + other.q
        self.values += other.values
        self.fields += other.fields

    def __or__(self, other):
        self._join('OR', other)
        return self

    def __and__(self, other):
        self._join('AND', other)
        return self

    def __str__(self):
        return self.q

    def __repr__(self):
        return '<Filter: {}>'.format(self.q)


class Field:
    def __init__(self, arg_type, null=False, pk=False):
        self.pk = pk
        self.type = arg_type
        self.null = null

    def to_internal(self, value):
        if issubclass(self.type, Model) or self.type not in (date, datetime):
            return self.type(value)
        return value

    def to_external(self, value, as_object=False):
        if not as_object and isinstance(value, Model):
            return value.pk
        return value


class DoesNotExists(Exception):
    pass


class ModelMeta(type):
    @classmethod
    def __prepare__(mcs, name, bases):
        return collections.OrderedDict()

    def __new__(mcs, name, bases, classdict):
        classdict['_fields'] = {k: v for k, v in classdict.items()
                                if k not in ('__module__', '__qualname__')}
        classdict['_db_table'] = name.lower() + 's'
        classdict['_pk'] = tuple(classdict['_fields'].keys())[0]
        return type.__new__(mcs, name, bases, classdict)


class Model(metaclass=ModelMeta):
    _fields = dict()
    _pk = 'id'
    _db_table = ''

    def __init__(self, *args, in_db=False, **kwargs):
        self.in_db = in_db
        if len(args) == 1:
            obj = self.get_by_pk(self._fields[self._pk].to_internal(args[0]))
            self.__dict__.update(obj.__dict__)
        else:
            for k in self._fields:
                setattr(self, k, None)

        if len(args) == len(self._fields):
            for idx, (key, field) in enumerate(self._fields.items()):
                setattr(self, key, field.to_internal(args[idx]))

        elif kwargs:
            for k, v in kwargs.items():
                if k in self._fields:
                    setattr(self, k, self._fields[k].to_internal(v))

        self.original_pk = getattr(self, self._pk)

    def __json__(self):
        return self.get_values(as_object=True)

    def __repr__(self):
        r = ['{}={}'.format(k, getattr(self, k)) for k in self._fields.keys()]
        return '<{} model: {}>'.format(self.__class__.__name__, ', '.join(r))

    @classmethod
    def execute(cls, *args, fetchone=False, fetchall=False):
        print(args)
        with open_db_connection() as cursor:
            result = cursor.execute(*args)
            if fetchall:
                return result.fetchall()
            if fetchone:
                return result.fetchone()

    @classmethod
    def _select_sql(cls):
        return 'SELECT * from {}'.format(cls._db_table)

    @classmethod
    def _update_sql(cls):
        return 'UPDATE {} SET '.format(cls._db_table)

    @classmethod
    def _insert_sql(cls):
        return 'INSERT INTO {} '.format(cls._db_table)

    @classmethod
    def _delete_sql(cls):
        return 'DELETE FROM {}'.format(cls._db_table)

    @classmethod
    def _create_query(cls, base_query, filters=None):
        args = [base_query]
        if filters:
            args[0] += ' WHERE ' + str(filters)
            args += filters.values
        return args

    @classmethod
    def get(cls, filters=None):
        args = cls._create_query(cls._select_sql(), filters)
        obj = cls.execute(*args, fetchone=True)
        if not obj:
            raise DoesNotExists('Object not found')
        return cls(*obj, in_db=True)

    @classmethod
    def get_by_pk(cls, pk):
        return cls.get(Filter(**{cls._pk: pk}))

    @classmethod
    def many(cls, filters=None):
        args = cls._create_query(cls._select_sql(), filters)
        return tuple(cls(*i, in_db=True) for i in cls.execute(*args, fetchall=True))

    def get_values(self, include=None, exclude=None, flat=False, as_object=False):
        exclude = exclude or []
        include = include or [k for k in self._fields.keys() if k not in exclude]
        result = collections.OrderedDict()
        for key in include:
            if key in self._fields:
                result[key] = self._fields[key].to_external(getattr(self, key), as_object)
        return result if not flat else list(result.values())

    @property
    def pk(self):
        return getattr(self, self._pk, None)

    def _create(self):
        args = {} if self.pk else {'exclude': [self._pk]}
        values = self.get_values(**args)
        query = self._insert_sql() + '({}) VALUES ({}) RETURNING {}'.format(
            ', '.join(values.keys()), ('?, '*len(values))[0:-2], self._pk)
        query = [query, *values.values()]
        q = self.execute(*query, fetchone=True)
        self.id = q[0]
        self.in_db = True
        return self

    def delete(self):
        args = self._create_query(self._delete_sql(), Filter(**{self._pk: getattr(self, self._pk)}))
        return self.execute(*args)

    def _update(self, filters=None):
        query = self._update_sql()
        query += ' = ?, '.join(self._fields.keys()) + ' = ? '
        q = self._create_query(query, filters)
        args = [q[0], *[v.to_external(getattr(self, k)) for k, v in self._fields.items()] + q[1:]]
        return self.execute(*args)

    def save(self):
        if self.in_db:
            return self._update(Filter(**{self._pk: self.original_pk}))
        else:
            return self._create()

