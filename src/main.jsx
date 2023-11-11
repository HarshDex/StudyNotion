import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Courses from './Pages/Courses.jsx'
import More from './Pages/More.jsx'
import Login from './Pages/Login.jsx'
import SignUp from "./Pages/SignUp.jsx"
import CourseInsight from './Pages/CourseInsight.jsx'
const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {path : '',element : <Home/>},
      {
        path : 'Courses',
        element : <Courses/>,
      },
      {path : 'More',element : <More/>},
      {path : 'login',element : <Login/>},
      {path : 'signUp',element : <SignUp/>},
      {path : '*',element : <>Page Not found</>},
      {path : 'course',element : <CourseInsight/>}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
