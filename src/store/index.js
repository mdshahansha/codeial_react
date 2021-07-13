import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';

let store;

export function configureStore() {
  // thunk->
  // redux-thunk lets the action creators invert control by dispatching functions.
  // They would receive dispatch as an argument and may call it asynchronously Such functions are called thunks.
  store = createStore(reducer, applyMiddleware(thunk, logger));
  // logger->
  //It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. 
  //People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.
  return store;
}
