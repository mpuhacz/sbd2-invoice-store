from datetime import datetime, date
from decimal import Decimal

from .base import Model, Field


class User(Model):
    id = Field(int, pk=True)
    username = Field(str)
    password = Field(str)
    last_seen = Field(datetime, null=True)


class Contractor(Model):
    nip = Field(str, pk=True)
    name = Field(str)
    address = Field(str)
    phone = Field(str)
    email = Field(str)


class Invoice(Model):
    id = Field(int, pk=True)
    title = Field(str)
    amount = Field(Decimal)
    created_at = Field(date)
    payment_date = Field(date)
    comment = Field(str, null=True)
    status = Field(int)
    created_by = Field(User)
    contractor = Field(Contractor)


class Payment(Model):
    id = Field(int, pk=True)
    amount = Field(Decimal)
    date = Field(date)
    invoice = Field(Invoice)
