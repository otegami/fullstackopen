import React from 'react'

const WetherInfromation = ({country, weather}) => {
  if (weather.length === 0) {
    return <p>Loading.... WeatherInfromation</p>
  } else {
    return (
      <div>
        <h2>Weather in {country.name}</h2>
        <p>Temperature: {weather.temperature}</p>
        <img src={weather.weather_incons} alt={weather.weather_descriptions} />
        <p>Wind: {weather.wind_speed} mph direction {weather.wind_dir}</p>
      </div>
    )
  }
}

export default WetherInfromation
