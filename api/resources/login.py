from datetime import datetime, timedelta

import jwt

from settings import SECRET_KEY
from models.base import Filter, DoesNotExists
from models.models import User
from .base import DefaultResource


class LoginResource:

    def on_post(self, req, resp):
        username = req.get_param('username', required=True)
        password = req.get_param('password', required=True)
        try:
            user = User.get(Filter(username=username) & Filter(password=password))
            token = jwt.encode({
                'id': user.id,
                'exp': datetime.utcnow() + timedelta(days=14)
            }, SECRET_KEY).decode('utf-8')
            req.context['result'] = {'success': True, 'token': token}
        except (DoesNotExists, jwt.ExpiredSignatureError):
            req.context['result'] = {'success': False}
