import { createStore, applyMiddleware, combineReducers } from 'redux'

import promiseMiddleware from 'redux-promise-middleware'

import userReducer from './reducers/userReducer'

// export default store;
export function initializeStore () {
  return createStore(
    combineReducers({ userReducer }),
    applyMiddleware(promiseMiddleware())
  )
}
