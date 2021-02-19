import React from 'react'

const CountryDetail = (countries) => {
  const countryInformation = countries.country[0]
  const languages = countryInformation.languages.map(langugae => <li key={langugae.name}>{langugae.name}</li>)

  return (
    <div>
      <h1>{countryInformation.name}</h1>
      <p>Capital: {countryInformation.capital}</p>
      <p>Population: {countryInformation.population}</p>
      <h2>languages</h2>
      <ul>
        {languages}
      </ul>
      <img src={countryInformation.flag} alt={countryInformation.name} />
    </div>
  )
}

export default CountryDetail
