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
export const createCampus = createAsyncThunk(
  'campuses/createCampus',
  async(obj) => {
    try{
      const newCampus = await axios.post('/api/campuses', obj);
      console.log('newcampus obj', newCampus)
      if(newCampus.status === 201){
        const id = newCampus.data.id
        const campus = await axios.get(`/api/campuses/${id}`)
        return campus.data
      }
      // return newCampus.data
    } catch (e) { return Promise.reject(e)}
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
  reducers: {
    resetCampuses (state, a) {
      state.all = initialState.all
    }
  },
  extraReducers: {
    [getCampuses.fulfilled] : (state, action) => {
      state.all = action.payload
    },
    [getCampuses.rejected] : (state, action) => {
      state.error = action.error
    },
    [createCampus.fulfilled] : (state, action) => {
      console.log('triggers')
      state.all.push(action.payload)
    },
    [createCampus.rejected] : (state, action) => {
      state.error = action.error
    }
  }
  // extraReducers : (builder) => {
  //   builder.addCase(getCampuses.fulfilled.type, (state, action)=>{
  //     state.all = action.payload
  //     // state.all.push(action.payload)
  //   }),
  //   builder.addCase(createCampus.fulfilled.type, (state, action) => {
  //     state.all.push(action.payload)
  //   })
  // }
})

export const { resetCampuses } = campusesSlice.actions
export default campusesSlice.reducer
