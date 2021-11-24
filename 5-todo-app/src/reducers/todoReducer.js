import {
    GET_TODOS,
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    TOGGLE_COMPLETED,
    TODOS_LOADING
} from '../actions/actionTypes';

const initialState = {
  todos: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
        return {
            ...state,
            items: [action.payload, ...state.todos]
        };
    case GET_TODOS:
        return {
            ...state,
            items: action.payload,
            loading: false
        }
    case REMOVE_TODO:
        return {
            ...state,
            items: state.todos.filter(todo => todo.id !== action.payload)
        }
    case UPDATE_TODO:
        return {
            ...state,
            items: state.todos.map(todo => ( todo.id === action.payload 
                ? {...todo, ...action.payload} 
                : todo))
        }
    case TOGGLE_COMPLETED:
        return {
            ...state,
            items: state.todos.map(todo => (todo.id === action.payload 
                ? {...todo, isCompleted : !todo.isCompleted} 
                : todo))
        }
    case TODOS_LOADING:
        return {
            ...state,
            loading: true
        }
    default:
        return state;
  }
}
