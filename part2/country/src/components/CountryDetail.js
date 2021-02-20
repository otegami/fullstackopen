import React, {useState, useEffect}from 'react'
import axios from 'axios'
import WetherInfromation from './WeatherInfromation'

const CountryDetail = ({country}) => {
  const [weather, setWeather] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
  const languages = country.languages.map(langugae => <li key={langugae.name}>{langugae.name}</li>)

  useEffect(() => {
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`

    const eventWeatherHander = response => {
      setWeather(response.data.current)
    }
    const promiseWeather = axios.get(weatherUrl)
    promiseWeather.then(eventWeatherHander)
  }, [api_key, country.capital])

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {languages}
      </ul>
      <img src={country.flag} alt={country.name} />
      <WetherInfromation country={country} weather={weather}/>
    </div>
  )
}

export default CountryDetail
