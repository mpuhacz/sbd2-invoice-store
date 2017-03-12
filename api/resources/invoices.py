from resources.base import DefaultResource
from models.models import Invoice


class InvoicesResource(DefaultResource):
    model = Invoice

    def parse(self, req, obj=None):
        obj = super(InvoicesResource, self).parse(req, obj)
        obj.created_by = req.context['user']
        return obj
