import React, { useState, useEffect } from 'react';

import InvoiceHeader from './components/InvoiceHeader';
import PartyDetails from './components/PartyDetails';
import InvoiceMeta from './components/InvoiceMeta';
import LineItemsTable from './components/LineItemsTable';
import InvoiceTotals from './components/InvoiceTotals';
import Notes from './components/Notes';
import Footer from './components/Footer';

import { formatCurrency } from './utils/formatCurrency';


function App() {
  const [invoiceNumber, setInvoiceNumber] = useState('INV-001');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().slice(0, 10));
  const [dueDate, setDueDate] = useState(new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().slice(0, 10));
  const [senderName, setSenderName] = useState();
  const [senderAddress, setSenderAddress] = useState();
  const [senderCity, setSenderCity] = useState();
  const [senderEmail, setSenderEmail] = useState();
  const [recipientName, setRecipientName] = useState();
  const [recipientAddress, setRecipientAddress] = useState();
  const [recipientCity, setRecipientCity] = useState();
  const [recipientEmail, setRecipientEmail] = useState();
  const [lineItems, setLineItems] = useState([
    { id: 1, description: 'Item 1', quantity: 0, price: 0 },
    { id: 2, description: 'Item 2', quantity: 0, price: 0 },
  ]);
  const [nextItemId, setNextItemId] = useState(3);
  const [notes, setNotes] = useState();
  const [taxRate, setTaxRate] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [total, setTotal] = useState(0);



  useEffect(() => {
    const newSubtotal = lineItems.reduce((acc, item) => {
      const quantity = parseFloat(item.quantity) || 0;
      const price = parseFloat(item.price) || 0;
      return acc + (quantity * price);
    }, 0);
    const currentTaxRate = parseFloat(taxRate) || 0;
    const newTaxAmount = (newSubtotal * currentTaxRate) / 100;
    const newTotal = newSubtotal + newTaxAmount;
    setSubtotal(newSubtotal);
    setTaxAmount(newTaxAmount);
    setTotal(newTotal);
  }, [lineItems, taxRate]);



  const handleLineItemChange = (index, field, value) => {
    const updatedItems = [...lineItems];
    const processedValue = (field === 'quantity' || field === 'price')
      ? (value === '' ? '' : parseFloat(value) || 0)
      : value;
    if (updatedItems[index]) {
      updatedItems[index] = { ...updatedItems[index], [field]: processedValue };
      setLineItems(updatedItems);
    } else {
      console.error("Attempted to update a non-existent line item at index:", index);
    }
  };
  const handleAddLineItem = () => {
    setLineItems([...lineItems, { id: nextItemId, description: '', quantity: 1, price: 0 }]);
    setNextItemId(prevId => prevId + 1);
  };
  const handleRemoveLineItem = (idToRemove) => {
    setLineItems(lineItems.filter(item => item.id !== idToRemove));
  };
  const handlePrint = () => {
    const elementsToHide = document.querySelectorAll('.no-print');
    elementsToHide.forEach(el => el.classList.add('print:hidden'));
    window.print();
    setTimeout(() => {
      elementsToHide.forEach(el => el.classList.remove('print:hidden'));
    }, 100);
  };


  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-100 font-poppins text-base text-gray-800 min-h-screen">
      <InvoiceHeader
        handlePrint={handlePrint}
        printButtonClass="btn-primary"
      />
      <div className="card print:shadow-none print:border-none print:p-0"> { }
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 print:mb-6">
          <div>
            <PartyDetails
              title="From"
              name={senderName} setName={setSenderName}
              address={senderAddress} setAddress={setSenderAddress}
              city={senderCity} setCity={setSenderCity}
              email={senderEmail} setEmail={setSenderEmail}
              isSender={true}
            />
            <InvoiceMeta
              invoiceNumber={invoiceNumber} setInvoiceNumber={setInvoiceNumber}
              invoiceDate={invoiceDate} setInvoiceDate={setInvoiceDate}
              dueDate={dueDate} setDueDate={setDueDate}
            />
          </div>

          <div>
            <PartyDetails
              title="Bill To"
              name={recipientName} setName={setRecipientName}
              address={recipientAddress} setAddress={setRecipientAddress}
              city={recipientCity} setCity={setRecipientCity}
              email={recipientEmail} setEmail={setRecipientEmail}
              isSender={false}
            />
          </div>
        </div>
        <LineItemsTable
          items={lineItems}
          handleLineItemChange={handleLineItemChange}
          handleAddLineItem={handleAddLineItem}
          handleRemoveLineItem={handleRemoveLineItem}
          formatCurrency={formatCurrency}
          tableClassName="invoice-table"
          addButtonClass="btn-primary no-print"
          removeButtonClass="text-red-500 hover:text-red-700 no-print"
        />
        <InvoiceTotals
          subtotal={subtotal}
          taxRate={taxRate} setTaxRate={setTaxRate}
          taxAmount={taxAmount}
          total={total}
          formatCurrency={formatCurrency}
        />
        <Notes
          notes={notes}
          setNotes={setNotes}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
