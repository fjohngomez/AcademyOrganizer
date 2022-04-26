import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStudents, resetStudents } from '../store/students'
import { Grid, Box, Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import NewStudentForm from './NewStudentForm';
import StudentCard from './StudentCard'

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
    <Grid container
      sx={{ py: 8, px: 8, justifyContent: 'space-evenly' }}
      maxWidth='full'
      spacing={2}>
      <Grid item xs={12} sm={4} m={2} lg={2}>
        <NewStudentForm set={setCreated} />
      </Grid>

    {students.map((student, i) => {

      return (
        <Grid item xs={12} sm={4} m={2} lg={2} key={i}>
          <StudentCard student={student} />
        </Grid>
        // <Box
        //   key={i}
        //   sx={{
        //   height: "50vh",
        //   width: "50vw",
        //   pt: 3,
        //   pb: 3
        // }}>
        //   <Typography variant="h5">
        //     <Link to={`/students/${id}`}>
        //     {firstName}{lastName}
        //     </Link>
        //   </Typography>
        //   <p>
        //     <img src={imageURL} />
        //   </p>
        //   <Divider />
        //   <Typography variant="body1">
        //     Email: {email}
        //   </Typography>
        //     GPA: {gpa}
        //   <br></br>
        //   Campus: {campus ? (<Link to={`/campuses/${campus.id}`}>
        //   {campus.name}
        //     </Link>) : (`no campus`)}


        // </Box>
      )
    })}
    </Grid>
  )
}

export default Students
