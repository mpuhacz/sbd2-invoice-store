import collections

from db import cursor as db


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
    def __init__(self, arg_type, null=False):
        self.type = arg_type
        self.null = null

    def to_internal(self, value):
        if value is None and self.null:
            return None
        return self.type(value)


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
    _db = db
    _pk = 'id'
    _db_table = ''

    def __init__(self, *args):
        if len(args) == 1:
            args = self.get_by_pk(args[0])

        if len(args) != len(self._fields):
            raise Exception('Not enought arguments to initialize model.')

        for idx, (key, field) in enumerate(self._fields.items()):
            setattr(self, key, field.to_internal(args[idx]))

    def __repr__(self):
        r = ['{}={}'.format(k, getattr(self, k)) for k in self._fields.keys()]
        return '<{} model: {}>'.format(self.__class__.__name__, ', '.join(r))

    @classmethod
    def get_by_pk(cls, pk):
        obj = cls._db.execute('SELECT * from {} WHERE {} = ?'.format(
            cls._db_table, cls._pk), pk).fetchone()
        if not obj:
            raise DoesNotExists('Object not found')
        return obj

    @classmethod
    def many(cls, filters=None, limit=1000):
        args = ['SELECT * from {}'.format(cls._db_table)]
        if filters:
            args[0] += ' WHERE ' + str(filters)
            args += filters.values
        return tuple(cls(*i) for i in cls._db.execute(*args).fetchall())

    @classmethod
    def create(cls, **kwargs):
        raise NotImplementedError

    def update(self, **kwargs):
        raise NotImplementedError
