
import React from 'react';
import PropTypes from 'prop-types';


function Notes({ notes, setNotes }) {
    return (
        <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Notes</h4>
            <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any notes or payment terms here..."
                rows="3"
                className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
        </div>
    );
}
Notes.propTypes = {
    notes: PropTypes.string.isRequired,
    setNotes: PropTypes.func.isRequired
};
Notes.defaultProps = {
    notes: '',
    setNotes: () => { }
};
export default Notes;