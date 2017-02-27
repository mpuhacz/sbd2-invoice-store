import falcon
import jwt

from models.models import User
from models.base import DoesNotExists
from settings import SECRET_KEY


class AuthMiddleware:

    def process_request(self, req, resp):
        if req.relative_uri != '/login':
            token = req.get_header('Authorization')

            if token is None:
                raise falcon.HTTPUnauthorized()

            if not self._token_is_valid(token):
                raise falcon.HTTPUnauthorized()

    def _token_is_valid(self, token):
        try:
            account_id = jwt.decode(token, SECRET_KEY, algorithms=['HS256']).get('id')
            User.get_by_pk(account_id)
            return True
        except (DoesNotExists, jwt.DecodeError):
            return False
