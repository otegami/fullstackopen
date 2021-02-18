import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Countries from './components/Countries'

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
    setSearchCountry(event.target.value)
  }
  
  const filterdCountries = countries.filter(country => country.name.includes(searchCountry))
  const switchedContent = filterdCountries.length >= 10 ? "Too many matches, specify another filter" : <Countries countries={filterdCountries} />

  return(
    <div>
      find countries: <input value={searchCountry} onChange={handleSearchCountryChange} />
      <div>
        { switchedContent }
      </div>
    </div>
  )
}

export default App;
