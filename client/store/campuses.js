import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//Thunks
export const getCampuses = createAsyncThunk(
  'campuses/getCampuses',
  async() => {
    try{
      const campuses = await axios.get('/api/campuses')
      return campuses.data
    } catch(e) { return Promise.reject(e) }
  }
  )

// Initial State
const initialState = {
  all: [],
  error: ''
}

const campusesSlice = createSlice({
  name: 'campuses',
  initialState,
  extraReducers: {
    [getCampuses.fulfilled] : (state, action) => {
      state.all = action.payload
    },
    [getCampuses.rejected] : (state, action) => {
      state.error = action.error
    }
  }
})

export default campusesSlice.reducer