
import json
import falcon

from config import conf


class StaticResource(object):
    def on_get(self, req, resp, name):
        resp.status = falcon.HTTP_200
        resp.content_type = 'image/jpeg'
        name = filter(lambda x: x['name'] == name, conf)[0]['stream']
        with open('/dev/shm/{}.flv.jpg'.format(name), 'r') as f:
            resp.body = f.read()
