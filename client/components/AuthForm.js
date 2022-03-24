import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {authenticate} from '../store'
import { useLocation } from 'react-router-dom'
import { Box, Typography, TextField, FormControlLabel, Checkbox, Button } from '@mui/material'

const AuthenForm = () => {
  const [type, setType] = useState('')
  const [displayName, setDisplayName] = useState('')

  let location = useLocation()
  useEffect(()=>{
    if(location.pathname === "/signup"){
      setType("signup")
      setDisplayName("Sign Up")
    } else {
      setType("login")
      setDisplayName("Login")
    }
  })

  let error = useSelector(state=> state.auth.error)

  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const formName = type
    const username = evt.target.username.value
    const password = evt.target.password.value
    dispatch(authenticate(username, password, formName))
  }

  return(
    <Box sx={{
      mt: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Typography component="h1" variant="h5">
        {displayName}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{
        mt:1
      }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="username"
          name="username"
          autoFocus
          />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        {/* remember me button not active in working */}
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2}}
        >
          {displayName}
        </Button>


        {error && error.response &&
        <Typography>{error.response.data}</Typography>}

      </Box>
    </Box>
  )
}

export default AuthenForm
