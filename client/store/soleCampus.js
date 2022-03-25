import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCampus = createAsyncThunk(
  'campus/getCampus',
  async (id) => {
    try {
      const campus = await axios.get(`/api/campuses/${id}`)
      return campus.data
    } catch (err) { return Promise.reject(e)}
  }
)

const initialState = {
  sole: {},
  error: ''
}

const soleCampusSlice = createSlice({
  name: 'campus',
  initialState,
  reducers: {},
  extraReducers: {
    [getCampus.fulfilled] : (state, action) => {
      state.sole = action.payload
    },
    [getCampus.rejected] : (state, action) => {
      state.error = action.error
    }
  }
})

export default soleCampusSlice.reducer