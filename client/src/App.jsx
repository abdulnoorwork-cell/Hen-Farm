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
import Products from './pages/Products'
import AdminProducts from './pages/dashboard/Products'
import SingleBlog from './pages/SingleBlog'
import AddProduct from './pages/dashboard/AddProduct'
import SingleProduct from './pages/SingleProduct'

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
          <Route path='/products' element={<Products />} />
          <Route path='/blogs/:id' element={<SingleBlog />} />
          <Route path='/products/:id' element={<SingleProduct />} />
        </Route>
        <Route path='/my-account' element={<Authentication />} />
        {isAdmin ? <Route path='/dashboard' element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/posts' element={<Posts />} />
          <Route path='/dashboard/add-post' element={<AddPost />} />
          <Route path='/dashboard/add-product' element={<AddProduct />} />
          <Route path='/dashboard/products' element={<AdminProducts />} />
        </Route> : <Route path='/dashboard' element={<AdminLogin />} />}
      </Routes>
      <Toaster />
    </div>
  )
}

export default App