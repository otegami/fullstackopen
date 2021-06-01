const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
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

return async dispatch => {
  const notes = await noteService.getAll()
  dispatch({
    type: 'INIT_NOTES',
    data: notes,
  })
}

export const initializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteSer
  }
  return({
    type: 'INIT_ANECDOTES',
    data: anecdotes
  })
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
