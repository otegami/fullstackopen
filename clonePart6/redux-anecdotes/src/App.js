import React from 'react'
import Notification from './components/Notification'
import NewAnecdote from './components/NewAnecdote'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App
