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
  reducers: {
    fetchCampus(state, action) {
      const campus = action.payload
      state.sole = campus
    }
  },
  extraReducers: {
    [getCampus.fulfilled] : (state, action) => {
      state.sole = action.payload
      return state
    },
    [getCampus.rejected] : (state, action) => {
      state.error = action.error
    }
  }
})

export const { fetchCampus } = soleCampusSlice.actions
export default soleCampusSlice.reducer
