import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStudents, resetStudents } from '../store/students'
import { Box, Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import NewStudentForm from './NewStudentForm';

const Students = () => {
  const dispatch = useDispatch();
  const [created, setCreated] = useState(false);

  useEffect(()=>{
    dispatch(getStudents())

    return function () {
      dispatch(resetStudents())
    }
  }, [dispatch])

  const students = useSelector(state => state.students.all)

  return (
    <>
    <NewStudentForm set={setCreated} />

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
          Campus: {campus ? (<Link to={`/campuses/${campus.id}`}>
          {campus.name}
            </Link>) : (`no campus`)}


        </Box>
      )
    })}
    </>
  )
}

export default Students
