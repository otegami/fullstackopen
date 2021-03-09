const notificationReducer = (state = 'InitialMessage', action) => {
  switch(action.type){
    default:
      return state
  }
}

export const showVoteInfo = (id) => {
  return {
    type: 'SHOW_VOTE',
    data: { id }
  }
}

export const createdAnecdoteInfo = (id) => {
  return {
    type: 'CREATED_ANECDOTE',
    data: { id }
  }
}

export default notificationReducer
