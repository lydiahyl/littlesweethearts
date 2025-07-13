import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import Title from '../Title/Title'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import ImageSlider from '../ImageSlider/ImageSlider'

function hero() {
  return (
    <>
    <ImageSlider />
     <Home />
    <Footer />
   </>
  )
}

export default hero