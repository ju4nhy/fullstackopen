import React from 'react'

const CountryInfo = ({ weatherData, setActiveCountry, filteredCountries }) => {
    // remove annoying decimals 
    const temp = Math.round(weatherData.main.temp)

    return (
        <div>
            {filteredCountries.map(country => 
                  <div key={country.alpha3Code} onLoad={() => setActiveCountry(country.name)}>
                      <img src={country.flag} alt="flag"></img>
                      <h2>{country.name}</h2>
                      <p>Capital: {country.capital}</p>
                      <p>Population: {country.population}</p>
                      <p>Languages:</p>
                          {country.languages.map(language =>
                            <li key={language.name}>- {language.name}</li>
                          )} 
                      <h3>Current Weather</h3>
                          {weatherData.weather.map(weather => 
                          <img key={weather.icon} className="weatherImg" src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weatherIcon"></img>
                          )}  
                      <h1>{temp} °C</h1>
                      <p>Wind: speed {weatherData.wind.speed} deg {weatherData.wind.deg} gust {weatherData.wind.gust}</p>          
                  </div> 
                )}      
        </div>
    )
}

export default CountryInfo