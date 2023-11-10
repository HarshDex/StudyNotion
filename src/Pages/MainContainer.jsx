import React from 'react'
import './MainContainer.css'
import Navigation from '../Components/Navigation'
import { Outlet } from 'react-router-dom'
const MainContainer = () => {
  return (
    <div className="main-container">
        <Navigation/>
        <Outlet/>
    </div>
  )
}

export default MainContainer