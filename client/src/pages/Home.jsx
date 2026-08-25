import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import BlogsSection from '../components/BlogsSection'
import TeamSection from '../components/Team'
import ServiceSection from '../components/ServiceSection'
import Contact from '../components/Contact'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <Products />
      <TeamSection />
      <BlogsSection />
      <Contact />
    </div>
  )
}

export default Home