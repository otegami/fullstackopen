import React from 'react'

const CountryDetail = ({country}) => {
  const languages = country.languages.map(langugae => <li key={langugae.name}>{langugae.name}</li>)

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>languages</h2>
      <ul>
        {languages}
      </ul>
      <img src={country.flag} alt={country.name} />
    </div>
  )
}

export default CountryDetail
