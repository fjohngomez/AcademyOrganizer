import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStudents } from '../store/students'
import { Box, Divider, Typography } from '@mui/material'

const Students = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getStudents())
  }, [dispatch])

  const students = useSelector(state => state.students.all)

  return (
    <>
    {students.map((student, i) => {
      const { firstName, lastName, email, gpa } = student
      return (
        <Box
          key={i}
          sx={{
          height: "50vh",
          width: "50vw",
          pt: 3,
          pb: 3
        }}>
          <Typography variant="h5">
            {firstName}{lastName}
          </Typography>
          <Divider />
          <Typography variant="body1">
            {email}
          </Typography>
            {gpa}
        </Box>
      )
    })}
    </>
  )
}

export default Students
