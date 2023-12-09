import React, { useState } from 'react'
import './Login.css'
import showimg from '../assets/show.png'
const Login = () => {
  const[formData,setFormData] = useState({email : '',password : ''})
  const [showPassword,setShowPassword] = useState(false);
  const onClickPasswordHandler = () =>{
    setShowPassword(!showPassword);
    setDflag(!Dflag);
  }
  const onSaveHanlder = (event) =>{
    setFormData((prevData)=>(
      {
        ...prevData,
        [event.target.name] : event.target.value
      }
    ))
  }
  const[Dflag,setDflag] = useState(false);
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
            <input type="mail" name="email" id="Email"  placeholder='Enter your email' value = {formData.email} onChange={onSaveHanlder}/>
          </div>
          <div className="login-container-credential-password">
              <p>Password*</p>
              <input type={showPassword ? ('text') : ('password')}  name = 'password' id = 'password' placeholder='Enter your Password' value = {formData.password} onChange={onSaveHanlder}/>
              <div className="eye-button" onClick = {onClickPasswordHandler}>
                <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699007-icon-21-eye-hidden-512.png" alt="" className='hide' style = {{display : Dflag ? 'none' : 'block'}} />
                <img src={showimg} alt=""  className='show' style = {{display : Dflag ? 'block' : 'none'}}/>
              </div>
            <button>Forgot Password</button>
          </div>
          <div className="login-buttons">
            <button className="login-signin" onClick={onSaveHanlder}>Sign In</button>
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