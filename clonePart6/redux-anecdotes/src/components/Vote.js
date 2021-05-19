import React from 'react'
import { useDispatch } from 'react-redux'

const Vote = ({ anecdote }) => {
  return(
    <div>
      has {anecdote.votes}
      <button onClick={() => vote(anecdote.id)}>vote</button>
    </div>
  )
}

export default Vote
