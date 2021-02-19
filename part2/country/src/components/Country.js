import React from 'react'

const Country = ({country, handleClick}) => {
  return (
    <li>
      {country.name}
      <button value={country.name} type='submit' onClick={handleClick} >Show</button>
    </li>
  )
}

export default Country
