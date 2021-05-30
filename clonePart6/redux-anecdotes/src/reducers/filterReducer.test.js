import filterReducer from './filterReducer'
import deepFreeze from 'deep-freeze'

describe('filterReducer', () => {
  test('returns new state with action SET_FILTER', () => {
    const state = ['']
    const action = {
      type: 'SET_FILTER',
      filter: 'Search a word'
    }

    deepFreeze(state)
    const newState = filterReducer(state, action)
    expect(newState).toEqual(action.filter)
  })
})