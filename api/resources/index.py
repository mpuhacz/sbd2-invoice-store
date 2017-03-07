# coding: utf-8
import os

import falcon

import settings


class IndexResource:
    def on_get(self, req, resp):
        path = os.path.join(settings.PROJECT_DIR, '../app/index.html')
        with open(os.path.abspath(path), 'r') as fp:
            resp.status = falcon.HTTP_200
            resp.content_type = 'text/html'
            resp.body = str(fp.read()).encode('utf-8')


class StaticResource:
    def on_get(self, req, resp, name):
        path = os.path.join(settings.PROJECT_DIR, '../app/static/', name)
        with open(os.path.abspath(path), 'r') as fp:
            resp.status = falcon.HTTP_200
            resp.body = fp.read()
            resp.content_type = 'text/css'