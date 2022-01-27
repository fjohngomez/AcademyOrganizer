import { configureStore } from '@reduxjs/toolkit'
import {createLogger} from 'redux-logger'
import auth from './auth'
import campusesSlice from './campuses'

const store = configureStore({
  reducer: {
    auth,
    campuses: campusesSlice
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), createLogger({collapsed: true})]
})
export default store
export * from './auth'
