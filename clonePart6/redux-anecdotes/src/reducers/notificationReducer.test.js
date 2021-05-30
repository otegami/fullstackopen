import notificationReducer from './notificationReducer'
// TODO: deepFreeze を追加したら外す
// import deepFreeze from 'deep-freeze'

describe('notificationReducer', () => {
  test('returns new state with action SET_NOTIFICATION', () => {
    const state = ['']
    const action = {
      type: 'SET_NOTIFICATION',
      notification: 'set new notification'
    }

    // deepFreeze(state)
    const newState = notificationReducer(state, action)
    expect(newState).toEqual(action.notification)
  })

  test('returns new state with action REMOVE_NOTIFICATION', () => {
    const state = ['Here is a notification']
    const action = {
      type: 'REMOVE_NOTIFICATION',
      notification: 'remove a notification'
    }

    // deepFreeze(state)
    const newState = notificationReducer(state, action)
    expect(newState).toEqual('')
  })
})