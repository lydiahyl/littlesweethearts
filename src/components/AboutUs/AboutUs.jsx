import React, { useEffect } from "react";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import principal from "../../assets/founder.jpg";
import teacher1 from "../../assets/teacher1.jpeg";
import teacher2 from "../../assets/teacher2.jpeg";
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
    {/* <p className="hero-subtitle">
      At KinderHearts, the heart of education is love, care, and connection — 
      where little learners are nurtured to grow into curious, compassionate, 
      and confident individuals, ready to take on the world with kindness and courage.
    </p> */}
  </div>
</section>

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
    <h2>From the heart of our founder</h2>
    {/* Short intro */}
    <div className="principal-intro" data-aos="fade-left">
      <p>Dear Parents and Families,</p>
      <p>Welcome to KinderHearts — where everything begins with heart.</p>
    </div>
    {/* Long body (starts directly below the picture, spans full width) */}
    <article className="principal-body" data-aos="fade-up">
      <p>Starting KinderHearts has been more than a professional journey — it has always been my dream to build a space where children feel genuinely happy, safe, valued, and loved. A place where every little heart is cherished, and where parents, too, are supported and empowered in their parenting journey. When school and home come together in love, understanding, and intention, beautiful things happen. And children flourish in every way.</p>

      <p>As both an educator and a lifelong learner, I’m passionate about the significant impact of early childhood education. Over the years, I’ve had the privilege of teaching children from early years to secondary levels, both in Malaysia and abroad — including Australia and Japan. My journey has also extended into leadership roles, with experiences as a preschool principal and as part of school management teams. From local, private, and international schools to children’s ministries and diverse educational settings, each experience has shaped my expectations of what a nurturing preschool should be.</p>

      <p>KinderHearts is the dream brought to life through those experiences and love for children — a school that blends global insights with local values and best practices. We’re not here to reinvent the wheel, but to refine it. Through constant reflection, purpose, and heart, we strive to keep doing better — for the betterment of both teaching and learning.</p>

      <p>At KinderHearts, we believe that the heart of education is the education of the heart. These early years are not simply about preparing children for school — they’re about nurturing who they are and who they are becoming. KinderHearts is designed to move at a child’s pace — where wonder is welcomed, questions are celebrated, and kindness leads the way.</p>

      <p>Everything we do, we do with intention — and with all our hearts. From the grass children play on, to the fabric of their uniforms, the meals we plan, and the layout of our playground — every detail is carefully designed and chosen with our children’s wellbeing and happiness in mind.</p>

      <p>Our preschool is more than just a school. It’s a community built on connection, love, and trust. We recognise each child's uniqueness while nurturing shared values, friendships, and a sense of belonging. With a team of passionate educators, we provide a warm, inspiring space where learning is joyful, play is purposeful, and every child’s heart and mind are nurtured with care.</p>

      <p>As the Founder and Head of School, I am committed to being present — greeting children with smiles, listening to their stories, and celebrating their milestones. Together with our dedicated team, we create meaningful, hands-on experiences that spark imagination, build resilience, and lay the foundation for lifelong learning.</p>

      <p>Above all, I aim for this school to be a truly safe space — where children are free to wonder, explore, and flourish. A place where parents can leave their children each morning with peace of mind, knowing they are loved, respected, and guided with care.</p>

      <p>Our children — our sweethearts, our darlings — are not just learners; they are individuals who are truly seen, heard, valued, and loved the right way.</p>

      <p>And most importantly, we walk this journey with you. We value strong school-family relationships, and when children feel safe, supported, and loved both at school and at home, they thrive.</p>

      <p>Thank you for choosing KinderHearts, and for entrusting us with your most precious treasure. I look forward to walking this journey with you, hand in hand, heart to heart. As you explore KinderHearts, I invite you to see not just what we do, but why we do it.</p>

      <p>This is more than a school. It’s a community. A family. A place where little hearts grow big dreams.</p>

      <p>After all, all I truly wish is for KinderHearts to be our children’s happy place — filled with joyful memories and the colourful childhood they so deserve.</p>

      <p>Let them learn, let them laugh,<br />Let them lead, let them play,<br />Let children be children.</p>

      <p>With all my heart,<br />Eunice Ho<br />Founder &amp; Head of School<br />KinderHearts Preschool</p>
    </article>
  </div>
  </div>
  </section>

      {/* Meet the Team */}
      <section className="team-section" data-aos="fade-up">
        <h2>Meet the Team</h2>
        <p className="section-lead">
          The Hearts Behind KinderHearts — caring educators who bring warmth,
          purpose, and heart to all they do.
          <br />
          At KinderHearts, our strength lies in our people. Behind every smile
          and story is a team of passionate educators.
        </p>

        <div className="team-grid">
          <div className="team-card" data-aos="zoom-in" data-aos-delay="100">
            <img src={teacher1} alt="Hee Yoke Ping" />
            <h4>Hee Yoke Ping</h4>
            <span>Head Teacher</span>
          </div>

          <div className="team-card" data-aos="zoom-in" data-aos-delay="200">
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
      </section>

      {/* Philosophy */}
      <section className="philosophy-section" data-aos="fade-up">
        <div className="container">
          <h2>Our Philosophy</h2>
          <p className="section-lead">
            The Heart of Education is the Education of the Heart.
          </p>
          <p className="body">
            At KinderHearts, we believe the heart of education is the education
            of the heart.
            <br />
            <br />
            Early childhood is the most critical period for nurturing minds,
            shaping values, and building the foundation for lifelong learning.
            Our preschool is a safe, joyful, and inspiring place where every
            child is known, loved, and supported to thrive in their own unique
            way.
            <br />
            <br />
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
            <h3>Our Vision</h3>
            <p>
              To be a nurturing preschool where every little heart grows with
              joy, wonder, and purpose — becoming kind, confident, and curious
              individuals ready to make meaningful contributions to the world.
            </p>
          </div>
          <div className="card" data-aos="fade-left">
            <h3>Our Mission</h3>
            <p>
              At KinderHearts, our mission is to create a safe and happy
              environment that fosters holistic growth—physical, emotional,
              social, and intellectual—through play-based learning, inquiry-based
              learning, strong values, and meaningful connections with families
              and the wider community.
            </p>
            <ul className="checklist">
              <li>
                <strong>Nurturing hearts</strong> through love, care, patience,
                and positive relationships.
              </li>
              <li>
                <strong>Inspiring minds</strong> through purposeful play, rich
                learning experiences, and hands-on discovery.
              </li>
              <li>
                <strong>Empowering growth</strong> by supporting each child’s
                unique strengths, voice, and learning journey.
              </li>
              <li>
                <strong>Partnering with families</strong> to build trust and
                create a connected, inclusive, and supportive community.
              </li>
              <li>
                <strong>Fostering kindness, creativity, and courage</strong> in
                every child, every day.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HEARTS Values — single vertical column, no decorative line */}
      <section className="hearts-section" data-aos="fade-up">
        <div className="container">
          <h2>Our Core Values — The HEARTS of KinderHearts</h2>
          <p className="section-lead">Our values are the heartbeat of everything we do.</p>

          <div className="hearts-stack">
            {[
              ["H", "Holistic", "We grow in every way—physically, emotionally, socially, intellectually, and creatively through balances. Every little step matters, and every step forward is worth celebrating."],
              ["E", "Empathy", "We care about how others feel and treat everyone with kindness, compassion, and respect in every interaction — big or small."],
              ["A", "Authenticity", "We are true to who we are and proud of what makes us special — our thoughts, our feelings, and our stories."],
              ["R", "Resilience", "We try again and again, even when things get tricky. Mistakes help us grow, and we learn to bounce back with courage and confidence."],
              ["T", "Trust", "We build trust by being honest, fair, and open. We listen, take turns, and help each other feel safe, valued, and loved."],
              ["S", "Sustainability", "We care for our world, protect our environment, and live responsibly — every small act makes a big difference."]
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
            <p className="kinder-line">
              <strong>KINDER</strong> is at the heart of it all.
            </p>
            <p className="kinder-sub">
              It reminds us to lead with kindness, nurture one another, grow
              together, and make our school a place full of joy, purpose and
              love — for everyone, every day.
            </p>
          </div>
        </div>
      </section>

    

      {/* keep footer white in your Footer.css */}
      <Footer />
    </>
  );
};

export default AboutUs;
