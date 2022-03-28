import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStudents, resetStudents } from '../store/students'
import { Box, Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Students = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getStudents())

    return function () {
      dispatch(resetStudents())
    }
  }, [dispatch])

  const students = useSelector(state => state.students.all)

  return (
    <>
    {students.map((student, i) => {
      const { id, firstName, lastName, email, gpa, imageURL, campus } = student
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
            <Link to={`/students/${id}`}>
            {firstName}{lastName}
            </Link>
          </Typography>
          <p>
            <img src={imageURL} />
          </p>
          <Divider />
          <Typography variant="body1">
            Email: {email}
          </Typography>
            GPA: {gpa}
          <br></br>
          Campus: <Link to={`/campuses/${campus.id}`}>
          {campus.name}
            </Link>

        </Box>
      )
    })}
    </>
  )
}

export default Students
