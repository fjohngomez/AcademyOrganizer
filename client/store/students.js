import axios from 'axios'
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

//thunks
export const getStudents = createAsyncThunk(
  'students/getStudents',
  async() => {
    try {
      const students = await axios.get('/api/students')
      return students.data
    } catch(e) { return Promise.reject(e) }
  }
)


//initialState
const initialState = {
  all: [],
  error: ''
}

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  extraReducers: {
    [getStudents.fulfilled] : (state, action) => {
      state.all = action.payload
    },
    [getStudents.rejected] : (state, action) => {
      state.error = action.error
    }
  }
})

export default studentsSlice.reducer
