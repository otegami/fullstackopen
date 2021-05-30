import filterReducer from './filterReducer'
import deepFreeze from 'deep-freeze'

describe('filterReducer', () => {
  test('returns new state with action SET_FILTER', () => {
    const state = ['ALL']
    const action = {
      type: 'SET_FILTER',
      filter: 'IMPORTANT'
    }

    deepFreeze(state)
    const newState = filterReducer(state, action)
    expect(newState).toEqual(action.filter)
  })
})