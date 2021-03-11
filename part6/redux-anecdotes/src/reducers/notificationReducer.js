const notificationReducer = (state = '', action) => {
  switch(action.type){
    case 'SHOW_VOTE':
      return `you voted '${action.data.content}'`
    case 'CREATED_ANECDOTE':
      return `you created '${action.data.content}'`
    case 'SET_NOTIFICATION':
      return action.data.content
    default:
      return state
  }
}

export const showVoteInfo = (anecdote) => {
  return {
    type: 'SHOW_VOTE',
    data: {
      content: anecdote
    }
  }
}

export const createdAnecdoteInfo = (anecdote) => {
  return {
    type: 'CREATED_ANECDOTE',
    data: {
      content: anecdote
    }
  }
}

export const setNotification = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    data: { content }
  }
}

export default notificationReducer
