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
      link: '/campuses'
    },
    {
      displayName: 'Students',
      link: '/students'
    }
  ]

  const navigate = useNavigate()


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
            const { displayName, link } = page
            return (
              <Button
                key={i}
                sx={{
                  my: 2, color: 'white', display:'block'
                }}
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
              <Button sx={{
                my: 2, color: 'white', display:'block',
              }}
              onClick={()=> navigate('/home')}
              >
                Home
              </Button>
              <Button
              onClick={handleClick} sx={{
                my: 2, color: 'white', display:'block',
              }}>
              Logout
            </Button>
            </>
            ) : (
              <>
              <Button sx={{
                my: 2, color: 'white', display:'block',
              }}
              onClick={()=> navigate('/login')}
              >
                Login
              </Button>
              <Button sx={{
                my: 2, color: 'white', display:'block',
              }}
              onClick={()=> navigate('/signup')}
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
