import { configureStore } from '@reduxjs/toolkit'
import {createLogger} from 'redux-logger'
import auth from './auth'

import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// const reducer = combineReducers({ auth })
// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
// )
// const store = createStore(reducer, middleware)

const store = configureStore({
  reducer: {
    auth,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), createLogger({collapsed: true})]
})

export default store
export * from './auth'
