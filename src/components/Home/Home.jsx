import React, { useEffect } from 'react';
import './Home.css';
import about_img from '../../assets/about_kinderhearts.jpg';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import program_1 from '../../assets/childrenday.png';
import program_2 from '../../assets/christmas2.png';
import program_3 from '../../assets/holidayprogram.png';
import program_icon_1 from '../../assets/childrenicon2.png';
import program_icon_2 from '../../assets/christmasicon2.png';
import program_icon_3 from '../../assets/holidayicon.png';

import facility_1 from '../../assets/classroom.jpg';
import facility_2 from '../../assets/library-3.JPG';
import facility_3 from '../../assets/playground-3.jpg';
import facility_4 from '../../assets/science-garden.JPG';
import facility_5 from '../../assets/comingsoon.png';
import facility_6 from '../../assets/music-corner.jpg';
import facility_7 from '../../assets/art-messy-corner.jpg';
import facility_8 from '../../assets/pretend-play.jpg';
import facility_9 from '../../assets/comingsoon.png';



import Title from '../Title/Title';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* ---------- Small helper for hover/tap overlay on each card ---------- */
function FacilityCard({ title, img, desc }) {
  const [open, setOpen] = React.useState(false); // for mobile tap

  return (
    <div
      className="facility-card"
      onClick={() => setOpen((o) => !o)}   // tap toggles overlay on mobile
      onMouseLeave={() => setOpen(false)} // reset when leaving
      role="button"
      aria-label={`View ${title} details`}
    >
      <img src={img} alt={title} />
      <div className="facility-card_label">{title}</div>

      <div className={`facility-card_overlay ${open ? 'show' : ''}`}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function Home() {
  // Facilities data
  const facilities = [
    {
      title: 'Classroom',
      img: facility_1,
      desc:
        "Our classrooms are warm, bright, and thoughtfully designed to create a conducive environment where every child feels safe, engaged, and inspired. With a low teacher-to-student ratio, each child receives the attention and guidance they deserve. Here, every voice matters, every question is valued, every mistake teaches, and every child is seen, giving them the confidence to explore, discover, and grow, both independently and collaboratively. To prepare our little learners for the 21st century, we thoughtfully integrate smart technology like interactive smartboards and hands-on digital tools. Lessons are designed to spark curiosity, encourage creativity, and nurture essential skills such as problem-solving, collaboration, and communication, all while keeping screen time balanced and intentional to protect young minds and prioritise meaningful, hands-on learning."
    },
    {
      title: 'Playground',
      img: facility_3,
      desc:
        'Welcome to our Kinder Kingdom of Kindness — a safe and magical space where every child is valued, included, and celebrated. Designed in collaboration with playground specialists, our castle-inspired playground nurtures courage, empathy, resilience, and boundless imagination. Through shared adventures, children learn to take turns, work together, and develop lasting social skills, all while building strength, balance, and coordination through active play. Every detail is thoughtfully designed to spark joy, laughter, and meaningful friendships.'
    },
    {
      title: 'Library',
      img: facility_2,
      desc:
        "Today a reader, tomorrow a leader. At the heart of our library stands the enchanting Tree of Knowledge, custom-designed in collaboration with school furniture specialists to symbolise growth, wisdom, and endless dreams. Beneath its gentle canopy, little learners find cozy corners to curl up with their favourite stories, reflect quietly, sparking imagination, expanding horizons, and cultivating a lifelong love for reading. "
    },
    {
      title: 'Science Garden',
      img: facility_4,
      desc:
        'Step into our Science Garden, where curiosity blossoms and little explorers uncover the wonders of nature. Designed in collaboration with experienced landscapers, this magical space seamlessly brings nature and learning together. Here, children watch plants grow, meet tiny creatures, and see classroom science come alive. Through hands-on discovery, they develop a lifelong love for nature and a deep sense of environmental awareness and responsibility.'
    },
    {
      title: 'Cafeteria',
      img: facility_5,
      desc:
        'Our KinderCafe is a warm, welcoming space where little learners refuel, recharge, and reconnect. With nutritious, balanced meals thoughtfully planned and prepared using fresh, safe, and wholesome ingredients, we make mealtimes a joyful experience that nurtures healthy eating habits and fosters meaningful social connections.'
    },
    {
      title: 'Music Corner',
      img: facility_6,
      desc:
        'Where little hearts find their rhythm! Our Music Corner inspires creativity, confidence, and joy as children explore sounds, beats, and melodies. From playful instruments to sing-along sessions, it’s a space where self-expression truly shines.'
    },
    {
      title: 'Art & Messy Learning Corner',
      img: facility_7,
      desc:
        'Creativity knows no bounds here! Through painting, crafting, building, and hands-on exploration, children learn to express their ideas freely, embrace differences, and celebrate their imagination. It’s where tiny hands create big magic.'
    },
    {
      title: 'Pretend Play Corner',
      img: facility_8,
      desc:
        'Our Pretend Play Corner is where imagination takes the lead. With a charming kitchen set and thoughtfully curated props, children step into different roles — little chefs, shopkeepers, or storytellers — learning to collaborate, communicate, and create. Through playful make-believe, they develop social skills, empathy, and confidence.'
    },
    {
      title: 'Sensory Play Zone',
      img: facility_9,
      desc:
        'A space designed to spark curiosity and develop essential skills through water play, sand exploration, and engaging fine motor activities. As children touch, pour, splash, dig, scoop, stack, turn, flip, and build, they naturally strengthen focus, coordination, problem-solving, hand-eye coordination, and early pre-writing abilities — all while having endless fun.'
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section className="about-section" data-aos="fade-up">
        <div className="about">
          <div className="about-left" data-aos="fade-right">
            <img src={about_img} alt="about" className="about-img" />
          </div>
          <div className="about-right" data-aos="fade-left">
            <h3 className="section-title about-kinderhearts" style={{textAlign: 'left'}} >About KinderHearts</h3>
            <h2 className="section-subtitle" style={{textAlign: 'left'}} >Where Every Little Step Sparks Wonder</h2>
            <p>At KinderHearts, hearts come first. We believe that the true heart of education lies in
               the education of the heart, helping children grow into confident, compassionate, and
               lifelong learners.
           </p>
           <p> Everything we do — from the way we teach and lead to the way we care and connect — is
               done with love, patience, and purpose. We create a safe, joyful, and inspiring
               environment where every child feels valued, empowered, and truly seen.
           </p>
          <p>  At KinderHearts, children aren’t just learners. They are our sweethearts, little
               explorers, and bright stars, each shining in their own special way. We nurture their
               curiosity, guide their growth, and celebrate their learning every step of the way.
          </p>
           <p> And because every child’s learning journey is unique, we work closely with parents
               to ensure every child feels supported, inspired, and ready to take on the world.
           </p>


            <div className="about-btn-wrapper">
              <Link to="/about" className="learn-more-btn">
                Learn More <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="programs-section" data-aos="fade-up">
  <h3 className="section-title" style={{marginBottom: '30px'}}>KINDERNEWS</h3>
        <div className="programs">
          <div className="program" data-aos="zoom-in">
            <img src={program_1} alt="" />
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <p>Children&apos;s Day</p>
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
{/* === KinderSpaces Intro (before images) === */}
<section className="kspace-intro" data-aos="fade-up">
  <div className="kspace-container">
    <h3 className="section-title" style={{marginBottom: '30px'}}>KINDERSPACES</h3>
    <p style={{ textAlign: 'center' }}>
      At KinderHearts, every corner is thoughtfully designed to inspire curiosity, creativity, and a
      lifelong love of learning. From classrooms equipped with 21st-century learning tools to playful
      spaces that nurture imagination and exploration, each environment reflects our belief that the
      heart of education is the education of the heart.
    </p>
    <br/>
    <p style={{ textAlign: 'center' }}>
      Children learn best when they feel safe, valued, and loved, which is why we blend hands-on
      experiences, collaborative play, and balanced use of technology to spark discovery while
      protecting their natural wonder. Whether they’re exploring the Science Garden, getting cozy
      in the Library, playing in the Castle-themed Playground, or creating in our Art &amp; Sensory
      Corners, every experience is designed to develop essential skills while keeping joy and
      connection at the heart of learning.
    </p>
  </div>
</section>
      {/* === Facilities slider with hover/tap overlays === */}
      <div className="facilities-section" data-aos="fade-up">
        <div className="facilities">
          <div className="facilities-slider">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              className="facilities-swiper"
              slidesPerView={3}
              spaceBetween={16}
              loop
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                0: { slidesPerView: 1.05, spaceBetween: 12 },
                480: { slidesPerView: 1.25, spaceBetween: 12 },
                640: { slidesPerView: 2, spaceBetween: 14 },
                1024: { slidesPerView: 3, spaceBetween: 16 }
              }}
            >
              {facilities.map((f, i) => (
                <SwiperSlide key={i}>
                  <FacilityCard title={f.title} img={f.img} desc={f.desc} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
