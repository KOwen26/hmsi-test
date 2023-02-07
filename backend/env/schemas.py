from datetime import datetime
from typing import List
import uuid
from pydantic import BaseModel, EmailStr, constr

# Invoices


class InvoicesBaseSchema(BaseModel):
    invoice_id: str
    document_no: str
    invoice_date: str
    top: int
    invoice_due_date: str
    tax_no: str
    tax_rate: float
    description: str
    # created_at: datetime
    # updated_at: datetime

    class Config:
        orm_mode = True


class CreateInvoicesSchema(InvoicesBaseSchema):
    pass


# class InvoicesResponse(InvoicesBaseSchema):
#     id: uuid.UUID
#     created_at: datetime
#     updated_at: datetime

# Invoice Details


class InvoiceDetailsBaseSchema(BaseModel):
    document_no: str
    po_no: str
    item: int
    quantity: int
    amount_dpp: int
    pph_amount: int
    pph_payable: int
    total_before_tax: float
    total_after_tax: float
    # created_at: datetime
    # updated_at: datetime

    class Config:
        orm_mode = True


class CreateInvoiceDetailsSchema(InvoiceDetailsBaseSchema):
    pass
