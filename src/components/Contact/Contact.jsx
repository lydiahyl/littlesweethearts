import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import Footer from '../Footer/Footer';

function ContactUs() {
  return (
    <div className="contact-page">
      {/* HERO — matches other pages' style */}
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Book a KinderHearts School Tour</h1>
          <p className="hero-subtitle">
            Come experience the KinderHearts difference in person! Step into our thoughtfully
            designed spaces, meet our passionate educators, and see where curious minds grow
            and kind hearts flourish.
          </p>
        </div>
      </motion.section>

      {/* CONTENT — 2-column: left = info+map, right = “More Than a Preschool” */}
      <section className="contact-wrap">
        <div className="contact-grid">
          {/* Left column */}
          <div className="contact-info">
            <h2 className="contact-heading">KinderCare</h2>
            <p className="contact-intro">Got questions? We’re here for you.</p>

            <ul className="contact-details">
              <li><strong>🕒 Hours:</strong> 8:00 AM – 6:00 PM</li>
              <li>
                <strong>📧 Email:</strong>{' '}
                <a href="mailto:hello@kinderhearts.my">hello@kinderhearts.my</a>
              </li>
              <li>
                <strong>📱 Call / WhatsApp:</strong>{' '}
                <a href="https://wa.me/60147887857" target="_blank" rel="noreferrer">
                  +6014 788 7857
                </a>
              </li>
              <li>
                <strong>📍 Address:</strong> 22, Jalan Sri Petaling 5, Bandar Baru Sri Petaling,
                57000 Kuala Lumpur
              </li>
            </ul>

            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0775678387454!2d101.69208231010987!3d3.0739554535982556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a62b83e7d2f%3A0x5da22291892cc5de!2s22%2C%20Jalan%20Sri%20Petaling%205%2C%20Bandar%20Baru%20Sri%20Petaling%2C%2057000%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1752566238151!5m2!1sen!2smy"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KinderHearts Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;
