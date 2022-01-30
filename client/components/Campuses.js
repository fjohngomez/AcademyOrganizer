import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCampuses } from '../store/campuses'
import CampusCard from './CampusCard'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'

const Campuses = () => {
  const dispatch =  useDispatch()
  useEffect(()=>{
    dispatch(getCampuses())
  }, [dispatch])

  let campuses = useSelector(state => state.campuses.all)
  console.log(campuses)
  return (
    <Container sx={{ py: 8}} maxWidth='md'>
      <Grid container spacing={4}>
        {campuses.map((campus, i)=>{
          return(
          <Grid item key={i} xs={12} sm={6} m={4}>
            {console.log('loaded')}
            <CampusCard campus={campus} />
          </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Campuses
