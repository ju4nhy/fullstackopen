import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Search from './components/Search'
import FilterCountries from './components/FilterCountries'

const App = () => {
  const [ countryData, setCountryData] = useState([]) 
  const [ weatherData, setWeatherData ] = useState([])
  const [ searchFilter, setSearchFilter ] = useState('')
  const [ activeCountry, setActiveCountry ] = useState('Lesotho')

// Get Country Data from API
useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountryData(response.data)
      })
}, [])

/* Weatherstack.comissa tuli rajat vastaan, 
joten tehty https://openweathermap.org/api käyttäen */

// Get Weather Data from Open Weather Map API
useEffect(() => {
  const api_key = process.env.REACT_APP_API_KEY
  axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${activeCountry}&units=metric&appid=${api_key}`)
    .then(response => {
      setWeatherData(response.data)
    })
}, [activeCountry])

const handleFilterChange = (event) => { 
  setSearchFilter(event.target.value)
}

  return (
    <div className="App">
        <Search searchFilter={searchFilter} handleFilterChange={handleFilterChange} /> 
        <FilterCountries 
          searchFilter={searchFilter} 
          countryData={countryData} 
          setSearchFilter={setSearchFilter} 
          weatherData={weatherData} 
          setActiveCountry={setActiveCountry} 
        />       
    </div>   
  );
}

export default App;