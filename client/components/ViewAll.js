import React, { useEffect, useState } from 'react' ;
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container, Box, Paper } from '@mui/material';
import { getStudents, resetStudents } from '../store/students';
import Pagination from './Pagination';

const ViewAll = () => {
  const dispatch =  useDispatch();
  const [change, setChange] = useState(false);

  useEffect(()=>{
    setChange(false)
    dispatch(getStudents())

    return function () {
      dispatch(resetStudents())
    }
  }, [dispatch])

  const students = useSelector(state => state.students.all)

  function DataVisual (props) {
    const {firstName, lastName, email, imageURL, gpa} = props.data
    return (
      <>
      {`${firstName} ${lastName} ${email} ${imageURL} ${gpa}`}
      </>
    )
  }

  return (
    <Container
    maxWidth='full'
    sx={{
        py: 3,
        px: 6,
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: '85vh'
    }}>

    <Box component={Paper} elevation={5} sx={{
      minHeight: '68vh',
      width: '55vw'
    }}>
      <Pagination
      data={students}
      RenderComponent={DataVisual}
      title='Students'
      pageLimit={5}
      dataLimit={10} />
    </Box>

    <Box component={Paper} elevation={5} sx={{
      minHeight: '68vh',
      width: '40vw'
    }}>


    </Box>


    </Container>
  )
}

export default ViewAll
