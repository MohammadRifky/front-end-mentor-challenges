import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import { loadState, saveState } from './localStorage'

const preloadedState = loadState() || {};

const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  preloadedState
})


store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  })
})
export default store 