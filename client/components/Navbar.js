import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {logout} from '../store'
import { Box, AppBar, Toolbar, IconButton, Typography, Button, Container } from '@mui/material'

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
  const navButtonStyle = {
    color: 'white',
    display:'block'
  }

  const topNavButtonStyle = {
    ...navButtonStyle,
    my: 2
  }

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{
        backgroundColor: '#B6BFD3'
      }}>

        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
            Academy Organizer
          </IconButton>


          <Box sx={{
            flexGrow: 1,
            display: {xs: 'none', md: 'flex'},
            alignSelf: 'flex-end',
            justifyContent: 'flex-end'
          }}>
          {isLoggedIn ? (
              <>
              <Button sx={topNavButtonStyle}
              onClick={()=> navigate('/home')}
              aria-label='navigate-to-homepage'
              >
                Home
              </Button>
              <Button
              onClick={handleClick} sx={topNavButtonStyle}
              aria-label='application-logout'>
              Logout
            </Button>
            </>
            ) : (
              <>
              <Button sx={topNavButtonStyle}
              onClick={()=> navigate('/login')}
              aria-label='navigate-to-login-page'
              >
                Login
              </Button>
              <Button sx={topNavButtonStyle}
              onClick={()=> navigate('/signup')}
              aria-label='navigate-to-signup-page'
              >
                Sign Up
              </Button>
              </>
          )}
        </Box>

        </Toolbar>

        <Container maxWidth="xl" sx={{
          backgroundColor: "#8C94A4",
          minHeight: '6vh',
          display: 'flex',

        }}>
          <Box sx={{
          flexGrow: 1,
          display: {xs: 'none', md: 'flex'},
        }}>
          {pages.map((page,i)=>{
            const { displayName, link,  ariaLabel } = page
            return (
              <Button
                key={i}
                sx={navButtonStyle}
                aria-label={ariaLabel}
                onClick={() => navigate(link)}
              >
              {displayName}
              </Button>
            )
          })}
          </Box>


        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar
