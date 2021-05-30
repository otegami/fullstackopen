import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const style = {
    marginBottom: 10
  }

  const handleChange = (event) => {
    event.preventDefault()
    const filter = event.target.value
    dispatch(setFilter(filter))
  }

  return (
    <div style={ style }>
      filter <input name="filter" onChange={ handleChange } />
    </div>
  )
}

export default Filter