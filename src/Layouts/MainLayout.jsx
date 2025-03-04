import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Navbar from '../Components/Navbar'


const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <ToastContainer/>
    </div>
  )
}

export default MainLayout