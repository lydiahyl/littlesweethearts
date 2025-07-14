import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import Curriculum from './components/Curriculum/Curriculum'
import Admissions from './components/Admissions/Admissions'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Whatsapp from './components/Whatsapp/Whatsapp'

const App = () => {
  return (
    <div>
  <Router>
    <Navbar/>
    <Whatsapp/>
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/curriculum' element={<Curriculum/>} />
        <Route path='/admissions' element={<Admissions/>} />

      </Routes>
    </Router>

    </div>
  )
}

export default App
