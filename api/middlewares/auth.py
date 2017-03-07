import falcon
import jwt

from models.models import User
from models.base import DoesNotExists
from settings import SECRET_KEY


class AuthMiddleware:
    def process_request(self, req, resp):
        if '/api/' in req.relative_uri and not 'login' in req.relative_uri:
            token = req.get_header('Authorization')
            if token is None:
                raise falcon.HTTPUnauthorized()

            if not self._token_is_valid(token, req):
                raise falcon.HTTPUnauthorized()

    def _token_is_valid(self, token, req):
        try:
            account_id = jwt.decode(token, SECRET_KEY, algorithms=['HS256']).get('id')
            req.context['user'] = User.get_by_pk(account_id)
            return True
        except (DoesNotExists, jwt.DecodeError):
            return False
