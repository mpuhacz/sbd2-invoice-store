from contextlib import contextmanager
import sys

import pyodbc

import settings


@contextmanager
def open_db_connection(commit=True):
    connection = pyodbc.connect(settings.DSN)
    cursor = connection.cursor()
    try:
        yield cursor
    except pyodbc.DatabaseError as err:
        error, = err.args
        sys.stderr.write(error.message)
        cursor.execute("ROLLBACK")
        raise err
    else:
        if commit:
            cursor.execute("COMMIT")
        else:
            cursor.execute("ROLLBACK")
    finally:
        connection.close()


