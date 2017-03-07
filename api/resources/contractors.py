from resources.base import DefaultResource
from models.models import Contractor


class ContractorsResource(DefaultResource):
    model = Contractor
