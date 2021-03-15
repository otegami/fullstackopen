import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const handleSearchAnecdoteChange = event => {
    const filterAnecdote = event.target.value
    dispatch(setFilter(filterAnecdote))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleSearchAnecdoteChange} />
    </div>
  )
}

export default Filter
