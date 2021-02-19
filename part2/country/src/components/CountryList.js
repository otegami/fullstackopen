import React from 'react'
import Country from './Country'
import CountryDetail from './CountryDetail'

const CountryList = ({countries, handleClick}) => {
  if (countries.length >= 10) {
    return(
      <p>
        "Too many matches, specify another filter"
      </p>
    )
  } else if (countries.length === 1) {
    return (
      <CountryDetail country={countries[0]} />
    )
  } else {
    return (
      <ul>
        { countries.map(country => <Country key={country.name} country={country} handleClick={handleClick}/>)}
      </ul>
    )
  }
}

export default CountryList
