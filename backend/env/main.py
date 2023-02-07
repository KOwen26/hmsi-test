from typing import Union
from fastapi import FastAPI, Depends, HTTPException, status, APIRouter, Response
from pydantic import BaseModel
from schemas import InvoicesBaseSchema, CreateInvoicesSchema, InvoiceDetailsBaseSchema
from models import Invoices, InvoiceDetails
from database import get_db, Base, engine
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Migrate Database
# Base.metadata.create_all(engine)

# Dummy Static Data
invoices = [
    InvoicesBaseSchema(
        invoice_id='AAA',
        document_no='123',
        invoice_date='',
        top=100,
        invoice_due_date='',
        tax_no='',
        tax_rate=100,
        description='Good',
    ),
    InvoicesBaseSchema(
        invoice_id='BBB',
        document_no='321',
        invoice_date='',
        top=100,
        invoice_due_date='',
        tax_no='',
        tax_rate=100,
        description='Good',)
]

invoice_list = [
    InvoiceDetailsBaseSchema(
        document_no='123',
        po_no='ABC',
        item=100,
        quantity=100,
        amount_dpp=100,
        pph_amount=100,
        pph_payable=100,
        total_before_tax=100,
        total_after_tax=100
    ),
    InvoiceDetailsBaseSchema(
        document_no='123',
        po_no='ABCD',
        item=200,
        quantity=200,
        amount_dpp=200,
        pph_amount=200,
        pph_payable=200,
        total_before_tax=200,
        total_after_tax=200
    ),
    InvoiceDetailsBaseSchema(
        document_no='321',
        po_no='ABCDE',
        item=150,
        quantity=150,
        amount_dpp=150,
        pph_amount=150,
        pph_payable=150,
        total_before_tax=150,
        total_after_tax=150
    )
]

# Routing


@app.get("/")
def root():
    return {"Hello": "World"}

# Show Invoices from local data


@ app.get("/api/invoices/", response_model=list[InvoicesBaseSchema])
def invoice_all():
    return invoices

# add invoice to local data


@ app.post("/api/invoices/create", response_model=InvoicesBaseSchema)
def invoice_create(invoice: InvoicesBaseSchema):
    print(invoice)
    invoices.append(invoice)
    return invoices[-1]

# Show Invoices from database
# @ app.get('/api/db', response_model=InvoicesBaseSchema)
# def get_invoice_all(db: Session = Depends(get_db), limit: int = 10, page: int = 1, search: str = ''):
#     skip = (page - 1) * limit

#     posts = db.query(Invoices).group_by(Invoices.invoice_id).filter(
#         Invoices.title.contains(search)).limit(limit).offset(skip).all()
#     return {'status': 'success', 'results': len(posts), 'posts': posts}

# Show invoice details


@ app.get("/api/invoices/{invoice_id}", response_model=InvoicesBaseSchema)
def invoice_details():
    return invoices

# Show invoice list


@ app.get("/api/invoice_list/", response_model=list[InvoiceDetailsBaseSchema])
def invoice_list_all():
    return invoice_list
