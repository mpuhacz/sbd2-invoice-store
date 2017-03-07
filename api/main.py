from wsgiref import simple_server

import falcon

from middlewares import AuthMiddleware, JSONTranslator, RequireJSON
from resources.login import LoginResource
from resources.index import IndexResource, StaticResource
from resources.invoices import InvoicesResource
from resources.contractors import ContractorsResource
from resources.payments import PaymentsResource


app = falcon.API(middleware=[
    AuthMiddleware(),
    RequireJSON(),
    JSONTranslator(),
])

app.add_route('/', IndexResource())
app.add_route('/static/{name}', StaticResource())
app.add_route('/api/login', LoginResource())
app.add_route('/api/invoices/', InvoicesResource())
app.add_route('/api/invoices/{obj_id}', InvoicesResource())

app.add_route('/api/contractors/', ContractorsResource())
app.add_route('/api/contractors/{obj_id}', ContractorsResource())

app.add_route('/api/payments/', PaymentsResource())
app.add_route('/api/payments/{obj_id}', PaymentsResource())


if __name__ == '__main__':
    httpd = simple_server.make_server('127.0.0.1', 8000, app)
    httpd.serve_forever()
