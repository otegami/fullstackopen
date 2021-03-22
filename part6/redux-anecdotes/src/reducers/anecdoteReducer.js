const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ANECDOTE': {
      return [...state, action.data]
    }
    case 'ADD_VOTE': {
      const id = action.data.id
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id === id ? changedAnecdote : anecdote)
    }
    case 'INIT_ANECDOTES': {
      return action.data
    }
    default:
      return state
  }
}

export default anecdoteReducer

export const addVote = (id) => {
  return {
    type: 'ADD_VOTE',
    data: { id }
  }
}

export const addAnecdote = (data) => {
  return {
    type: 'ADD_ANECDOTE',
    data,
  }
}

export const initialAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}
