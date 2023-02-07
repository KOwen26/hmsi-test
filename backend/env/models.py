from database import Base
from sqlalchemy import TIMESTAMP, Column, ForeignKey, Integer, DECIMAL, String, Boolean, text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship


class Invoices(Base):
    __tablename__ = 'invoices'
    invoice_id = Column(String, primary_key=True, nullable=False)
    document_no = Column(String, nullable=False)
    invoice_date = Column(TIMESTAMP(timezone=True), nullable=False)
    top = Column(Integer, nullable=False)
    invoice_due_date = Column(TIMESTAMP(timezone=True), nullable=True)
    tax_no = Column(String, nullable=False)
    tax_rate = Column(DECIMAL, nullable=True)
    description = Column(String, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text("now()"))
    updated_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text("now()"))


class InvoiceDetails(Base):
    __tablename__ = 'invoice_details'
    document_no = Column(String, primary_key=True, nullable=False)
    po_no = Column(String, nullable=False)
    item = Column(Integer, nullable=True)
    quantity = Column(Integer, nullable=True)
    amount_dpp = Column(Integer, nullable=True)
    pph_amount = Column(Integer, nullable=True)
    pph_payable = Column(Integer, nullable=True)
    total_before_tax = Column(DECIMAL, nullable=True)
    total_after_tax = Column(DECIMAL, nullable=True)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text("now()"))
    updated_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text("now()"))
