import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { getCampus } from '../store/soleCampus';

const SoleCampus = () => {

  const dispatch = useDispatch()
  const campusId = useParams().id

  useEffect(()=>{
    dispatch(getCampus(campusId))
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
      {/* {students.map((student, i) =>{
        const { firstName, lastName } = student
        return (
          <div key={i}>
            <p>{firstName}</p>
            {lastName}
          </div>
        )
      })} */}
    </div>
  )
}

export default SoleCampus
