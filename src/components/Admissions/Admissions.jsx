import React from "react";
import "./Admissions.css";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 }
};

export default function Admissions() {
  return (
    <div className="admissions-page">
      {/* Hero */}
      <section className="admissions-hero">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             Growing Bright Stars, One Step at a Time
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Begin your child’s learning journey with us. From their first hello to graduation day,
            we’re here to guide, support, and grow with your family.
          </motion.p>
        </div>
      </section>

      <main className="admissions-wrap">
        {/* Intro */}
        <motion.section className="admissions-section intro" {...fadeUp}>
          <h2>Welcome to the First Step of Your KinderHearts Journey</h2>
          <p>
            We’re glad that you’re considering KinderHearts as the beginning of your child’s early
            learning journey. This page provides all the information you need to get started — from
            how to enrol, what your child’s day will look like, and our fee structure.
          </p>
        </motion.section>

        {/* Enrolment Intake */}
        <motion.section className="admissions-section" {...fadeUp}>
          <h2>Enrolment Intake</h2>
          <p>
            KinderHearts accepts enrolment year-round, depending on availability. While our academic
            year begins in January, we understand that every family's journey is unique, and we aim
            to be as flexible and accommodating as possible.
          </p>

          <div className="card soft">
            <h4 className="card-title">School Terms</h4>
            <ul className="bullet">
              <li><strong>Term 1:</strong> January – April</li>
              <li><strong>Term 2:</strong> May – August</li>
              <li><strong>Term 3:</strong> September – December</li>
            </ul>
            <div className="links">
              <a href="/KinderHeartsCalendar_2025.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">School Calendar 2025</a>
              <a href="/KinderHeartsCalendar_2026.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">School Calendar 2026</a>
            </div>
          </div>
        </motion.section>

        {/* Enrolment Age & Class Size */}
        <motion.section className="admissions-section" {...fadeUp}>
          <h2>Enrolment Age &amp; Class Size</h2>
          <p>We welcome children aged 3 to 6 years old, across the following age groups:</p>

          <div className="table-wrap">
            <table className="kh-table">
              <thead>
                <tr>
                  <th>Group</th>
                  <th>Age</th>
                  <th>Class Size</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr><td>Playgroup</td><td>3</td><td>5 children</td></tr>
                <tr><td>Nursery</td><td>4</td><td>8–10 children</td></tr>
                <tr><td>Kindergarten 1</td><td>5</td><td>10–15 children</td></tr>
                <tr><td>Kindergarten 2</td><td>6</td><td>15 children</td></tr> */}
                <tr><td>Playgroup</td><td>3</td><td>5 children</td></tr>
                <tr><td>Nursery</td><td>4</td><td>8–10 children</td></tr>
                <tr><td>Kindergarten 1</td><td>5</td><td>10–15 children</td></tr>
                <tr><td>Kindergarten 2</td><td>6</td><td>15 children</td></tr>
              </tbody>
            </table>
          </div>

          <p className="note">
          <br/>
            We intentionally keep our class sizes small to ensure every child receives the
            attention, support, and care they need to thrive. Our teacher-to-student ratios are
            well below the MOE’s national guideline of 1:25, allowing us to create meaningful
            relationships and tailor our approach to each child's developmental pace.
          </p>
          <p className="note">
            As part of school readiness, children enrolling are expected to be fully potty trained.
            This helps ensure a smoother transition into the school routine and promotes
            independence in daily care.
          </p>
        </motion.section>

        {/* A Day at KinderHearts */}
        <motion.section className="admissions-section" {...fadeUp}>
          <h2>A Day at KinderHearts</h2>
          <p>
            Each day at KinderHearts is filled with joyful learning, meaningful play, and gentle
            rhythms that balance energy, focus, and rest.
          </p>

          <div className="table-wrap scroll-x">
            <table className="kh-table wide">
              <thead>
                <tr>
                  <th>Session</th>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Morning</td><td>8:30 AM</td><td>Arrival &amp; Circle Time</td></tr>
                <tr><td></td><td>8:45 AM</td><td>Language Learning</td></tr>
                <tr><td></td><td>9:30 AM</td><td>Morning Snack &amp; Outdoor Exploration</td></tr>
                <tr><td></td><td>10:30 AM</td><td>Quiet Time / Reading / Storytelling</td></tr>
                <tr><td></td><td>10:45 AM</td><td>Early Mathematics</td></tr>
                <tr><td></td><td>11:30 AM</td><td>Creative Arts</td></tr>
                <tr><td></td><td>12:30 PM</td><td>Lunch &amp; Indoor Exploration</td></tr>
                <tr><td>Extended Hours</td><td>1:30 PM</td><td>Freshen Up</td></tr>
                <tr><td></td><td>2:00 PM</td><td>Rest &amp; Recharge</td></tr>
                <tr><td></td><td>3:30 PM</td><td>Evening Snack &amp; Social Time</td></tr>
                <tr><td></td><td>4:00 PM</td><td>Enrichment Clubs</td></tr>
                <tr><td></td><td>5:00 PM</td><td>Mindful Play</td></tr>
                <tr><td></td><td>5:30 PM</td><td>Dismissal Begins</td></tr>
                <tr><td></td><td>6:00 PM</td><td>End of Day</td></tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Fee Schedule */}
        <motion.section className="admissions-section" {...fadeUp}>
          <h2>Fee Schedule</h2>
          <p>
            Our fee structure is designed with transparency and flexibility in mind. It covers
            registration, tuition, materials, and enrichment experiences throughout the year.
            If you’d like a personalised walk-through of our fees and payment options, we’d be
            happy to assist — just reach out to us anytime.
          </p>
          <p>
            Call us, Whatsapp us, or book a school tour — we’d love to connect with you and share
            more about what makes KinderHearts special.
          </p>
        </motion.section>

        {/* Benefits & Perks */}
        <motion.section className="admissions-section" {...fadeUp}>
          <h2>Benefits &amp; Perks</h2>
          <div className="perks">
            <div className="perk">
              <div className="perk-icon">👨‍👩‍👧‍👦</div>
              <div>
                <h4>Sibling Discount</h4>
                <p>
                  Families enrolling more than one child at KinderHearts will enjoy a
                  <strong> 5% discount</strong> on tuition fees for the first, second, and
                  subsequent children.
                </p>
              </div>
            </div>
            <div className="perk">
              <div className="perk-icon">💌</div>
              <div>
                <h4>Parent Referral Programme</h4>
                <p>
                  We're grateful when families share their KinderHearts experience with others.
                  As a thank you, you'll receive a <strong>RM200 rebate</strong> for every
                  successful referral who enrols with us. Thank you for helping us grow our
                  community with love.
                </p>
              </div>
            </div>
            <p className="tnc">Terms and Conditions Apply</p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
