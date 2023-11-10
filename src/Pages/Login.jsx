import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-container-heading">
          <h1>Welcome Back!!</h1>
          <p>Build Skill Today,Tomorrow and Beyond</p>
          <span>Eductaion to future-proof your career</span>
        </div>
        <div className="login-container-credential">
          <div className="login-container-credential-mail">
            <p>Email*</p>
            <input type="mail" name="Email" id="Email" />
          </div>
          <div className="login-container-credential-password">
              <p>Password*</p>
              <input type="password" name = 'password' id = 'password'/>
            <button>Forgot Password</button>
          </div>
          <div className="login-buttons">
            <button className="login-signin">Sign In</button>
            <span>OR</span>
            <button className='login-signin-with-google'>Sign In with google</button>
          </div>
        </div>
      </div>
      <div className="login-image">
        <div className="login-image-one">
          <img src="https://img.etimg.com/thumb/msid-65768840,width-640,height-480,imgsize-161713,resizemode-4/successful-professional-traits.jpg" alt="" />
        </div>
        <div className="login-image-two"></div>
      </div>
    </>
  )
}

export default Login