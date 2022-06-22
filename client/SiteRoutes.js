import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthenForm from './components/AuthForm';
import CampusCard from './components/CampusCard';
import Campuses from './components/Campuses';
import Home from './components/Home';
import Students from './components/Students';
import SoleCampus from './components/SoleCampus';
import {me} from './store'
import SoleStudent from './components/SoleStudent';
import ViewAll from './components/ViewAll';

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
          <Route path="/test" element={<ViewAll />} />
          <Route path="/campuses/:id" element={<SoleCampus />} />
          <Route path="/students/:id" element={<SoleStudent />} />

          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students" element={<ViewAll />} />
          <Route path="/login" element={<AuthenForm />} />
          <Route path="/signup" element={<AuthenForm />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      )}
    </div>
  )
}

export default SiteRoutes
