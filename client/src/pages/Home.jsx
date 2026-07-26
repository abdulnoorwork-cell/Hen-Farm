import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import BlogsSection from '../components/BlogsSection'
import TeamSection from '../components/Team'
import ServiceSection from '../components/ServiceSection'
import Faq from '../components/Faq'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <TeamSection />
      <Faq />
      <Testimonial />
      <BlogsSection />
    </div>
  )
}

export default Home