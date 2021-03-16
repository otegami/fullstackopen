import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showVoteInfo } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes.filter(anecdote => anecdote.content.includes(filter))
  })
  const dispatch = useDispatch()
  const sortedAnecdotes = anecdotes.slice().sort((anec1, anec2) => {
    return anec2.votes - anec1.votes
  })

  return (
    <div>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(addVote(anecdote.id)) && dispatch(showVoteInfo(anecdote.content))}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
