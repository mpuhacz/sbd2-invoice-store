from datetime import date, datetime
import simplejson as json


class ModelEncoder(json.JSONEncoder):
    def default(self, o):
        if o is None:
            return 'null'
        if hasattr(o, '__json__'):
            return o.__json__()
        elif isinstance(o, (date, datetime)):
            return o.isoformat()
        return json.JSONEncoder.default(self, o)


def serialize(obj):
    return json.dumps(obj, cls=ModelEncoder)
