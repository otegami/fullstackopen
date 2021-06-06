// import axios from 'axios'
// import { useState, useEffect } from 'react'

// export const useCountry = (name) => {
//   const [country, setCountry] = useState(null)

//   useEffect(() => {
//     const fetchCountry = async (name) => {
//       const countryDetail = axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
//       return countryDetail
//     }

//     if(name) {
//       fetchCountry(name).then(countryDetail => setCountry(countryDetail))
//     }
//   })

//   return { name, country }
// }
