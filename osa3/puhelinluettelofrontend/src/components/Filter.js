import React from 'react'

// Filter -hakukenttĂ¤
const Filter = ({ newFilter, handleFilterChange }) => {
    return (
        <div>
            <h4>Search</h4>
            <input value={newFilter} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter