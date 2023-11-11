import React from 'react'
import './Card.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Card = (obj) => {
  const onEnrollHandler = () =>{
    toast.success("This feature is yet to be added",{
      position: toast.POSITION.TOP_RIGHT,
      theme : 'dark',
      hideProgressBar : (true),
    });
  }
  return (
    <div className="single-card">
        <div className="course-image">
            <img src={obj.image} alt="" />
        </div>
        <div className="course-description">
            <h2>{obj.name}</h2>
            <h3>Rs{obj.fees}</h3>
        </div>
        <button className="course-button" onClick={onEnrollHandler}>
          <Link to = "/course">Enroll Now</Link>
        </button>
    </div>
  )
}

export default Card