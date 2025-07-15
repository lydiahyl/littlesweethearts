import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from "swiper"
import { motion } from 'framer-motion'

import 'swiper/css'
import 'swiper/css/pagination'
import './ImageSlider.css'

import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

SwiperCore.use([Autoplay, Pagination])

const slides = [
  {
    image: image1,
    title: "Welcome to Little Sweethearts",
    subtitle: "Preschool & Kindergarten"
  },
  {
    image: image2,
    title: "Play. Learn. Grow.",
    subtitle: "A Joyful Start to Early Education"
  },
  {
    image: image3,
    title: "Every Child is a Star",
    subtitle: "Shining Bright in Their Own Way"
  }
]

function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="slider-container">
    <Swiper
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="hero-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
        <div className="slide-image">
         <img src={slide.image} alt={slide.title} className="slide-img" />

            <div className="overlay">
            {index === activeIndex && (
              <motion.div
                key={activeIndex}
                className="slide-content"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.3 } }
                }}
              >
                <motion.h1
                  className="hero-title"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                {slide.title}
                </motion.h1>

                <motion.h2
                  className="hero-subtitle"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {slide.subtitle}
                </motion.h2>
              </motion.div>
            )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default ImageSlider