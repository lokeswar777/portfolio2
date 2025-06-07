import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Navbar from './Components/navbar'
import './App.css'

function AnimatedSection({ children, className, id }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      className={className}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  )
}

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="app">
      <Navbar />
      <main className="l-main">
        {/* Home Section */}
        <motion.section 
          className="home section" 
          id="home"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="home__container bd-grid">
            <motion.div className="home__data" variants={itemVariants}>
              <motion.h1 
                className="home__title"
                variants={itemVariants}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Hi,
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  I'am <span className="home__title-color">Lokeswar</span>
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  A Machine Learning
                </motion.span>
                <br />
                <motion.span 
                  className="home__title-color"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                >
                  Enthusiast
                </motion.span>
              </motion.h1>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <AnimatedSection className="about section" id="about">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About
          </motion.h2>
          <div className="about__container bd-grid">
            <motion.div 
              className="about__text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>I'm <b>Lokeswar</b>, currently pursuing a degree in Artificial Intelligence and Machine Learning (AIML) at SRKR Engineering College in Bhimavaram. I am very interested in the software sector and have dedicated significant time to developing my skills in AI and ML.</p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection className="skills section" id="skills">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <div className="skills__container bd-grid">
            <motion.div 
              className="skills__text"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>I am proficient in programming languages, including <b>C</b>, <b>Java</b>, and <b>Python</b>. Additionally, I have a strong foundation in <b>Machine Learning</b>, covering various techniques such as supervised learning, unsupervised learning, deep learning, and reinforcement learning. I possess technical expertise in <b>Pandas</b> in Python, allowing me to manipulate and analyze data efficiently.</p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Work Section */}
        <AnimatedSection className="work section" id="work">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Work Experiences
          </motion.h2>
          <div className="work__container bd-grid">
            <motion.div 
              className="work__text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>Portfolio work examples and project showcases will be displayed here. This includes various AI/ML projects, web development work, and other technical achievements.</p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection className="contact section" id="contact">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <div className="contact__container bd-grid">
            <motion.form 
              className="contact__form"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.input 
                type="text" 
                placeholder="Name" 
                className="contact__input"
                whileFocus={{ scale: 1.02, borderColor: "#31708e" }}
                transition={{ duration: 0.2 }}
              />
              <motion.input 
                type="email" 
                placeholder="Email" 
                className="contact__input" 
                required
                whileFocus={{ scale: 1.02, borderColor: "#31708e" }}
                transition={{ duration: 0.2 }}
              />
              <motion.textarea
                placeholder="Type Your Message Here......"
                className="contact__input"
                rows="10"
                whileFocus={{ scale: 1.02, borderColor: "#31708e" }}
                transition={{ duration: 0.2 }}
              />
              <motion.button 
                type="button" 
                className="contact__button button"
                whileHover={{ scale: 1.05, backgroundColor: "#2c5f7a" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Send
              </motion.button>
            </motion.form>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection className="projects section" id="projects">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="projects__container bd-grid">
            <motion.div 
              className="projects__text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>Detailed project information including DSA implementations, SeeingThroughSound (AI for visually impaired), and other machine learning projects will be displayed here.</p>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}

export default App
