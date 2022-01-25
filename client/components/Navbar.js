import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'

function Navbar () {
  const isLoggedIn = useSelector(state => !!state.auth.id);
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
  }


  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">

        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
            Menu
          </IconButton>

          {isLoggedIn ? (
              <>
            <Link to="/home">
            <Typography variant="h6" color="inherit" component="div" sx={{ textDecoration: "none"}}>
              Home
            </Typography>
            </Link>
            <Button onClick={handleClick} sx={{color: "white"}}>
              Logout
            </Button>
            </>
            ) : (
              <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              </>
          )}


        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
