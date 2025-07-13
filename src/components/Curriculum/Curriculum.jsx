import React from 'react'
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import './Curriculum.css'
import Footer from '../Footer/Footer';
import bgimage from '../../assets/about1.png'

function Curriculum() {
  return (
    <div className='curriculum-container'>
        <motion.section
          className="hero-section"
          style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff'
        }}
          initial={{ opacity: 0, y: -30}}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 1 }}
        >   
          <div className='hero-overlay'>
          <h1 className='hero-title'>Our Curriculum</h1>
          <p className='hero-subtitle'>
            Discover our engaging and nurturing teaching approach, structured terms, 
            and enriching daily schedule.
          </p>
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
          transition={{ duration: 1, delay: 0.6 }}
        >
        <h2 className='section-title'>School Calendar</h2>
        <div className='term-box-container'>
        <motion.div className='term-box' whileHover={{ scale: 1.05 }}><h3>Term 1</h3><p>Jan - Mar</p></motion.div>
          <motion.div className='term-box' whileHover={{ scale: 1.05 }}><h3>Term 2</h3><p>Apr - Jun</p></motion.div>
          <motion.div className='term-box' whileHover={{ scale: 1.05 }}><h3>Term 3</h3><p>Jul - Sep</p></motion.div>
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

        {/* Accordion Section */}
        <motion.section
          className="term-table-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>School Terms</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Each school term spans approximately 10 weeks, with a 2-week break in between.
                  We also observe public holidays and special cultural events.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Daily Schedule</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
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
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.section>
        <Footer/>
    </div>
  )
}

export default Curriculum
