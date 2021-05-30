import notificationReducer from './notificationReducer'
import deepFreeze from 'deep-freeze'

// TODO: notificationReducer に action を追加した際にテストを追加する
describe('notificationReducer', () => {
  test('returns new state with action SET_FILTER', () => {
    const state = ['render here notification...']
    const action = {
      type: '',
      notification: ''
    }

    deepFreeze(state)
    const newState = notificationReducer(state, action)
    expect(newState).toEqual(action.notification)
  })
})