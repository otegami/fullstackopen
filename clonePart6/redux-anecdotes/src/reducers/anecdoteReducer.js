import anecdoteSerive from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action.data', action.data)
  switch(action.type) {
    case 'ADD_ANECDOTE':
      return [...state, action.data]
    case 'ADD_VOTE': {
      const id = action.data.id
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : action.data
      )
    }
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteSerive.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteSerive.createAnecdote(content)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const addVote = await anecdoteSerive.vote(anecdote)
    dispatch({
      type: 'ADD_VOTE',
      data: addVote
    })
  }
}

export default anecdoteReducer
