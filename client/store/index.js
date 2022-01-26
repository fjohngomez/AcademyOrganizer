import { configureStore } from '@reduxjs/toolkit'
import {createLogger} from 'redux-logger'
import auth from './auth'

const store = configureStore({
  reducer: {
    auth,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), createLogger({collapsed: true})]
})
export default store
export * from './auth'
