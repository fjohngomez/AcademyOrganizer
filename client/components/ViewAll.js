import React, { useEffect, useState } from 'react' ;
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container, Box, Paper } from '@mui/material';

const ViewAll = () => {



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
