import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'counter',
  initialState : {
    todos: [],
  },
  reducers: {
    addTodo: ( state , action ) => {
        state.todos.push(action.payload)
    },
    getTodos: (state) => {
        state.value -= 1
    },
    removeTodo: (state, action) => {
        state.value += action.payload
    },
    updateTodo: (state) => {
        state.value += 1
    },
    toggleCompleted: (state) => {
        state.value -= 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, getTodos, removeTodo, updateTodo, toggleCompleted } = todoSlice.actions

export default todoSlice.reducer

//  case ADD_TODO:
//         return {
//             ...state,
//             items: [action.payload, ...state.todos]
//         };
//     case GET_TODOS:
//         return {
//             ...state,
//             items: action.payload,
//             loading: false
//         }
//     case REMOVE_TODO:
//         return {
//             ...state,
//             items: state.todos.filter(todo => todo.id !== action.payload)
//         }
//     case UPDATE_TODO:
//         return {
//             ...state,
//             items: state.todos.map(todo => ( todo.id === action.payload 
//                 ? {...todo, ...action.payload} 
//                 : todo))
//         }
//     case TOGGLE_COMPLETED:
//         return {
//             ...state,
//             items: state.todos.map(todo => (todo.id === action.payload 
//                 ? {...todo, isCompleted : !todo.isCompleted} 
//                 : todo))
//         }
//     case TODOS_LOADING:
//         return {
//             ...state,
//             loading: true
//         }