import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCampuses, resetCampuses } from '../store/campuses'
import CampusCard from './CampusCard'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import NewCampusForm from './NewCampusForm'

const Campuses = () => {
  const dispatch =  useDispatch()
  const [change, setChange] = useState(false)

  useEffect(()=>{
    setChange(false)
    dispatch(getCampuses())

    return function () {
      dispatch(resetCampuses())
    }
  }, [dispatch])

  let campuses = useSelector(state => state.campuses.all)
  return (
    <Container sx={{ py: 8}} maxWidth='full'>

      <Grid container>
        <Grid item xs={12} sm={5} m={4}>
          <NewCampusForm set={setChange} />
        </Grid>
        {campuses.length >= 1 ? (
          campuses.map((campus, i)=>{
            return(
            <Grid item key={i} xs={12} sm={5} m={4}>
              {console.log('loaded')}
              <CampusCard campus={campus} set={setChange} />
            </Grid>
            )
          })

        ) : (<div>Nothing</div>)}
      </Grid>
    </Container>
  )
}

export default Campuses
