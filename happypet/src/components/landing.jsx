import React from 'react'
import Navbar from './navbar'
import HeroSection from './heroSection'
import NewLetter from './newLetter'
import Product from './product'
import Product2 from './product2'
import Testimoniols from './testimoniols'
import Footer from './footer'

const Landing = () => {
  return (
      <>
    <Navbar />
    <HeroSection />
    <NewLetter />
    <Product />
    <Product2 />
    <Testimoniols />
    <Footer />
    </>
  )
}

export default Landing;
