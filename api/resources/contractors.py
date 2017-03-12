from resources.base import DefaultResource
from models.models import Contractor


class ContractorsResource(DefaultResource):
    model = Contractor

    def parse(self, req, obj=None):
        obj = super(ContractorsResource, self).parse(req, obj)
        obj.nip = req._params.get('nip')
        return obj
