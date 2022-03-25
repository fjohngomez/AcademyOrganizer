import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getStudent } from '../store/soleStudent'

const SoleStudent = () => {

  const dispatch = useDispatch();
  const studentId = useParams().id

  useEffect(()=> {
    dispatch(getStudent(studentId))
  }, [dispatch])

  const student = useSelector(state => state.student)
  const { firstName, lastName, email, gpa } = student.sole
  return (
    <div>
      <h1>{firstName}{lastName}</h1>
      GPA: {gpa}
      <br></br>
      email: {email}
    </div>
  )
}

export default SoleStudent
