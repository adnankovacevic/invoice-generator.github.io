
import React from 'react';
import PropTypes from 'prop-types';


function InvoiceMeta({ invoiceNumber, setInvoiceNumber, invoiceDate, setInvoiceDate, dueDate, setDueDate }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Invoice #</label>
                <input
                    type="text"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Invoice Date</label>
                <input
                    type="date"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Due Date</label>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
        </div>
    );
}
InvoiceMeta.propTypes = {
    invoiceNumber: PropTypes.string.isRequired,
    setInvoiceNumber: PropTypes.func.isRequired,
    invoiceDate: PropTypes.string.isRequired,
    setInvoiceDate: PropTypes.func.isRequired,
    dueDate: PropTypes.string.isRequired,
    setDueDate: PropTypes.func.isRequired
};
InvoiceMeta.defaultProps = {
    invoiceNumber: '',
    setInvoiceNumber: () => { },
    invoiceDate: '',
    setInvoiceDate: () => { },
    dueDate: '',
    setDueDate: () => { }
};
export default InvoiceMeta;