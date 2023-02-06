import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Container, Form, Table } from "react-bootstrap";
import { useState, useEffect } from "react";

function App() {
  const [invoiceData, setInvoiceData] = useState({});
  const [invoices, setInvoice] = useState([]);

  const [invoiceListData, setInvoiceListData] = useState([]);
  const [invoiceList, setInvoiceList] = useState([]);

  const saveInvoice = (e) => {
    e.preventDefault();
    setInvoice([...invoices, invoiceData]);
    setInvoiceData(null);
  };

  const saveInvoiceDetails = (e) => {
    e.preventDefault();
    setInvoiceList([...invoiceList, invoiceListData]);
    setInvoiceListData(null);
  };

  useEffect(() => {
    return () => {
      console.log({ invoices, invoiceList });
    };
  }, [invoiceData, invoices, invoiceList, invoiceListData]);

  return (
    <div className="App">
      <header className="">
        <Container className=" mt-5">
          <div className="row my-5">
            <div className="col-4">
              <div>
                <Form.Label htmlFor="doc_no">BDS Doc No</Form.Label>
                <Form.Control disabled type="text" id="doc_no" aria-describedby="" />
              </div>
              <div>
                <Form.Label htmlFor="doc_date">BDS Doc Date</Form.Label>
                <Form.Control disabled type="date" id="doc_date" aria-describedby="" />
              </div>
              <div>
                <Form.Label htmlFor="supplier">Supplier</Form.Label>
                <Form.Control disabled type="text" id="supplier" aria-describedby="" />
              </div>
              <div>
                <Form.Label htmlFor="supplier_tax_id">Supplier Tax ID</Form.Label>
                <Form.Control disabled type="text" id="supplier_tax_id" aria-describedby="" />
              </div>
            </div>
            <div className="col-4">
              <div>
                <Form.Label htmlFor="doc_no">Bank Name</Form.Label>
                <Form.Control type="text" id="doc_no" aria-describedby="" />
              </div>
              <div>
                <Form.Label htmlFor="doc_date">Bank Account</Form.Label>
                <Form.Control type="date" id="doc_date" aria-describedby="" />
              </div>
              <div>
                <Form.Label htmlFor="supplier">Bank Account Name</Form.Label>
                <Form.Control disabled type="text" id="supplier" aria-describedby="" />
              </div>
              <div>
                <Form.Label htmlFor="supplier_tax_id">Invoice Document</Form.Label>
                <Form.Control type="file" id="supplier_tax_id" aria-describedby="" />
              </div>
              <div>
                <Form.Label htmlFor="supplier_tax_id">Payment Plan Date</Form.Label>
                <Form.Control disabled type="text" id="supplier_tax_id" aria-describedby="" />
              </div>
              <div>
                <Form.Label htmlFor="supplier_tax_id">Paid Date</Form.Label>
                <Form.Control disabled type="text" id="supplier_tax_id" aria-describedby="" />
              </div>
            </div>
          </div>
          <div className="mx-5">
            <h3>Invoice Claim</h3>
            <div className="mb-3">
              <Form.Label htmlFor="inv_no">Invoice Doc</Form.Label>
              <Form.Control type="text" onChange={(e) => setInvoiceData({ ...invoiceData, inv_no: e.target.value })} id="inv_no" aria-describedby="" />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="doc_no">Doc Receive No</Form.Label>
              <Form.Control type="text" onChange={(e) => setInvoiceData({ ...invoiceData, doc_no: e.target.value })} id="doc_no" aria-describedby="" />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="inv_date">Invoice Date</Form.Label>
              <Form.Control type="date" onChange={(e) => setInvoiceData({ ...invoiceData, inv_date: e.target.value })} id="inv_date" aria-describedby="" />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="top">TOP</Form.Label>
              <Form.Control type="number" onChange={(e) => setInvoiceData({ ...invoiceData, top: e.target.valueAsNumber })} id="top" aria-describedby="" />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="inv_due_date">Invoice Due Date</Form.Label>
              <Form.Control
                disabled
                type="date"
                onChange={(e) => setInvoiceData({ ...invoiceData, inv_due_date: e.target.valueAsNumber })}
                id="inv_due_date"
                aria-describedby=""
              />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="tax_no">Faktur Pajak No</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setInvoiceData({ ...invoiceData, tax_no: e.target.valueAsNumber })}
                id="tax_no"
                aria-describedby=""
              />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="tax_rate">PPN Rate %</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setInvoiceData({ ...invoiceData, tax_rate: e.target.valueAsNumber })}
                id="tax_rate"
                aria-describedby=""
              />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setInvoiceData({ ...invoiceData, description: e.target.value })}
                id="description"
                aria-describedby=""
              />
            </div>
            <Button
              onClick={(e) => {
                saveInvoice(e);
              }}
            >
              Submit
            </Button>
          </div>
          <div className="row my-5">
            <h3>Invoice List</h3>
            <Table striped borderless hover>
              <thead>
                <tr>
                  <th>Invoice Doc</th>
                  <th>Doc Received No</th>
                  <th>Invoice Date</th>
                  <th>Top</th>
                  <th>Invoice Due Date</th>
                  <th>Faktur Pajak No</th>
                  <th>PPN Rate %</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index) => {
                  return (
                    <tr key={index}>
                      <td>{invoice?.inv_no ?? "-"}</td>
                      <td>{invoice?.doc_no ?? "-"}</td>
                      <td>{invoice?.inv_date ?? "-"}</td>
                      <td>{invoice?.top ?? "-"}</td>
                      <td>{invoice?.inv_due_date ?? "-"}</td>
                      <td>{invoice?.tax_no ?? "-"}</td>
                      <td>{invoice?.tax_rate ?? "-"}</td>
                      <td>{invoice?.description ?? "-"}</td>
                      <td>
                        <Button>Edit</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="mx-5">
            <h3>Invoice Claim Details</h3>
            <div className="mb-3">
              <Form.Label htmlFor="inv_no">Invoice Doc</Form.Label>
              <Form.Control type="text" onChange={(e) => setInvoiceListData({ ...invoiceListData, inv_no: e.target.value })} id="inv_no" aria-describedby="" />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="po_no">PO No</Form.Label>
              <Form.Control type="text" onChange={(e) => setInvoiceListData({ ...invoiceListData, po_no: e.target.value })} id="po_no" aria-describedby="" />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="item">Item</Form.Label>
              <Form.Control type="number" onChange={(e) => setInvoiceListData({ ...invoiceListData, item: e.target.value })} id="item" aria-describedby="" />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="top">Quantity</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setInvoiceListData({ ...invoiceListData, top: e.target.valueAsNumber })}
                id="top"
                aria-describedby=""
              />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="inv_due_date">Invoice Due Date</Form.Label>
              <Form.Control
                disabled
                type="date"
                onChange={(e) => setInvoiceListData({ ...invoiceListData, inv_due_date: e.target.valueAsNumber })}
                id="inv_due_date"
                aria-describedby=""
              />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="amount_dpp">Amount DPP</Form.Label>
              <Form.Control
                type="number"
                min="0"
                onChange={(e) => setInvoiceListData({ ...invoiceListData, amount_dpp: e.target.valueAsNumber })}
                id="amount_dpp"
                aria-describedby=""
              />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="amount_service">Amount Jasa</Form.Label>
              <Form.Control
                type="number"
                min="0"
                onChange={(e) => setInvoiceListData({ ...invoiceListData, amount_service: e.target.valueAsNumber })}
                id="amount_service"
                aria-describedby=""
              />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="amount_item">Amount Barang</Form.Label>
              <Form.Control
                type="number"
                min="0"
                onChange={(e) => setInvoiceListData({ ...invoiceListData, amount_item: e.target.value })}
                id="amount_item"
                aria-describedby=""
              />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="other_amount">Other Amount</Form.Label>
              <Form.Control
                type="number"
                min="0"
                onChange={(e) => setInvoiceListData({ ...invoiceListData, other_amount: e.target.value })}
                id="other_amount"
                aria-describedby=""
              />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="total_before_tax">Total Before Tax</Form.Label>
              <Form.Control
                type="number"
                min="0"
                onChange={(e) => setInvoiceListData({ ...invoiceListData, total_before_tax: e.target.value })}
                id="total_before_tax"
                aria-describedby=""
              />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="total_after_tax">Total After Tax</Form.Label>
              <Form.Control
                type="number"
                min="0"
                onChange={(e) => setInvoiceListData({ ...invoiceListData, total_after_tax: e.target.value })}
                id="total_after_tax"
                aria-describedby=""
              />
            </div>
            <Button
              onClick={(e) => {
                saveInvoiceDetails(e);
              }}
            >
              Submit
            </Button>
          </div>
          <div className="row my-5">
            <h3>Invoice List Details</h3>
            <Table striped borderless hover>
              <thead>
                <tr>
                  <th>Doc Received No</th>
                  <th>PO No</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Amount DPP</th>
                  <th>PPN Amount</th>
                  <th>PPH Payable</th>
                  <th>Total Before Tax</th>
                  <th>Total After Tax</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {invoiceList.map((invoice_list, index) => {
                  return (
                    <tr key={index}>
                      <td>{invoice_list?.doc_no ?? "-"}</td>
                      <td>{invoice_list?.po_no ?? "-"}</td>
                      <td>{invoice_list?.item ?? "-"}</td>
                      <td>{invoice_list?.quantity ?? "-"}</td>
                      <td>{invoice_list?.amount_dpp ?? "-"}</td>
                      <td>{invoice_list?.pph_amount ?? "-"}</td>
                      <td>{invoice_list?.pph_payable ?? "-"}</td>
                      <td>{invoice_list?.total_before_tax ?? "-"}</td>
                      <td>{invoice_list?.total_after_tax ?? "-"}</td>
                      <td>
                        <Button>Edit</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;
