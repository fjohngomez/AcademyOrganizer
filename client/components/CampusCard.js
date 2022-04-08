import React from 'react'
import  { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const CampusCard = (props) => {
  console.log('campus loaded', props)

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
        <Button size='small'>View</Button>
        <Button size='small'>Edit</Button>
      </CardActions>


    </Card>
  )
}

export default CampusCard
