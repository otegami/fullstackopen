import anecdoteSerive from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action.data', action.data)
  switch(action.type) {
    case 'ADD_ANECDOTE':
      return [...state, action.data]
    case 'ADD_VOTE': {
      const id = action.data.id
      const voteAnecdote = state.find(n => n.id === id)
      const changedAnecdote = {
        ...voteAnecdote,
        votes: voteAnecdote.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
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

export const createAnecdote = (data) => {
  return({
    type: 'ADD_ANECDOTE',
    data
  })
}

export const addVote = (id) => {
  return({
    type: 'ADD_VOTE',
    data: { id }
  })
}

export default anecdoteReducer
