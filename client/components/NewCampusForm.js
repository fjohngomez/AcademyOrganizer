import React, { useState, useEffect } from 'react';
import { createCampus } from '../store/campuses'
import  { useDispatch } from 'react-redux'
import { TextField, Divider } from '@mui/material'

const NewCampusForm = (props) => {

  const dispatch = useDispatch()
  const [intake, setIntake] = useState({
    name: 'test',
    address: '123test',
    description: '1231',
    imageURL: '1231',
  })

  const handleChange = (e) => {
    setIntake({
      ...intake,
      [e.target.id]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('before submit:', intake)
    console.log('props', props)
    dispatch(createCampus(intake))
    props.set(true)
  }

  return (
    <div>
      <div className="componentContainer">
      <form onSubmit={handleSubmit}>
        <div className="createForm">
            <TextField required id="name" label="Name" onChange={handleChange} margin="normal" />
            <Divider />
            <TextField
            required id="address" label="Address"
            onChange={handleChange} margin="normal" />
            <Divider />
            <TextField id="description" label="Description" onChange={handleChange}  margin="normal" multiline={true} />
            <Divider />
            <TextField id="imageURL" label="Image URL" onChange={handleChange} multiline={true} margin="normal" />

          </div>
        <input type="submit" />
      </form>
      </div>
    </div>
  )
}

export default NewCampusForm

