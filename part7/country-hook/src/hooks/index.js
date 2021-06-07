import axios from 'axios'
import { useState, useEffect } from 'react'

export const useCountry = (name) => {
  const [data, setData] = useState(null)
  const [found, setFound] = useState(false)

  useEffect(() => {
    const fetchCountryDetail = async (name) => {
      const countryDetail = axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      return countryDetail
    }

    if(name) {
      fetchCountryDetail(name).then(countryDetail => {
        setData(countryDetail.data[0])
        setFound(true)
      }).catch(error => setFound(false))
    }
  }, [name])

  return { data, found }
}
