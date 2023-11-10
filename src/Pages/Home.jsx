import React from 'react'
import './Home.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const onClickHome = () =>{
    toast.success("You are all set to go!!!",{
      position: toast.POSITION.TOP_RIGHT,
      theme : 'dark',
      hideProgressBar : (true),
    });
  }
  return (
    <div className="home-container">
      <div className="home-container-part1">
        <h1>Start Learning with us now</h1>
        <h2></h2>
        <p>Embark on a transformative learning journey with our engaging e-learning platform. Explore a world of knowledge, learn at your own pace, and empower your future.</p>
        <Link to = "/courses">
            <button  className='home-button' onClick={onClickHome}>Start Learning Now
          </button> 
        </Link>
      </div>
      <div className="home-container-part2">
        <div className="home-container-part1-image1">
          <img src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className="home-container-part2-image2">
          <img src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home