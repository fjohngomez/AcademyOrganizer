import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import {me} from './store'

function SiteRoutes () {
  const isLoggedIn = useSelector(state => !!state.auth.id)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(me())
  }, [dispatch])

  return (
    <div>
      {console.log('check', isLoggedIn)}
      {isLoggedIn ? (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      )}
    </div>
  )
}

export default SiteRoutes
