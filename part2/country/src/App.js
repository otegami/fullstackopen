import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryList from './components/CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')

  useEffect(() => {
    const eventCountryHandler = response => {
      setCountries(response.data)
    }

    const promiseCountry = axios.get("https://restcountries.eu/rest/v2/all")
    promiseCountry.then(eventCountryHandler)
  }, [])

  const handleSearchCountryChange = (event) => {
    event.preventDefault()
    setSearchCountry(event.target.value)
  }
  const filterdCountries = countries.filter(country => country.name.includes(searchCountry))

  return(
    <div>
      <Filter value={searchCountry} handleChange={handleSearchCountryChange} />
      <CountryList countries={filterdCountries} handleClick={handleSearchCountryChange} />
    </div>
  )
}

export default App;
