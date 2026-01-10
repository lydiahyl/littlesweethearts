import React, { useEffect} from "react";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import principal from "../../assets/eunice.jpg";
import teacher1 from "../../assets/ping.jpg";
import teacher2 from "../../assets/enci.jpg";
import Footer from "../Footer/Footer";

const AboutUs = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="about-hero" data-aos="fade-in" aria-label="KinderHearts About Hero">
        <div className="hero-content">
          <h1 className="hero-title">Nurturing Little Hearts for a Big World</h1>
          {/* New subtitle (same hook/classes as Admissions) */}
          <p className="hero-subtitle">
            At KinderHearts, the heart of education is love, care, and connection —
            where little learners are nurtured to grow into curious, compassionate, and
            confident individuals, ready to take on the world with kindness and courage.
          </p>
        </div>
      </section>

      {/* Principal's message — with "Read more" from the specified paragraph */}
      <section className="principal-section" data-aos="fade-up">
        <div className="principal-container">
          {/* Left: portrait + name/title */}
          <div className="principal-left" data-aos="fade-right">
            <img src={principal} alt="principal" className="principal-img" />
            <div className="teacher-info">
              <strong>Eunice Ho</strong><br />
              Founder &amp; Head of School<br />
              Bachelor of Education (Hons.)
            </div>
          </div>

          <div className="principal-message" data-aos="fade-left">
            <h2>From the Heart of Our Founder</h2>

            {/* Short intro */}
            <div className="principal-intro">
              <p>Dear Parents and Families,</p>
              <p>Welcome to KinderHearts — where everything begins with heart.</p>
            </div>

            {/* Body BEFORE the toggle */}
            <article className="principal-body">
            <p>
            Starting KinderHearts has been more than a professional journey — 
            it’s the realisation of a vision I’ve long carried: to create a space 
            where children feel safe, loved, and truly happy, and where parents feel 
            supported in their journey too. When school and home come together in love, 
            understanding, and purpose, beautiful things happen. Children thrive. 
            Children flourish.
            </p>
            <p>
            My journey in education — from teaching across Malaysia and abroad, in local, 
            private, and international schools, to leading preschools and engaging with diverse 
            communities — has shaped my understanding of what a nurturing school should be. 
            KinderHearts brings these insights together, blending global perspectives with local 
            values and effective practices.
            </p>
            <p>
            We believe the heart of education lies in the education of the heart. 
            At KinderHearts, learning is joyful, play is purposeful, and every detail — 
            from the classrooms to the playground — is thoughtfully designed with children’s 
            wellbeing in mind.
            </p>
            <p>
            We’re not here to reinvent the wheel, but to refine it. Through reflection, intention, 
            and heart, we strive to keep doing better — for the betterment of both teaching and learning.
            </p>
            <p>
            This is more than a school. It’s a warm, connected community, a family — where every child is seen, 
            every voice matters, and kindness leads the way. A place where parents can leave their children with 
            peace of mind, knowing they are loved, respected, and guided with care. A place where little hearts grow big dreams.
            </p>
            <p>
            Thank you for choosing KinderHearts and entrusting us with your precious little ones. 
            I look forward to walking this journey with you — hand in hand, heart to heart. 
            As you explore KinderHearts, I invite you to see not just what we do, but why we do it.
            </p>
            <p>
            Above all, I hope for KinderHearts to be our children’s safe, happy place — 
            filled with joyful memories and the colours of childhood they so deserve. 
            </p>
            <p>
            <strong>Let them learn, let them lead,
            <br/>
            Let them play, let them laugh.
            <br/>
            Let children be children.</strong>
            </p>
            <br/>
            <p>
            With all my heart, <br/>
            Eunice Ho<br/>
            Founder & Head of School<br/>
            KinderHearts Preschool<br/>
            </p>
            </article>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team-section" data-aos="fade-up">
      <div className="container">
        <h2>Meet the Team</h2>
        <p className="section-lead">
          The Hearts Behind KinderHearts
          </p>
          <p className="body">
          At KinderHearts, our strength lies in our people. Behind every smile
          and story is a team of passionate educators who bring warmth, purpose, and heart to all they do.
          <br/><br/>
          More than qualified professionals, they are caring individuals who genuinely love working with children
           — nurturing each little one with intention, joy, and love. 
           Together, we create a safe, joyful, and inspiring environment where curiosity is encouraged, 
           kindness is demonstrated, and every child is empowered to flourish.
        </p>
        <br/>
        <div className="team-grid">
          <div className="team-card" data-aos="zoom-in" data-aos-delay="100">
            <img src={teacher1} alt="Hee Yoke Ping" />
            <h4>Hee Yoke Ping</h4>
            <span>Head Teacher</span>
          </div>
          <div className="team-card" data-aos="zoom-in" data-aos-delay="100"> 
          <img src={teacher2} alt="Eloise Lai" /> 
          <h4>Eloise Lai</h4> 
          <span>Homeroom Teacher</span> 
          </div> 
          </div>
        <p className="team-note" data-aos="fade-up">
          We grow alongside our children — constantly reflecting, learning, and
          striving to do better every day. Every member of our team is recruited
          through trusted referrals to ensure they embody our values and vision.
          If you know someone who shares our love for early childhood education,
          we’d love your referral. <em>Great hearts recognise great hearts.</em>
        </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy-section" data-aos="fade-up">
        <div className="container">
          <h2>Our Philosophy</h2>
          <p className="section-lead">
            The Heart of Education is the Education of the Heart
          </p>
          <p className="body">
            Early childhood is the most critical period for nurturing minds,
            shaping values, and building the foundation for lifelong learning.
            Our preschool is a safe, joyful, and inspiring place where every
            child is known, loved, and supported to thrive in their own unique
            way.
            <br /><br />
            Here, children feel empowered to explore, encouraged to ask
            questions, and celebrated for who they are. With a nurturing
            environment and intentional teaching, we help children develop a
            strong sense of self, empathy for others, and a love for learning
            that lasts a lifetime.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vm-section" data-aos="fade-up">
        <div className="vm-grid container">
          <div className="card" data-aos="fade-right">
            <h2>Our Vision</h2>
            <p>
              To be a nurturing preschool where every little heart grows with
              joy, wonder, and purpose — becoming kind, confident, and curious
              individuals ready to make meaningful contributions to the world.
            </p>
          </div>
          <div className="card" data-aos="fade-left">
            <h2>Our Mission</h2>
            <p>
              At KinderHearts, our mission is to create a safe and happy
              environment that fosters holistic growth—physical, emotional,
              social, and intellectual—through play-based learning, inquiry-based
              learning, strong values, and meaningful connections with families
              and the wider community.
            </p>
            <ul className="checklist">
              <li><strong>Nurturing hearts</strong> through love, care, patience, and positive relationships.</li>
              <li><strong>Inspiring minds</strong> through purposeful play, rich learning experiences, and hands-on discovery.</li>
              <li><strong>Empowering growth</strong> by supporting each child’s unique strengths, voice, and learning journey.</li>
              <li><strong>Partnering with families</strong> to build trust and create a connected, inclusive, and supportive community.</li>
              <li><strong>Fostering kindness, creativity, and courage</strong> in every child, every day.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HEARTS Values */}
      <section className="hearts-section" data-aos="fade-up">
        <div className="container">
          <h2>Our Core Values — The HEARTS of KinderHearts</h2>
          {/* <p className="section-lead">Our values are the heartbeat of everything we do.</p> */}

          <div className="hearts-stack">
            {[
              ["H", "Holistic", "We grow in every way — physically, emotionally, socially, intellectually, and creatively through balanced, meaningful experiences. Every little step matters, and every step forward is worth celebrating."],
              ["E", "Empathy", "We care about how others feel and treat everyone with kindness, compassion, and respect in every interaction — big or small."],
              ["A", "Authenticity", "We are true to who we are and proud of what makes us special — our thoughts, our feelings, and our stories."],
              ["R", "Resilience", "We try again and again, even when things get tricky. Mistakes help us grow, and we learn to bounce back with courage and confidence."],
              ["T", "Trust", "We build trust by being honest, fair, and open. We listen, take turns, and help each other feel safe, valued, and loved."],
              ["S", "Sustainability", "We take care of our world, protect our environment, and live responsibly — every small act makes a big difference."]
            ].map(([letter, title, text]) => (
              <div className="heart-card" key={letter} data-aos="zoom-in">
                <span className="badge">{letter}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="kinder-cta" data-aos="fade-up">
            <p className="kinder-line"><strong>KINDER</strong> is at the heart of it all.</p>
            <p className="kinder-sub">
              It reminds us to lead with kindness, nurture one another, grow
              together, and to make our school a place full of joy, purpose and
              love — for everyone, every day.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
