
import React from 'react';
import PropTypes from 'prop-types';



function LineItemsTable({ items, handleLineItemChange, handleAddLineItem, handleRemoveLineItem, formatCurrency }) {
    return (
        <div className="mb-10 overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-4 w-1/2">Description</th>
                        <th className="py-3 px-4 text-center w-1/6">Qty</th>
                        <th className="py-3 px-4 text-right w-1/6">Unit Price</th>
                        <th className="py-3 px-4 text-right w-1/6">Total</th>
                        <th className="py-3 px-4 text-center no-print w-12"></th> {/* Action column */}
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-sm font-light">
                    {items.map((item, index) => (
                        <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-3 px-4">
                                <input
                                    type="text"
                                    value={item.description}
                                    onChange={(e) => handleLineItemChange(index, 'description', e.target.value)}
                                    placeholder="Item description"
                                    className="w-full p-1 border border-gray-200 rounded"
                                />
                            </td>
                            <td className="py-3 px-4 text-center">
                                <input
                                    type="number"
                                    min="0"
                                    value={item.quantity}
                                    onChange={(e) => handleLineItemChange(index, 'quantity', e.target.value)}
                                    className="w-16 p-1 border border-gray-200 rounded text-center"
                                />
                            </td>
                            <td className="py-3 px-4 text-right">
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={item.price}
                                    onChange={(e) => handleLineItemChange(index, 'price', e.target.value)}
                                    className="w-24 p-1 border border-gray-200 rounded text-right"
                                />
                            </td>
                            <td className="py-3 px-4 text-right font-medium">
                                {formatCurrency(item.quantity * item.price)}
                            </td>
                            <td className="py-3 px-4 text-center no-print">
                                <button
                                    onClick={() => handleRemoveLineItem(item.id)}
                                    className="text-red-500 hover:text-red-700 font-bold"
                                    title="Remove Item"
                                >
                                    &times;
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={handleAddLineItem}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow transition duration-150 ease-in-out no-print"
            >
                + Add Item
            </button>
        </div>
    );
}
LineItemsTable.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    handleLineItemChange: PropTypes.func.isRequired,
    handleAddLineItem: PropTypes.func.isRequired,
    handleRemoveLineItem: PropTypes.func.isRequired,
    formatCurrency: PropTypes.func.isRequired,
};
LineItemsTable.defaultProps = {
    items: [],
    handleLineItemChange: () => { },
    handleAddLineItem: () => { },
    handleRemoveLineItem: () => { },
    formatCurrency: (value) => value,
};
export default LineItemsTable;