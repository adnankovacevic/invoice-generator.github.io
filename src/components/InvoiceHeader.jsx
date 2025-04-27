import React from 'react';
import PropTypes from 'prop-types';


function InvoiceHeader({ handlePrint }) {
    return (
        <div className="flex justify-between items-center mb-6 no-print">
            <h1 className="text-3xl font-bold text-gray-800">Invoice Generator</h1>
            <button
                onClick={handlePrint}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow transition duration-150 ease-in-out"
            >
                <i className="fas fa-print mr-2"></i>
                Print / Save as PDF
            </button>
        </div>
    );
}
InvoiceHeader.propTypes = {
    handlePrint: PropTypes.func.isRequired,
};
InvoiceHeader.defaultProps = {
    handlePrint: () => { },
};
export default InvoiceHeader;