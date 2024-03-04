import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Heder from './Heder'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Heder/>
    <Outlet/>
    </>
  )
}

export default RootLayout