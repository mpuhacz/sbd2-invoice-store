from wsgiref import simple_server

import falcon

from middlewares import AuthMiddleware, JSONTranslator, RequireJSON
from resources.login import LoginResource


app = falcon.API(middleware=[
    AuthMiddleware(),
    RequireJSON(),
    JSONTranslator(),
])

app.add_route('/login', LoginResource())

if __name__ == '__main__':
    httpd = simple_server.make_server('127.0.0.1', 8000, app)
    httpd.serve_forever()
