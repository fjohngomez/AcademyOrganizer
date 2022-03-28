import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getStudent = createAsyncThunk(
  'student/getStudent',
  async (id) => {
    try {
      const student = await axios.get(`/api/students/${id}`)
      return student.data
    } catch (err) { return Promise.reject(e) }
  }
)

const initialState = {
  sole: {},
  error: ''
}

const soleStudentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {},
  extraReducers: {
    [getStudent.fulfilled] : (state, action) => {
      state.sole = action.payload
    },
    [getStudent.rejected] : (state, action) => {
      state.error = action.error
    }
  }
})

export default soleStudentSlice.reducer
