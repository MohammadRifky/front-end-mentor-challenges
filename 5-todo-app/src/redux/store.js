import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import themeReducer from './slices/themeSlice'
import todoFilterSlice from './slices/todoFilterSlice'
import { loadState, saveState } from './localStorage'

const preloadedState = loadState() || {};

const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme:  themeReducer,
    todoFilter: todoFilterSlice
  },
  preloadedState
})


store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  })
})
export default store 