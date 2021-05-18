import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer', () => {
  test('returns new state with action NEW_ANECDOTE', () => {
    const state = []
    const action = {
      type: 'ADD_ANECDOTE',
      data: {
        content: 'the new anecdote is created in store.',
        votes: 1,
        id: 1
      }
    }

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    console.log(newState)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })

  test('returns new state with action ADD_VOTE', () => {
    const state = [
      {
        content: 'the new anecdote is created in store.',
        votes: 1,
        id: 1
      },
    ]
  
    const action = {
      type: 'ADD_VOTE',
      data: {
        id: 1
      }
    }
  
    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
  
    expect(newState).toContainEqual({
      content: 'the new anecdote is created in store.',
      votes: 2,
      id: 1
    })
  })
})
