import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
  return (
    <div className="navigation-bar">
        <ul>
            <div className="logo-part">
                <img src="https://img.freepik.com/premium-vector/sn-luxury-fashion-logo_786241-225.jpg" alt="" />
                <h2>StudyNotion</h2>
            </div>
            <li>
                <NavLink to = "/">Home</NavLink>
            </li> 
            <li>
                <NavLink to = "/courses">Courses</NavLink>
            </li> 
            <li>
                <NavLink to = "/More">More</NavLink>
            </li> 
            <div className="authentication">
                <button className="login">
                    <NavLink to = '/login'>
                        Login
                    </NavLink>
                </button>
                <button className="signin">
                    <NavLink to = '/signUp'>
                        SignIn
                    </NavLink>
                </button>
            </div>
        </ul>
    </div>
  )
}

export default Navigation