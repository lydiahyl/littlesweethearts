import React, {useState} from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import  "react-datepicker/dist/react-datepicker.css";
import Footer from '../Footer/Footer';


function ContactUs() {
    const [tourDateTime, setTourDateTime, result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      if (tourDateTime) {
        formData.append("preferred_tour_datetime", tourDateTime,toISOString())
      }
      formData.append("access_key", "d532030d-c7ad-46cd-ab4d-f1d354fc5a37");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Thank you! Your tour request has been received. Our team will be in touch soon to confirm your visit. We can't wait to welcome you to KinderHearts!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="contact-page">
      <motion.section
        className="contact-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Book a Kinderhearts School Tour</h1>
      </motion.section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Got questions? We're here for you.</h2>
          <p>Hours: 8:30 AM - 6:00 PM</p>
          <p>Email: <a href="mailto:hello@kinderhearts.my">hello@kinderhearts.my</a></p>
          <p>Call/WhatsApp <a href="whatsapp">+60 14-7887857</a></p>
          <p>Address: 22, Jalan Sri Petaling 5, Bandar Baru Sri Petaling, 57000 Kuala Lumpur.</p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0775678387454!2d101.69208231010987!3d3.0739554535982556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a62b83e7d2f%3A0x5da22291892cc5de!2s22%2C%20Jalan%20Sri%20Petaling%205%2C%20Bandar%20Baru%20Sri%20Petaling%2C%2057000%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1752566238151!5m2!1sen!2smy"
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Preschool Location"
          ></iframe>
        </div>

        <form onSubmit={onSubmit} className="contact-form">
          <h2>Send Us a Message</h2>
          <input type="text" name='name' placeholder="Parent's Name" required />
          <input type='tel' name='phone' placeholder='Contact Number' required/>
          <input type="email" name='email' placeholder="Email Address" required />
          <input type="text" name='age' placeholder="Child's Age" required />

         {/* ✅ React Datepicker */}
          <label>Preferred Tour Date & Time</label>
          <DatePicker
            selected={tourDateTime}
            onChange={(date) => setTourDateTime(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}   // intervals: 30 mins
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select date and time"
            className="datepicker-input"
          />
          <textarea name="message" rows="9" placeholder='Message / Special Requests' required></textarea>
          <button type="submit">Book My Tour</button>
          <span className="form-result">{result}</span>

        </form>
      </section>
    <Footer />
    </div>
  );
}

export default ContactUs;
