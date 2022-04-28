import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

// Create anecdote
export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

// Update anecdote
export const addVote = (id) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const anecdoteToUpdate = anecdotes.find(anecdote => anecdote.id === id)
    const updatedAnecdote = {
      ...anecdoteToUpdate,
      votes: anecdoteToUpdate.votes + 1
    }
   const result = await anecdoteService.updateAnecdote(id, updatedAnecdote)
   const updatedList = await anecdoteService.getAll()
   dispatch(setAnecdotes(updatedList))
  }
}

export default anecdoteSlice.reducer