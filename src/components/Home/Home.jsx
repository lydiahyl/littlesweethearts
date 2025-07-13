import React from 'react'
import './Home.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import facility_1 from '../../assets/facility-1.jpeg'
import facility_2 from '../../assets/facility-2.jpeg'
import facility_3 from '../../assets/facility-3.jpeg'
import facility_4 from '../../assets/facility-4.jpeg'
import facility_5 from '../../assets/facility-5.jpeg'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import Title from '../Title/Title'

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
  return (
    <div>
    <section className="about-section">
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="about" className="about-img" />
          <img src={play_icon} alt="play" className="play-icon" />
        </div>
        <div className="about-right">
          <h3>ABOUT PRESCHOOL</h3>
          <h2>Where every little step brings sweet smiles and big hearts </h2>
          <p>
          At Little Sweethearts, hearts come first. 
          WE believe the heart of education - is the education of the heart. 
          Everything we do, we do with love – and with all our hearts. 
          So be kind, be nice, be sweet. 
          After all, our children aren’t just learners… they’re our precious, 
          our darlings… our little sweethearts.
          </p>
        </div>
      </div>
    </section>
        <div className="programs-section">
     <Title subTitle='NEWSLETTERS'/>

    <div className="programs">
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Sports' Day</p>
            </div>
        </div> 
        <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Children's Day</p>
            </div>
        </div>
        <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Music Competition</p>
            </div>
        </div>
    </div>
  </div>
  <div className='facilities-section'>
  <div className='facilities'>
  <Title subTitle='SCHOOL FACILITIES'/>

        <div className='facility'>
            <img src={facility_1} alt="" />
            <img src={facility_2} alt="" />
            <img src={facility_3} alt="" />
            <img src={facility_4} alt="" />
            {/* <img src={facility_5} alt="" /> */}
        </div>
        <button className='btn dark-btn'>See More<img src={white_arrow} alt="" /></button>
        </div>
      </div>
    <div className='contact-section'>
    <div className='contact-wrapper'>
    <Title subTitle='CONTACT US' />
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message<img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are 
            important to us as we strive to provide exceptional service to our 
            university community.</p>
            <ul>
                <li><img src={mail_icon} alt=""/>Contact@enquiry.edu.my</li>
                <li><img src={phone_icon} alt=""/>+6012 8727129</li>
                <li><img src={location_icon} alt=""/>K7, Jalan Sweethearts<br/>57100, KL</li>
            </ul>
        </div>
        <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your number' required/>
            <label>Write your enquiry here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt=""/></button>
        </form>
        <span>{result}</span>
        </div>
      </div>
   </div>
  </div>
</div>
    
  )
}

export default Home
