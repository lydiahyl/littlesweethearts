import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import Footer from '../Footer/Footer';

function ContactUs() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d532030d-c7ad-46cd-ab4d-f1d354fc5a37");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
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
        <h1 className="hero-title">Contact Us</h1>
      </motion.section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>We’d love to hear from you!</h2>
          <p>Email: <a href="mailto:hello@kinderhearts.my">hello@kinderhearts.my</a></p>
          <p>Phone: <a href="tel:+60123456789">+60 14-7887857</a></p>
          <p>Location: 22, Jalan Sri Petaling 5, Bandar Baru Sri Petaling, 57000 Kuala Lumpur.</p>
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
          <input type="text" name='name' placeholder="Name" required />
          <input type='tel' name='phone' placeholder='Contact Number' required/>
          <input type="email" name='email' placeholder="Email" required />
          <textarea name="message" rows="9" placeholder='Message' required></textarea>
          <button type="submit">Send Message</button>
          <span className="form-result">{result}</span>

{/* 
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your number' required/>
            <label>Write your enquiry here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt=""/></button>
        </form> 
        <span>{result}</span> */}

        </form>
      </section>
    <Footer />
    </div>
  );
}

export default ContactUs;
