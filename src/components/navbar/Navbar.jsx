import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo6.png'
import fbLogo from '../../assets/fbb.png'
import instagramIcon from '../../assets/igg.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen((v) => !v)

  return (
    <nav className='dark-nav'>
    <Link to="/" onClick={() => setIsOpen(false)}>
      <img src={logo} alt="KinderHearts" className='logo'/>
      </Link>
      {/* Burger */}
      <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={handleToggle} aria-label="Toggle menu" aria-expanded={isOpen}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}><li>HOME</li></Link>
        <Link to="/about" onClick={() => setIsOpen(false)}><li>ABOUT KINDERHEARTS</li></Link>
        <Link to="/curriculum" onClick={() => setIsOpen(false)}><li>LEARNING JOURNEY</li></Link>
        <Link to="/admissions" onClick={() => setIsOpen(false)}><li>ADMISSIONS</li></Link>
        <Link to="/contactus" onClick={() => setIsOpen(false)}><li><button className="btn">BOOK A KINDERTOUR</button></li></Link>

        <li className="nav-social">
          <a href="https://facebook.com/kinderheartspreschool" target="_blank" rel="noreferrer">
            <img src={fbLogo} alt="Facebook" className="social-img" />
          </a>
          <a href="https://www.instagram.com/kinderhearts.official?igsh=MTR5Mm8yYXZyYXl5aQ==" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-img" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
