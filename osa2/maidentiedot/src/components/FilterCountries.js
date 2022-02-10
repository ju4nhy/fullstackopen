import React from 'react'
import CountryInfo from './CountryInfo'

const FilterCountries = ({ countryData, searchFilter, setSearchFilter, weatherData, setActiveCountry }) => {
  
  const filteredCountries = searchFilter ? countryData.filter(country => country.name.toLowerCase().includes(searchFilter.toLowerCase())) : countryData
  
    if (filteredCountries.length < 1) {
        return ( <h5>Nothing found.</h5> )
    } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
        return(  
            <ul>   
              {filteredCountries.map(country => 
                <li key={country.name}>{country.name} 
                <button type="submit" onClick={() => {setSearchFilter(country.name); setActiveCountry(country.name)}}>Info</button>
                </li>
              )}     
            </ul>    
        ) 
    } else if (filteredCountries.length === 1) { 
        return(
            <div>
              <CountryInfo weatherData={weatherData} setActiveCountry={setActiveCountry} filteredCountries={filteredCountries} />
            </div>         
          ) 
    } 

    return(
            <ul>   
                {countryData.map(country => 
                <li key={country.nativeName}>{country.name}</li>
                )}     
            </ul> 
        ) 
}

export default FilterCountries