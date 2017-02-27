import os

from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())

PROJECT_NAME = 'sbd2-invoice-store'
SECRET_KEY = os.environ.get("SECRET_KEY")
DSN = os.environ.get("DSN")
