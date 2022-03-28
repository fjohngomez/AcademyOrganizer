import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { getCampus } from '../store/soleCampus';

const SoleCampus = () => {

  const dispatch = useDispatch()
  const campusId = useParams().id

  const [enrolledStudents, setStudents] = useState([])



  useEffect(()=>{
    dispatch(getCampus(campusId));
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
          const { firstName, lastName } = student
          return (
            <div key={i}>
              {firstName},{lastName}
            </div>
          )
        })
      ) : ''}

    </div>
  )
}

export default SoleCampus
