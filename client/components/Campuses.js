import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCampuses } from '../store/campuses'
import { Box, Divider, Typography } from '@mui/material'

const Campuses = () => {
  const dispatch =  useDispatch()
  useEffect(()=>{
    dispatch(getCampuses())
  }, [dispatch])

  let campuses = useSelector(state => state.campuses.all)
  console.log('campuses component', campuses)
  return (
    <>
    {campuses.map(campus => {
      return (
        <Box sx={{
          height: "50vh",
          width: "50vw",
          pt: 3,
          pb: 3
        }}>
          <Typography variant="h5">
            {campus.name}
          </Typography>
          <Divider />
          <Typography variant="body1">
            {campus.description}
          </Typography>
        </Box>
      )
    })}

    </>
  )
}

export default Campuses
