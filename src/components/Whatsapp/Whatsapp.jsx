import React, { useState } from 'react'
import './Whatsapp.css'

function Whatsapp() {

    const phoneNum = "60147887857";
    const msg = "Hi! I am interested in booking a tour at your preschool.";
    const link = `https://wa.me/${phoneNum}?text=${encodeURIComponent(msg)}`;
  return (
   
      <div className="whatsapp-float">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111728.png"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
        </a>
      </div>
  )
}

export default Whatsapp