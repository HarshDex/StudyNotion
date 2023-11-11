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
    <>
      <div className="home-container">
        <div className="home-container-part1">
          <h1>Start Learning with us Now & Forever</h1>
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
      <div className="home-container-part3">
        <div className="home-container-part3-image">
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/51y3a8YEIvgFTS2qrYNB7s/f806d317ff47487a3d9a2704f4ab9296/iStock-1130519249__1__1.jpg?auto=format%2Ccompress&dpr=2&w=&h=" alt="" />
        </div>
        <div className="home-container-part3-text">
          <Link to = '/courses'><h6>Finished a Professional Certificate?</h6></Link>
          <h2>Get resources and support to guide you through the job search process.</h2>
          <h3>Showcase your skills</h3>
          <p>Present real-world projects to potential employers.</p>
          <h3>Enhance your resume</h3>
          <p>Get support to build a standout resume and LinkedIn profile.</p>
          <h3>Ace your interview</h3>
          <p>Practice and improve your interview skills with virtual feedback.</p>
        </div>
      </div>
    </>
  )
}

export default Home