import React from 'react'
import { useSelector } from 'react-redux'
import Vote from './Vote'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    if ( state.filter === '') {
      return state.anecdotes
    }
    return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
  })
  const sortedAnecdotes = anecdotes.slice().sort((anec1, anec2) => {
    return anec2.votes - anec1.votes
  })

  return(
    <div>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <Vote anecdote={ anecdote }/>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
