import React from 'react'
import './AboutUs.css'
import program1 from '../../assets/program-1.jpg'
import love_icon from '../../assets/love&care.png'
import playful_icon from '../../assets/playful.png'
import community_icon from '../../assets/community.png'
import principal from '../../assets/principal.jpeg'
import head_of_IT from '../../assets/headofit.jpeg'
import teacher1 from '../../assets/teacher1.jpeg'
import teacher2 from '../../assets/teacher2.jpeg'
import Footer from '../Footer/Footer';



const AboutUs = () => {

  return (
    <>
    <section className='about-hero'>
    <div class='hero-content'>
    <h1 class="hero-title animate-bounce">About Us</h1>
    </div>
    </section>
    {/* Principal's message */}
    <section className='principal-section'>
    <div class="principal-container">
    <div style={{ textAlign: 'center'}}>

    <img src={principal} alt="" className='principal-img'/>
    <div className="teacher-info">
          <strong>Eunice Ho</strong> 
          Founder<br/>
          Bacherlor of Education (Hons.)        
          </div>
      </div>
    <div className='principal-message'>
    <h2>Principal's Message</h2>
      <p> At Little Hearts, we believe that early childhood is the most crucial stage 
      of development—where young minds bloom with curiosity, imagination, and boundless potential. 
      Our preschool is built on a foundation of love, faith, and a deep respect for every child’s unique journey.
    <br/>
    <br/>
    We strive to provide a nurturing, joyful, and engaging environment where children feel safe, valued, 
    and excited to learn. Our dedicated educators guide each child with patience, compassion, 
    and creativity—laying the groundwork not just for academic success, but for confident, 
    caring individuals.
    <br/>
    <br/>
   We understand that learning is most powerful when it is joyful. 
   Whether it’s through storytelling, music, hands-on discovery, or heartfelt conversations, 
   we make every moment count. At Little Hearts, we don’t just prepare children for school—we prepare them for life.
   I warmly invite you to visit us, meet our wonderful team, and witness the energy, warmth, 
   and love that fills our school every day.
      </p>
      </div>
      </div>
    </section>

    {/* Our value */}
    <section className='values-section'>
      <h2>Our Values</h2>
      <div className='value-cards'>
        <div className='value-card'>
          <img src={love_icon} alt="" />
          <h4>Love & Care</h4>
          <p>Every Child is cherished with warmth and compassions.</p>
        </div>
        <div className='value-card'>
          <img src={playful_icon} alt=""/>
          <h4>Playful Learning</h4>
          <p>We foster curiosity and discovery through fun activities.</p>
        </div>
        <div className='value-card'>
          <img src={community_icon} alt=""/>
          <h4>Community</h4>
          <p>We grow together in a safe, inclusive environment.</p>
        </div>
      </div>
    </section>

    {/* Our Team */}
    <section className='team-section'>
      <h2>Our Team</h2>

      <div className="team-row">
      <div style={{ textAlign: 'center'}}>
          <img src={head_of_IT} alt="Teacher YP" className="teacher-img"/>
          <div className="teacher-info">
          <strong>Lydia Ho</strong> 
          Head of Marketing & IT<br/>
          Bacherlor Degree in Informatics (Hons)           
          </div>
        </div>

          <div className="speech-cloud left">
          Meet Lydia Ho, our Head of IT & Marketing at Little SweetHearts.
          With a strong background in technology and creative communications, 
          Lydia plays a key role in ensuring our preschool stays connected, innovative, and engaging. 
          From managing our digital platforms to creating meaningful campaigns that reflect our values, 
          she helps parents stay informed and involved every step of the way. 
          Lydia is passionate about using technology and storytelling to build a trusted, 
          joyful learning environment for every child.
         </div>
        </div>

        <div className='team-row right'>
        <div className="speech-cloud right">
          Hello there! I'm Ms Yoke Ping, 
          and I believe every child is a little star just waiting to shine. 
          ✨ I absolutely love bringing stories to life through dramatic play, 
          puppetry, and silly voices! Whether it's under our reading tree or 
          during circle time, I enjoy watching little eyes light up with 
          curiosity and wonder. With over 7 years of early childhood teaching experience, 
          I make it my mission to help children feel safe, seen, 
          and celebrated every single day.
          </div>
        <div style={{ textAlign: 'center'}}>
          <img src={teacher1} alt="Teacher Eloise" className='teacher-img'/>
          <div className="teacher-info">
            <strong>Hee Yoke Ping</strong>
            Head Teacher<br />
            Diploma in Early Childhood Education
          </div>
        </div>
        <div style={{ textAlign: 'center'}}>
        <img src={teacher2} alt="Teacher YP" className="teacher-img"/>
          <div className="teacher-info">
          <strong>Eloise Lai</strong> 
          Homeroom Teacher<br/>
          Degree in Early Childhood Education      
          </div>
      </div>
      <div className="speech-cloud left">
        Hi! I'm Ms Eloise your friendly music and movement guide! 
        🎶 From ukulele sing-alongs to tapping rhythms on classroom drums, 
        I love using sound and dance to help children express themselves. 
        I’m passionate about creating a joyful, energetic space where kids can 
        explore feelings, teamwork, and creativity. 
        When I’m not in the classroom, you’ll find me composing silly songs 
        about dinosaurs and vegetables!
         </div>
        </div>
    </section>
    <Footer />


  </>
   )
}

export default AboutUs