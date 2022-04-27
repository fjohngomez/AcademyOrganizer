import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { getCampus, resetCampus } from '../store/soleCampus';

const SoleCampus = () => {

  const dispatch = useDispatch()
  const campusId = useParams().id

  useEffect(()=>{
    dispatch(getCampus(campusId));

    return function () {
      dispatch(resetCampus())
    }
  }, [dispatch])

  const campus = useSelector(state => state.campus)
  const { id, name, imageURL, address, description, students } = campus.sole


  return (
    <div>
      <h1>{name}</h1>
      <img href={imageURL} />
      <strong>Address:</strong>
      {address}
      <br></br>
      {description}
      <p>Students:</p>
      {students ? (
        students.map((student, i) =>{
          const { firstName, lastName, id } = student
          return (
            <div key={i}>
              <Link to={`/students/${id}`}>
              {`${firstName} ${lastName}`}
              </Link>
            </div>
          )
        })
      ) : 'No students'}

    </div>
  )
}

export default SoleCampus
