import { createAsyncThunk } from "@reduxjs/toolkit"

export const getCampuses = createAsyncThunk(
  'campuses/getCampuses',
  async() => {
    try{
      const campuses = await axios.get('/api/campuses')
      return campuses.data
      // const obj = {
      //   name: 'name',
      //   address: 'address',
      //   description: 'addd'
      // }
      // const newCampus = await axios.post('/api/campuses', obj)
      // return newCampus.data
    } catch(e) { return Promise.reject(e) }
  }
)
