import React from 'react'
import { useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const Vote = ({ anecdote }) => {
  const dispatch = useDispatch()

  return(
    <div>
      has {anecdote.votes}
      <button onClick={() => dispatch(addVote(anecdote.id))}>vote</button>
    </div>
  )
}

export default Vote
