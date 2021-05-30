import React from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import NewAnecdote from './components/NewAnecdote'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App
