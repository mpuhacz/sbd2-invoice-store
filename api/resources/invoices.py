from resources.base import DefaultResource
from models.models import Invoice


class InvoicesResource(DefaultResource):
    model = Invoice
