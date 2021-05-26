import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NewAnecdote from './components/NewAnecdote'
import Vote from './components/Vote'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <Vote anecdote={ anecdote }/>
        </div>
      )}
      <NewAnecdote />
    </div>
  )
}

export default App
