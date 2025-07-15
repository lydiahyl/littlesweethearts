import React from 'react'
import { motion } from "framer-motion"
import './Curriculum.css'
import Footer from '../Footer/Footer';
import { FaLeaf, FaHeart, FaPuzzlePiece, FaBook } from 'react-icons/fa'

function Curriculum() {
  return (
    <div className='curriculum-container'>
        <motion.section
          className="hero-section"
          initial={{ opacity: 0, y: -30}}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 1 }}
        >   
          <h1 className='hero-title'>Our Curriculum</h1>
        </motion.section>

        {/* Why It Stands Out */}
        <motion.section
          className="why-stand-out-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className='section-title'>Why Our Curriculum Stands Out</h2>
          <p className='section-text'>
            At Little Hearts, we believe early learning should be joyful, creative, and purposeful. 
            Our curriculum combines play-based experiences with intentional teaching moments to help children 
            flourish intellectually, socially, and emotionally.
          </p>
        </motion.section>

        {/* Curriculum Highlights */}
        <motion.section
          className='curriculum-highlights'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className='highlight-cards'>
            <motion.div className='highlight-card' whileHover={{ scale: 1.05 }}>
              <FaPuzzlePiece className='highlight-icon' />
              <h3>Play-Based Learning</h3>
              <p>Children learn best through exploration, imagination, and fun.</p>
            </motion.div>
            <motion.div className='highlight-card' whileHover={{ scale: 1.05 }}>
              <FaLeaf className='highlight-icon' />
              <h3>Montessori Inspired</h3>
              <p>Hands-on materials encourage independence and decision-making.</p>
            </motion.div>
            <motion.div className='highlight-card' whileHover={{ scale: 1.05 }}>
              <FaHeart className='highlight-icon' />
              <h3>Whole-Child Focus</h3>
              <p>We nurture each child’s emotional and social well-being.</p>
            </motion.div>
            <motion.div className='highlight-card' whileHover={{ scale: 1.05 }}>
              <FaBook className='highlight-icon' />
              <h3>Creative Curriculum</h3>
              <p>Storytelling, music, and art woven into everyday learning.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Teaching and learning table */}
        <motion.section
          className='teaching-table-section'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className='section-title'>Teaching & Learning Approach</h2>
          <table className="teaching-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Philosophy</td>
                <td>Play-based learning infused with Montessori principles</td>
              </tr>
              <tr>
                <td>Focus</td>
                <td>Fostering creativity, confidence, and curiosity in every child</td>
              </tr>
              <tr>
                <td>Core Activities</td>
                <td>Sensory play, storytelling, music, movement, art, and outdoor exploration</td>
              </tr>
              <tr>
                <td>Learning Style</td>
                <td>Hands-on, exploratory, and child-centered guided by experienced educators</td>
              </tr>
              <tr>
                <td>Environment</td>
                <td>Safe, nurturing, inclusive, and inspiring learning spaces</td>
              </tr>
            </tbody>
          </table>
        </motion.section>

        {/* Accordion Section */}
        <motion.section
          className="calendar-box-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
        <h2 className='section-title'>School Calendar</h2>
        <div className='term-box-container'>
        <motion.div className='term-box' whileHover={{ scale: 1.05 }}><h3>Term 1</h3><p>January - May</p></motion.div>
          <motion.div className='term-box' whileHover={{ scale: 1.05 }}><h3>Term 2</h3><p>June - December</p></motion.div>
          {/* <motion.div className='term-box' whileHover={{ scale: 1.05 }}><h3>Term 3</h3><p>Jul - Sep</p></motion.div> */}
        </div>
      <div className='calendar-download'>
      <a
        href="/calendar/LittleHearts_SchoolCalendar2025.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="download-button"
        >
          2025 Calendar
        </a>
      </div>
      </motion.section>
      {/* School Terms */}
      {/* <motion.section
       className="term-table-section"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1, delay: 0.8 }}
      >
       <h2 className='section-title'>School Terms</h2>
       <p className="term-description">
        Each school term spans approximately 10 weeks, with a 2-week break in between.
        We also observe public holidays and special cultural events.
      </p>
     </motion.section> */}

    {/* Daily Schedule */}
     <motion.section
      className="daily-schedule-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      >
      <h2 className='section-title'>Daily Schedule</h2>
      <div className="schedule-table-container">
      <table className='schedule-table'>
      <thead>
        <tr><th>Time</th><th>Activity</th></tr>
      </thead>
      <tbody>
        <tr><td>8:00 AM</td><td>Arrival & Free Play</td></tr>
        <tr><td>9:00 AM</td><td>Circle Time & Learning Activities</td></tr>
        <tr><td>10:30 AM</td><td>Snack Time</td></tr>
        <tr><td>11:00 AM</td><td>Outdoor Play</td></tr>
        <tr><td>12:00 PM</td><td>Lunch & Story Time</td></tr>
        <tr><td>1:00 PM</td><td>Nap/Quiet Time</td></tr>
        <tr><td>3:00 PM</td><td>Creative Activities</td></tr>
        <tr><td>4:00 PM</td><td>Home Time</td></tr>
        </tbody>
     </table>
    </div>
  </motion.section>

  <Footer/>
</div>
  )
}

export default Curriculum
