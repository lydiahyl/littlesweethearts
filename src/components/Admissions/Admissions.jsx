import React from 'react'
import './Admissions.css'
import { motion } from 'framer-motion'
import Footer from '../Footer/Footer'

function Admissions() {
  return (
    <div className='admissions-page'>
    {/* Hero Section */}
    <div className='admissions-hero'>
      <div className='hero-content'>
      <motion.h1 
        className='admissions-heading'
        initial={{ opacity: 0, y:-50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration: 0.6 }}
        >
          Admissions & Fees
        </motion.h1>
        </div>
      </div>
        <div className='admissions-content'>
          <section className='admissions-section'>
          <h2>Fee Structure</h2>
          <ul>
            <li><strong>Registration Fee:</strong> RM500 </li>
            <li><strong>Monthly Tuition:</strong> RM300 </li>
            <li><strong>Extended Hours:</strong> RM350/month</li>
          </ul>
        </section>

        <section className='admissions-section'>
          <h2>Discounts</h2>
          <ul>
            <li>10% Sibling Discount</li>
            <li>5% Early Payment Discount (termly)</li>
          </ul>
        </section>

        <section className='admissions-section'>
          <h2>Parent Referral Program</h2>
          <p>
            Refer another parent and receive a <strong>RM 250 credit</strong> towards your next term's tuition after they enroll!
          </p>
        </section>
    </div>
    <Footer/>
  </div>
  )
}

export default Admissions