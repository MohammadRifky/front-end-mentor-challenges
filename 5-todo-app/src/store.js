import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import todoReducer from './reducers/todoReducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState() || {};
// const initialState = {};

const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  todoReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middleWare))
);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  })
});

export default store;