import {
    GET_TODOS,
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    TOGGLE_COMPLETED,
    TODOS_LOADING
} from '../actions/actionTypes';

export const getTodos = () => dispatch => {
  try{
    dispatch(setTodosLoading());
    dispatch({
      type: GET_TODOS,
      payload: JSON.parse(localStorage.getItem('todo-state')).todos
    })
  }catch(e){
    console.log(e)
  }
};

export const addTodo = item => (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_TODO,
      payload: item
    })
  } catch (error) {
    console.log(error)
  }
};

export const deleteTodo = id => (dispatch, getState) => {
  try {
    dispatch({
      type: REMOVE_TODO,
      payload: id
    })
  } catch (error) {
    console.log(error)
  }
};

export const updateTodo = id => (dispatch, getState) => {

  try {
    dispatch({
      type: UPDATE_TODO,
      payload: id
    })
  } catch (error) {
    console.log(error)
  }
};

export const toggleCompleted = id => (dispatch, getState) => {
  try {
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: id
    })
  } catch (error) {
    console.log(error)
  }
};

export const setTodosLoading = () => {
  return {
    type: TODOS_LOADING
  };
};
