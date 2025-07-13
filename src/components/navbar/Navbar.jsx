import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import { Link } from 'react-router';

const Navbar = () => {
  
  // const [sticky, setSticky] = useState(false);

  // useEffect(()=>{
  //   window.addEventListener('scroll', ()=>{
  //     window.scrollY > 70 ? setSticky(true) : setSticky(false);
  //   })
  // },[]);

  return (
    <nav className='container dark-nav'>
    {/* <nav className={`container ${sticky? 'dark-nav' : ''}`}> */}
        <img src={logo} alt="" className='logo'/>
        <ul className='nav-links'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About Us</li></Link>
            <Link to='/curriculum'><li>Our Curriculum</li></Link>
            <Link to='/admissions'><li>Admissions</li></Link>

            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar