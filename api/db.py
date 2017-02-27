import pyodbc

import settings

cnxn = pyodbc.connect(settings.DSN)
cnxn.setdecoding(pyodbc.SQL_WCHAR, encoding='utf-8')
cnxn.setencoding(encoding='utf-8')
cursor = cnxn.cursor


