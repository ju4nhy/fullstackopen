import React from 'react'

const Filter = ({ newFilter, handleFilterChange }) => {
    return (
        <div>
            <h4>Search</h4>
            <input value={newFilter} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter