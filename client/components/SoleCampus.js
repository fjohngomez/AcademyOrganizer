import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCampus } from '../store/soleCampus';

const SoleCampus = () => {

  const dispatch = useDispatch()
  const campusId = useParams().id

  useEffect(()=>{
    dispatch(getCampus(campusId))
  }, [dispatch])

  const campus = useSelector(state => state.campus)
  console.log(campus)
  return (
    <div>
      Here
    </div>
  )
}

export default SoleCampus
