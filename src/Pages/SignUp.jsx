import React, { useState } from 'react'
import './SignUp.css'
import { NavLink } from 'react-router-dom';
const SignUp = () => {
  const [flag,setflag] = useState(false);
  const onClickHandler = () =>{
    console.log('hello');
  }
  return (
    <>
      <div className="SignUp-container">
        <div className="SignUp-container-heading">
          <h1>Join The Millions Learning Coding with StudyNotion For Free</h1>
          <p>Build Skill Today,Tomorrow and Beyond</p>
          <span>Eductaion to future-proof your career</span>
        </div>
        <div className="SignUp-container-choise">
          <div className="student" onClick = {onClickHandler}>Student</div>
          <div className="instructor" onClick = {onClickHandler}>
            Instructor
          </div>
        </div>
        <div className="SignUp-container-name">
          <div className="firstName">
            <p>First Name</p>
            <input type="text" name = 'first' />
          </div>
          <div className="lastName">
            <p>Last Name</p>
            <input type="text" name = 'last' />
          </div>
        </div>
        <div className="SignUp-container-email">
            <p>Email Adress</p>
            <input type="mail" name = 'mail' />
        </div>
        <div className="SignUp-container-password">
          <div className="createPassword">
            <p>Create Password</p>
            <input type="password" name = 'createPassword' />
          </div>
          <div className="confirmPassword">
            <p>Confirm Password</p>
            <input type="password" name = 'confirmPassword' />
          </div>
        </div>
        <div className="SignUp-buttons">
          <button className="SignUp-signin">Sign In</button>
          <span>OR</span>
          <button className='SignUp-signin-with-google'>Sign In with google</button>
      </div>
      </div>
      <div className="SignUp-image">
        <div className="SignUp-image-one">
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5N2KVJ876FOWkveJ9Ldy1X/8b21ab03f6d794efd1a4619bbbef05b8/GettyImages-1333968009.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=" alt="" />
        </div>
        <div className="SignUp-image-two"></div>
      </div>
    </>
  )
}

export default SignUp