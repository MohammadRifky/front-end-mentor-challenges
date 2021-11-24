import axios from 'axios';
import {
    GET_TODOS,
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    TOGGLE_COMPLETED,
    TODOS_LOADING
} from '../actions/actionTypes';

export const getTodos = () => dispatch => {
  dispatch(setTodosLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispatch({
        type: GET_TODOS,
        payload: res.data
      })
    )
    .catch(err =>
        console.log(err)
    );
};

export const addTodo = item => (dispatch, getState) => {
  axios
    .post('/api/items', item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_TODO,
        payload: res.data
      })
    )
    .catch(err =>
        console.log(err)
    );
};

export const deleteTodo = id => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: REMOVE_TODO,
        payload: id
      })
    )
    .catch(err =>
        console.log(err)
    );
};

export const updateTodo = id => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: UPDATE_TODO,
        payload: id
      })
    )
    .catch(err =>
        console.log(err)
    );
};

export const toggleCompleted = id => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: TOGGLE_COMPLETED,
        payload: id
      })
    )
    .catch(err =>
        console.log(err)
    );
};

export const setTodosLoading = () => {
  return {
    type: TODOS_LOADING
  };
};
