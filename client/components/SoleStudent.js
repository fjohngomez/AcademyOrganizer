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
  console.log(student)
  return (
    <div>
      student here
    </div>
  )
}

export default SoleStudent
