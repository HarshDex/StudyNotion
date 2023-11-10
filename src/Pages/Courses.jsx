import React from 'react'
import Card from '../Components/Card'
import { data } from '../Data'
import './Courses.css'
const Courses = () => {
  return (
    <div className="courses-container">
     {
      data.map((obj)=>{
        return <Card {...obj}/>
      })
    }
    </div>
  )
}
export default Courses