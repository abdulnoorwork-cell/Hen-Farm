import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Authentication from './pages/Authentication'
import Layout from './pages/dashboard/Layout'
import AdminLogin from './pages/dashboard/AdminLogin'
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/dashboard/Dashboard'
import Posts from './pages/dashboard/Posts'
import AddPost from './pages/dashboard/AddPost'
import 'quill/dist/quill.snow.css'

const App = () => {
  const isAdmin = true;
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Route>
        <Route path='/my-account' element={<Authentication />} />
        {isAdmin ? <Route path='/dashboard' element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/posts' element={<Posts />} />
          <Route path='/dashboard/add-post' element={<AddPost />} />
        </Route> : <Route path='/dashboard' element={<AdminLogin />} />}
      </Routes>
      <Toaster />
    </div>
  )
}

export default App