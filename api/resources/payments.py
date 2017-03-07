from resources.base import DefaultResource
from models.models import Payment


class PaymentsResource(DefaultResource):
    model = Payment
