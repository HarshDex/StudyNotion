import React from 'react'
import './MainContainer.css'
import Navigation from '../Components/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
const MainContainer = () => {
  return (
    <div className="main-container">
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainContainer