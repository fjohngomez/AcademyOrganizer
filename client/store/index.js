import { configureStore } from '@reduxjs/toolkit'
import {createLogger} from 'redux-logger'
import auth from './auth'
import campusesSlice from './campuses'
import studentsSlice from './students'
import soleCampusSlice from './soleCampus'

const store = configureStore({
  reducer: {
    auth,
    campuses: campusesSlice,
    students: studentsSlice,
    campus: soleCampusSlice,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), createLogger({collapsed: true})]
})
export default store
export * from './auth'
