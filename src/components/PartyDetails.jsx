

import React from 'react';
import PropTypes from 'prop-types';


function PartyDetails({ title, name, setName, address, setAddress, city, setCity, email, setEmail, isSender }) {
    const alignmentClass = isSender ? '' : 'md:text-right';
    const inputAlignmentClass = isSender ? '' : 'md:text-right';

    return (
        <div>
            {isSender ? (
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">{name || "Your Company"}</h2>
            ) : (
                <h3 className={`text-lg font-semibold text-gray-500 mb-2 ${alignmentClass}`}>Bill To:</h3>
            )}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isSender ? "Your Company Name" : "Client Company Name"}
                className={`block w-full p-2 border border-gray-300 rounded-md mb-2 text-lg font-semibold ${inputAlignmentClass}`}
            />
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={isSender ? "Address" : "Client Address"}
                className={`block w-full p-2 border border-gray-300 rounded-md mb-1 ${inputAlignmentClass}`}
            />
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={isSender ? "City, State, Zip" : "Client City, State, Zip"}
                className={`block w-full p-2 border border-gray-300 rounded-md mb-1 ${inputAlignmentClass}`}
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isSender ? "Email" : "Client Email"}
                className={`block w-full p-2 border border-gray-300 rounded-md ${isSender ? 'mb-6' : ''} ${inputAlignmentClass}`}
            />
        </div>
    );
}

PartyDetails.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
    address: PropTypes.string.isRequired,
    setAddress: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
    setCity: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    isSender: PropTypes.bool.isRequired
};
export default PartyDetails;