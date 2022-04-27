import React from 'react';
import  { Card, CardHeader, CardActionArea, CardActions, CardMedia, CardContent, Grid, Typography, Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent } from '../store/students'

const StudentCard = (props) =>{
  const { id, firstName, lastName, gpa, email, imageURL, campus } = props.student
  const dispatch = useDispatch();

  const delStudent = (id) => {
    dispatch(deleteStudent(id));
    props.set(true)
  }

  return (
      <Grid lg={true} item>
      <Card sx={{
        width: 200
      }}>
        <CardHeader
        title={
          <Link to={`/students/${id}`}>
            <Typography sx={{
              fontSize: '16px',
              textAlign: 'center'
            }}>
              {firstName} {lastName}
            </Typography>
          </Link>}
        subheader={
          <Typography sx={{
            textAlign: 'center'
          }}>
            GPA: {gpa}
            <br></br>
            Email: {email}
          </Typography>}
        />
        <CardActionArea>
          <CardMedia
            sx={{
              height: '15vw'
            }}
            component="img"
            alt="Student image"
            height="80"
            image={imageURL}
            title={firstName}
          />
          <CardContent sx={{
            textAlign: 'center'
          }}>
            {campus ?
              (<Link to={`/campuses/${campus.id}`}>
              {campus.name}
              </Link>) : 'Unregistered Campus'}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/students/${id}`}>
            <Button size="small">
              Edit
            </Button>
          </Link>
            <Button size = "small" onClick={() => delStudent(id)}>
              Delete X
            </Button>
        </CardActions>
        {/* {props.unregister ? (<Button onClick={()=>props.unregister(props.student)}>
          Unregister</Button>) : <div />} */}

      </Card>
    </Grid>

  )
}

export default StudentCard;
