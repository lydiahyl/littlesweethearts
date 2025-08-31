import React, { useEffect, useState } from 'react'
import './Home.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import { Link } from 'react-router'
import program_1 from '../../assets/children3.png'
import program_2 from '../../assets/christmas2.png'
import program_3 from '../../assets/holiday.png'
import program_icon_1 from '../../assets/childrenicon2.png'
import program_icon_2 from '../../assets/christmasicon2.png'
import program_icon_3 from '../../assets/holidayicon.png'
import facility_1 from '../../assets/facility-1.jpeg'
import facility_2 from '../../assets/facility-2.jpeg'
import facility_3 from '../../assets/facility-3.jpeg'
import facility_4 from '../../assets/facility-4.jpeg'
import facility_5 from '../../assets/facility-5.jpeg'
// import msg_icon from '../../assets/msg-icon.png'
// import mail_icon from '../../assets/mail-icon.png'
// import phone_icon from '../../assets/phone-icon.png'
// import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import Title from '../Title/Title'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8c44a7b1-bd69-440c-82c0-3ae399af282f");

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
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true      
    });
  }, []);
  return (
    <div>
    <section className="about-section" data-aos="fade-up">
      <div className="about">
        <div className="about-left" data-aos="fade-right">
          <img src={about_img} alt="about" className="about-img" />
          {/* <img src={play_icon} alt="play" className="play-icon" /> */}
        </div>
        <div className="about-right" data-aos="fade-left">
          <h3>ABOUT KINDERHEARTS</h3>
          <h2>Where Every Little Step Sparks Wonder</h2>
          <p>
          At KinderHearts, hearts come first. 
          We believe that the true heart of education lies in the education of the heart, 
          helping children grow into confident, compassionate, and lifelong learners.

          Everything we do — from the way we teach and lead to the way we care and connect — 
          is done with love, patience, and purpose. We create a safe, joyful, and inspiring environment 
          where every child feels valued, empowered, and truly seen.

          At KinderHearts, children aren’t just learners. 
          They are our sweethearts, little explorers, and bright stars, each shining 
          in their own special way. We nurture their curiosity, guide their growth, and celebrate 
          their learning every step of the way.

          And because every child’s learning journey is unique, 
          we partner closely with parents to ensure every child feels 
          supported, inspired, and ready to take on the world.
          </p>
            {/* Learn More Button */}
            <div className="about-btn-wrapper">
              <Link to="/about" className="learn-more-btn">
                Learn More <span className="arrow">→</span>
            </Link>
            </div>
        </div>
      </div>
    </section>
        <div className="programs-section" data-aos="fade-up">
     <Title subTitle='KinderNews'/>

    <div className="programs">
        <div className="program" data-aos="zoom-in">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Children's Day</p>
            </div>
        </div> 
        <div className="program" data-aos="zoom-in" data-aos-delay="100">
        <img src={program_2} alt="" />
        <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Christmas Party</p>
            </div>
        </div>
        <div className="program" data-aos="zoom-in" data-aos-delay="200">
        <img src={program_3} alt="" />
        <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Holiday Programme</p>
            </div>
        </div>
    </div>
  </div>
  <div className='facilities-section' data-aos="fade-up">
  <div className='facilities'>
  <Title subTitle='KinderSpaces'/>

        <div className='facility' data-aos="fade-right">
            <img src={facility_1} alt="" />
            <img src={facility_2} alt="" />
            <img src={facility_3} alt="" />
            <img src={facility_4} alt="" />
            {/* <img src={facility_5} alt="" /> */}
        </div>
        {/* <button className='btn dark-btn'>See More<img src={white_arrow} alt="" /></button> */}
        </div>
      </div>
</div>
    
  )
}

export default Home
