import logging

import falcon

from api import settings


class InvoicesResource(object):

    def __init__(self, db):
        self.db = db
        self.logger = logging.getLogger(settings.PROJECT_NAME + '.' + __name__)

    def on_get(self, req, resp, user_id):
        resp.status = falcon.HTTP_200

    def on_post(self, req, resp, user_id):
        pass
