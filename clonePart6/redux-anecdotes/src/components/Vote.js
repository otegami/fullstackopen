import React from 'react'
import { useDispatch, useEffect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Vote = ({ anecdote }) => {
  const dispatch = useDispatch()
  const vote = (anecdote) => {
    dispatch(addVote(anecdote.id))
    dispatch(setNotification(`you voted to ${anecdote.content}`))
  }

  return(
    <div>
      has {anecdote.votes}
      <button onClick={() => vote(anecdote)}>vote</button>
    </div>
  )
}

export default Vote
