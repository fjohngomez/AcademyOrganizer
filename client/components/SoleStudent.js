import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { resetStudent, getStudent } from '../store/soleStudent'

const SoleStudent = () => {

  const dispatch = useDispatch();
  const studentId = useParams().id

  useEffect(()=> {
    dispatch(getStudent(studentId))

    return function () {
      dispatch(resetStudent())
    }
  }, [dispatch])

  const student = useSelector(state => state.student)
  if(!student.sole){
    return  'does not exist'
  }

  const { firstName, lastName, email, gpa, campus, imageURL } = student.sole
  return (
    <div>

        <img src={imageURL} />
        <br></br>
        <h1>{`${firstName} ${lastName}`}</h1>
        GPA: {gpa}
        <br></br>
        email: {email}
        <br></br>
        {`Campus: `}{campus ? (<Link to={`/campuses/${campus.id}`}>{campus.name}</Link>) : ('Unassigned')}



    </div>
  )
}

export default SoleStudent
