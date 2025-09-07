import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import Curriculum from './components/Curriculum/Curriculum'
import Admissions from './components/Admissions/Admissions'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Whatsapp from './components/Whatsapp/Whatsapp'
import Contact from './components/Contact/Contact'
import ScrollToTop from './Scroll'
// import { Analytics } from "@vercel/analytics/next"

const App = () => {
  return (
    <div>
  <Router>
    <Navbar/>
    <Whatsapp/>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/curriculum' element={<Curriculum/>} />
        <Route path='/admissions' element={<Admissions/>} />
        <Route path='/contactus' element={<Contact/>} />
      </Routes>
    </Router>
    {/* <Analytics /> */}

    </div>
  )
}

export default App
