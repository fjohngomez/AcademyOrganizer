import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { TextField, Divider } from '@mui/material';
import { createStudent } from '../store/students';

const NewStudentForm = (props) => {

  const defaultLocalState = {
    firstName: '',
    lastName: '',
    gpa: '',
    email: '',
    imageURL: '',
  }

  const dispatch = useDispatch();
  const [intake, setIntake] = useState(defaultLocalState);

  const handleChange = (e) => {
    setIntake({
      ...intake,
      [e.target.id] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(intake)
    const { gpa } = intake;
    if(gpa.toString().length <= 5){
      dispatch(createStudent(intake))
      setIntake(defaultLocalState)
      props.set(true)
    }
    else if(gpa.toString().length > 5){
      alert(`GPA max 4 numbers. example: 3.454 `)
    }
  }

  const { firstName, lastName, gpa, email, imageURL} = intake

  return (
    <div className="componentContainer">
    <form onSubmit={handleSubmit}>
      <div className="createForm">
          <TextField required id="firstName" label="First Name" value = {firstName} onChange={handleChange} margin="normal" />
          <Divider />
          <TextField
          required id="lastName" label="Last Name"
          value = {lastName} onChange={handleChange} margin="normal" />
          <Divider />
          <TextField
          required id="gpa" label="GPA"
          inputProps={{ inputMode: 'decimal'}}
          value={gpa} onChange={handleChange} margin="normal" />
          <Divider />
          <TextField id="email" label="E-mail" value={email} onChange={handleChange}  margin="normal" />
          <Divider />
          <TextField id="imageUrl" label="Image URL" value={imageURL} onChange={handleChange} multiline={true} margin="normal" />

        </div>
      <input type="submit" />
    </form>
  </div>
  )
}

export default NewStudentForm;
