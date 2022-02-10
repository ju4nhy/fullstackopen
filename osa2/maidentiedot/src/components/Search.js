import React from 'react'

const Search = ({ searchFilter, handleFilterChange }) => {
    return (
        <div>
            <h1>WEATHER APP</h1>
            <h3>Find countries</h3> 
            <input value={searchFilter} onChange={handleFilterChange}/>
        </div>
    )
}

export default Search