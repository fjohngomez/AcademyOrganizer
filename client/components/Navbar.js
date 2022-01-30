import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {logout} from '../store'
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'

function Navbar () {
  const isLoggedIn = useSelector(state => !!state.auth.id);
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
  }

  //Pages
  const pages = [
    {
      displayName: 'Campuses',
      link: '/campuses',
      ariaLabel: 'navigate-to-campuses'
    },
    {
      displayName: 'Students',
      link: '/students',
      ariaLabel: 'navigate-to-students'
    }
  ]

  const navigate = useNavigate()

  // button style
  const NavButtonStyle = {
    my: 2,
    color: 'white',
    display:'block'
  }

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">

        <Toolbar variant="dense" sx={{

        }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
            Menu
          </IconButton>
        <Box sx={{
          flexGrow: 1,
          display: {xs: 'none', md: 'flex'}
        }}>
          {pages.map((page,i)=>{
            const { displayName, link,  ariaLabel } = page
            return (
              <Button
                key={i}
                sx={NavButtonStyle}
                aria-label={ariaLabel}
                onClick={() => navigate(link)}
              >
              {displayName}
              </Button>
            )
          })}
          </Box>

          <Box sx={{
            flexGrow: 1,
            display: {xs: 'none', md: 'flex'},
            alignSelf: 'flex-end',
            justifyContent: 'flex-end'
          }}>
          {isLoggedIn ? (
              <>
              <Button sx={NavButtonStyle}
              onClick={()=> navigate('/home')}
              aria-label='navigate-to-homepage'
              >
                Home
              </Button>
              <Button
              onClick={handleClick} sx={NavButtonStyle}
              aria-label='application-logout'>
              Logout
            </Button>
            </>
            ) : (
              <>
              <Button sx={NavButtonStyle}
              onClick={()=> navigate('/login')}
              aria-label='navigate-to-login-page'
              >
                Login
              </Button>
              <Button sx={NavButtonStyle}
              onClick={()=> navigate('/signup')}
              aria-label='navigate-to-signup-page'
              >
                Sign Up
              </Button>
              </>
          )}
        </Box>





        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
