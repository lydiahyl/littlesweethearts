import React from "react";
import { motion } from "framer-motion";
import "./Curriculum.css";
import Footer from "../Footer/Footer";

// Icons
import {
  FaLeaf,
  FaHeart,
  FaPuzzlePiece,
  FaBook,
  FaLanguage,
  FaCalculator,
  FaFlask,
  FaPaintBrush,
  FaSmile,
  FaRunning,
  FaHandsHelping,
} from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function Curriculum() {
  return (
    <div className="curriculum-page">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-inner container">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Exploring the World with Wonder and Joy
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Through purposeful play, discovery, and inquiry, we inspire children to explore ideas,
            ask questions, and find joy in learning every day.
          </motion.p>
        </div>
      </section>

      <main className="curriculum-wrap">
        {/* Philosophy */}
        <motion.section className="section cream" {...fadeUp}>
          <div className="container">
            <h2 className="section-title">Our Philosophy of Teaching &amp; Learning</h2>
            <p className="section-text">
              At KinderHearts, learning is an active, joyful and purposeful journey — a path of
              seeing, thinking, wondering, exploring, experimenting, imagining, and growing. We see
              children as curious thinkers and capable learners, each developing in their own time.
            </p>
            <p className="section-text">
              We believe every child is unique and shines in their own way. We value their
              individual pace — recognising where they are and guiding them forward with intention,
              care, and respect. Our role is to create a safe, nurturing space where curiosity is
              sparked, questions are welcomed, and learning truly comes alive.
            </p>
            <p className="section-text">
              From the earliest steps to confident leaps, our learning journey celebrates the whole
              child — every little step of the way.
            </p>
          </div>
        </motion.section>

        {/* Approach + Cards */}
        <motion.section className="section white" {...fadeUp}>
          <div className="container">
            <h2 className="section-title">Our Teaching &amp; Learning Approach</h2>
            <p className="section-text">
              At KinderHearts, we believe how children learn is just as important as what they
              learn. Our approach is intentional, child-centred, and grounded in research-based
              practices that support the development of the whole child.
            </p>
            <p className="section-text">We facilitate learning through:</p>

            <div className="card-grid">
              <div className="card">
                <FaPuzzlePiece className="card-icon" />
                <h3>Play-Based Learning</h3>
                <p>
                  Purposeful, imaginative play that builds language, social-emotional skills, and
                  joyful discovery.
                </p>
              </div>

              <div className="card">
                <FaBook className="card-icon" />
                <h3>Inquiry-Based Learning</h3>
                <p>
                  Curiosity-led learning that encourages children to ask questions, explore, and
                  make meaning from their world.
                </p>
              </div>

              <div className="card">
                <FaHeart className="card-icon" />
                <h3>Values-Driven Education</h3>
                <p>
                  Kindness, empathy, respect, and responsibility modelled daily through real
                  relationships and everyday moments.
                </p>
              </div>

              <div className="card">
                <FaLeaf className="card-icon" />
                <h3>Outdoor &amp; Nature-Inspired Experiences</h3>
                <p>
                  Nature becomes our classroom — encouraging movement, wonder, and a deeper
                  connection to the world around us.
                </p>
              </div>
            </div>

            <p className="section-text mt-16">
              Every moment — from classroom activities to garden adventures — is thoughtfully
              designed to spark joy, deepen understanding, and grow little hearts with big purpose.
            </p>
          </div>
        </motion.section>

        {/* Our Curriculum */}
        <motion.section className="section cream" {...fadeUp}>
          <div className="container">
            <h2 className="section-title">Our Curriculum</h2>
            <h4 className="section-tag">Rooted in Purpose, Guided by Heart</h4>

            <p className="section-text">
              At KinderHearts, we follow the National Preschool Curriculum (KSPK) set by Malaysia’s
              Ministry of Education — a trusted framework designed to support the holistic
              development of children aged 4 to 6. To enrich this foundation, we thoughtfully
              integrate key elements from the UK’s Early Years Foundation Stage (EYFS) — a globally
              recognised approach that emphasises learning through play, exploration, and meaningful
              relationships.
            </p>
            <p className="section-text">
              Together, these frameworks offer a well-rounded, internationally informed curriculum
              that value both local standards and global best practices. By blending structure with
              flexibility, we ensure that every child receives a strong foundation that is locally
              rooted and globally minded.
            </p>
            <p className="section-text">
              We focus on nurturing the whole child — intellectually, emotionally, socially,
              physically, and morally — through integrated, thematic learning that connects
              meaningfully across subject areas. Children learn through a balance of guided
              instruction and open-ended exploration, building the essential skills and values that
              prepare them for both school and life.
            </p>

            <h3 className="section-subtitle">What We Focus On</h3>

            <div className="focus-grid">
              <div className="focus-card">
                <div className="focus-row">
                  <FaLanguage className="focus-icon" />
                  <h4>Language &amp; Communication</h4>
                </div>
                <p>
                  We strengthen English, Bahasa Malaysia, and Mandarin through storytelling,
                  conversation, songs, imaginative play, and expressive activities that build both
                  confidence and communication skills.
                </p>
              </div>

              <div className="focus-card">
                <div className="focus-row">
                  <FaCalculator className="focus-icon" />
                  <h4>Early Mathematics &amp; Thinking Skills</h4>
                </div>
                <p>
                  Mathematical thinking is nurtured through play and real-life experiences that
                  build early number sense, reasoning, and problem-solving abilities.
                </p>
              </div>

              <div className="focus-card">
                <div className="focus-row">
                  <FaFlask className="focus-icon" />
                  <h4>Science &amp; Discovery</h4>
                </div>
                <p>
                  Children explore the natural world through hands-on inquiry, nature walks,
                  observation, and experimentation.
                </p>
              </div>

              <div className="focus-card">
                <div className="focus-row">
                  <FaPaintBrush className="focus-icon" />
                  <h4>Creative Arts</h4>
                </div>
                <p>
                  Imagination comes alive through music, movement, visual arts, and storytelling —
                  encouraging self-expression and creative thinking.
                </p>
              </div>

              <div className="focus-card">
                <div className="focus-row">
                  <FaSmile className="focus-icon" />
                  <h4>Social &amp; Emotional Development</h4>
                </div>
                <p>
                  We help children understand themselves and others, building emotional awareness,
                  empathy, friendships, and the foundations for healthy relationships and
                  resilience.
                </p>
              </div>

              <div className="focus-card">
                <div className="focus-row">
                  <FaRunning className="focus-icon" />
                  <h4>Physical Development</h4>
                </div>
                <p>
                  Through active play, outdoor exploration, and fine motor activities, children
                  strengthen their coordination, balance, and overall physical wellbeing.
                </p>
              </div>

              <div className="focus-card">
                <div className="focus-row">
                  <FaHandsHelping className="focus-icon" />
                  <h4>Humanity &amp; Moral Values</h4>
                </div>
                <p>
                  We nurture hearts by instilling universal values such as kindness, respect,
                  gratitude, and responsibility — guiding children to care for themselves, for
                  others, and the world around them.
                </p>
              </div>
            </div>

            <p className="section-text mt-16">
              Our curriculum is intentional and child-centred yet flexible, allowing educators to
              respond to children’s interests and developmental needs while ensuring meaningful
              progression. Whether it's a planned lesson or a spontaneous moment of discovery, every
              learning is an opportunity to grow, discover, and shine.
            </p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
