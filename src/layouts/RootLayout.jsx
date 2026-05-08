import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AuthContext from '../hooks/AuthContext'

function RootLayout() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
   const token=   window.localStorage.getItem("token")
      setCurrentUser(token)
    },[])
  return (
    <>
    <AuthContext value={currentUser}>
         <Navbar/>
        <Outlet/>
        <Footer/>
    </AuthContext>
     
    </>
  )
}

export default RootLayout