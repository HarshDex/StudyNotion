import React from 'react'
import { useParams } from 'react-router-dom';
const CourseInsight = () => {
    const {id} = useParams();
  return (
    <div>CourseInsight : {id}</div>
  )
}

export default CourseInsight