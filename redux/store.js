import { createStore, applyMiddleware } from 'redux'

import promiseMiddleware from 'redux-promise-middleware'

import testReducer from './reducers/testReducer'

// var store = createStore(testReducer, applyMiddleware(promiseMiddleware()))

// export default store;
export function initializeStore () {
  return createStore(testReducer, applyMiddleware(promiseMiddleware))
}
