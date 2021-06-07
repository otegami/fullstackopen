import axios from 'axios'
import { useState, useEffect } from 'react'

export const useCountry = (name) => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    const fetchCountryDetail = async (name) => {
      const countryDetail = axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      return countryDetail
    }

    if(name) {
      fetchCountryDetail(name).then(countryDetail => {
        setValue(countryDetail.data[0])
        debugger
      })
    }
  }, [name])

  return { value }
}
