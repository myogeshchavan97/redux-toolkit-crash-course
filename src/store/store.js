import { applyMiddleware, compose, createStore } from 'redux';
import usersReducer from '../reducers/usersReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  usersReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
