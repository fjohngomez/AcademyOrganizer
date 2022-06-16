import React from 'react'
import  { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteCampus } from '../store/campuses';

const CampusCard = (props) => {

  const dispatch = useDispatch();

  const delCampus = (id) => {
    props.set(true)
    dispatch(deleteCampus(id))
  }

  const { id, name, imageURL, address, description, students } = props.campus
  return (
    <Card
    sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardMedia
        component='img'
        image={imageURL}
        alt={`${name}-Image`}
      />
      <CardContent sx={{
        flexGrow: 1
      }}>
        <Typography variant='h5' component='h2'>
          <Link to={`/campuses/${id}`}>
          {name}
          </Link>
        </Typography>
        <p>
          {`Students: ${students.length}`}
        </p>
        <Typography variant='body1'>
          {description}
        </Typography>
        <Typography variant="body2">
          Address: {address}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/campuses/${id}`}>
          <Button size='small'>View</Button>
        </Link>
        <Button size='small'>Edit</Button>
        <Button size='small' onClick={()=> delCampus(id)}>Delete X</Button>
      </CardActions>


    </Card>
  )
}

export default CampusCard
