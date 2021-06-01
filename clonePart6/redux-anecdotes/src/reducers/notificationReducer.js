const notificationReducer = (state = '', action) => {
  console.log(action.notification)
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'REMOVE_NOTIFICATION':
      return ''
    default:
      return state
  }
}

export const setNotification = (notification, resetTime) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification
    })
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION',
        notification: ''
      })
    }, resetTime * 1000)
  }
}

export default notificationReducer