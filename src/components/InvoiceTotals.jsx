
import React from 'react';
import PropTypes from 'prop-types';


function InvoiceTotals({ subtotal, taxRate, setTaxRate, taxAmount, total, formatCurrency }) {
    return (
        <div className="flex flex-col items-end mb-10">
            <div className="w-full md:w-1/3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <label className="text-gray-600 flex items-center">
                        Tax Rate (%):
                        <input
                            type="number"
                            min="0"
                            value={taxRate}
                            onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                            className="w-16 ml-2 p-1 border border-gray-300 rounded text-right"
                        />
                    </label>
                    <span className="font-medium">{formatCurrency(taxAmount)}</span>
                </div>
                <div className="flex justify-between py-3 mt-2 bg-gray-100 px-4 rounded-md">
                    <span className="font-bold text-lg">Total:</span>
                    <span className="font-bold text-lg">{formatCurrency(total)}</span>
                </div>
            </div>
        </div>
    );
}
InvoiceTotals.propTypes = {
    subtotal: PropTypes.number.isRequired,
    taxRate: PropTypes.number.isRequired,
    setTaxRate: PropTypes.func.isRequired,
    taxAmount: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    formatCurrency: PropTypes.func.isRequired
};
InvoiceTotals.defaultProps = {
    subtotal: 0,
    taxRate: 0,
    setTaxRate: () => { },
    taxAmount: 0,
    total: 0,
    formatCurrency: (value) => value
};
export default InvoiceTotals;