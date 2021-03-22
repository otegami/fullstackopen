import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { createdAnecdoteInfo } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdote'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const newAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch(addAnecdote(newAnecdote))
    dispatch(createdAnecdoteInfo(newAnecdote.content))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
