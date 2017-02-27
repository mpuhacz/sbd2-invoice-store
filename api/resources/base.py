import logging

import settings


class DefaultResource:

    def __init__(self):
        self.logger = logging.getLogger(settings.PROJECT_NAME + '.' + __name__)