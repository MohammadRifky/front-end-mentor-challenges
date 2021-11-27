import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todos',
  initialState : {
    todos: [],
  },
  reducers: {
    addTodo: ( state , action ) => {
      console.log(state)
        state.todos.push(action.payload)
    },
    // getTodos: (state) => {
    //     state.value -= 1
    // },
    removeTodo: (state, action) => {
      state =  {
        ...state,
        items: state.todos.filter(todo => todo.id !== action.payload)
      }
    },
    updateTodo: (state, action) => {
      state ={
        ...state,
        todos: state.todos.map(todo => ( todo.id === action.payload 
            ? {...todo, ...action.payload} 
            : todo))
      }
    },
    toggleCompleted: (state, action) => {
      state ={
        ...state,
        todos: state.todos.map(todo => (todo.id === action.payload 
            ? {...todo, isCompleted : !todo.isCompleted} 
            : todo))
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, getTodos, removeTodo, updateTodo, toggleCompleted } = todoSlice.actions

export default todoSlice.reducer