import logging

import falcon

from models.base import DoesNotExists
from models.models import User
import settings


SUCCESS_RESPONSE = {'success': True}


class NotEnoughtData(Exception):
    pass


class ResourceMeta(type):
    def __new__(mcs, name, bases, classdict):
        for k, v in classdict.items():
            if k not in ('__module__', '__qualname__'):
                classdict[k] = v
        return type.__new__(mcs, name, bases, classdict)


class DefaultResource(metaclass=ResourceMeta):
    auto_fields = []

    def __init__(self):
        if not hasattr(self, 'fields'):
            self.fields = self.model._fields.keys()
        self.logger = logging.getLogger(settings.PROJECT_NAME + '.' + __name__)

    def parse(self, req, obj=None):
        payload = req._params
        o = obj or self.model()
        for field in payload.keys():
            if not obj and self.model._fields[field].pk:
                continue
            setattr(o, field, self.model._fields[field].to_internal(payload[field]))
        return o

    def get_object(self, pk):
        try:
            return self.model.get_by_pk(pk)
        except DoesNotExists:
            raise falcon.HTTPNotFound()

    def on_get(self, req, resp, obj_id=None):
        req.context['result'] = self.get_object(obj_id) if obj_id else self.model.many()
        resp.status = falcon.HTTP_200

    def on_post(self, req, resp, obj_id):
        obj = self.get_object(obj_id)
        obj = self.parse(req, obj)
        obj.save()
        resp.status = falcon.HTTP_201

    def on_put(self, req, resp):
        obj = self.parse(req)
        obj.save()
        resp.status = falcon.HTTP_201

    def on_delete(self, req, resp, obj_id):
        self.get_object(obj_id).delete()
        resp.status = falcon.HTTP_200
