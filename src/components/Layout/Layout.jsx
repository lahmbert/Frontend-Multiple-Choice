import React from 'react'
import Navbar from '../Header/Navbar'
import Home from '../../pages/Home'
import Footer from '../Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Quiz from '../../pages/Quiz'
import Login from '../../pages/auth/Login'
import Register from '../../pages/auth/Register'
import Contact from '../../pages/Contact'




const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/auth' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default Layout