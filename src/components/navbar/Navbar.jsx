import React, {useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <nav className='container dark-nav'>
      <nav className='dark-nav'>
        <img src={logo} alt="" className='logo'/>
        {/* Burger Icon */}
        <div className="burger" onClick={handleToggle}>
        <div className={`line1 ${isOpen ? 'toggle' : ''}`}></div>
        <div className={`line2 ${isOpen ? 'toggle' : ''}`}></div>
        <div className={`line3 ${isOpen ? 'toggle' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}><li>Home</li></Link>
        <Link to="/about" onClick={() => setIsOpen(false)}><li>About Us</li></Link>
        <Link to="/curriculum" onClick={() => setIsOpen(false)}><li>Our Curriculum</li></Link>
        <Link to="/admissions" onClick={() => setIsOpen(false)}><li>Admissions</li></Link>
        <Link to="/contactus" onClick={() => setIsOpen(false)}><li><button className="btn">Contact Us</button></li></Link>
      </ul>
    </nav>
  )
}

export default Navbar