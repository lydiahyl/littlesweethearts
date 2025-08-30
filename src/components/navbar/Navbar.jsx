import React, {useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo6.png'
import facebookIcon from '../../assets/facebook-logo.png'
import fbLogo from '../../assets/fb-blue.png'
import instagramIcon from '../../assets/instagram-logo.webp'
import { Link } from 'react-router-dom';
// import { FaFacebookF, FaInstagram } from 'react-icons/fa';

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
        <Link to="/" onClick={() => setIsOpen(false)}><li>HOME</li></Link>
        <Link to="/about" onClick={() => setIsOpen(false)}><li>ABOUT KINDERHEARTS</li></Link>
        <Link to="/curriculum" onClick={() => setIsOpen(false)}><li>LEARNING JOURNEY</li></Link>
        <Link to="/admissions" onClick={() => setIsOpen(false)}><li>ADMISSIONS</li></Link>
        <Link to="/contactus" onClick={() => setIsOpen(false)}><li><button className="btn">BOOK A KINDERTOUR</button></li></Link>

         {/* Social Icons */}
         <li className="nav-social">
         {/* <Link to="/contactus" onClick={() => setIsOpen(false)}><li><button className="btn">BOOK A KINDERTOUR</button></li></Link> */}

          <a href="https://facebook.com/yourpage" target="_blank">
            <img src={fbLogo} alt="Facebook" className="social-img" />
          </a>
          <a href="https://www.instagram.com/kinderhearts.official?igsh=MTR5Mm8yYXZyYXl5aQ==" target="_blank">
            <img src={instagramIcon} alt="Instagram" className="social-img" />
          </a>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar