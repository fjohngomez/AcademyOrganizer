import React, { useEffect, useState } from 'react' ;
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container, Box, Paper, Pagination } from '@mui/material';
import { getStudents, resetStudents } from '../store/students';
import usePagination from './Pagination';

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

  //pagination variables
  let [page, setPage] = useState(1);
  const per_page = 10;
  const count = Math.ceil(students.length / per_page);
  const _DATA = usePagination(students, per_page);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  }

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
      {_DATA.currentData().map((value, idx) => {
        return (<DataVisual data={value} key={idx} />)
      })}
      <Pagination
      count={count}
      size='small'
      page={page}
      variant='outlined'
      shape='rounded'
      onChange={handleChange} />
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
