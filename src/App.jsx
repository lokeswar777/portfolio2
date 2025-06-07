import { useEffect, useState } from 'react'
import Navbar from './Components/navbar'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const sections = ['home', 'about', 'skills', 'work', 'contact', 'projects']

  useEffect(() => {
    let isScrolling = false

    const handleWheel = (e) => {
      e.preventDefault()
      
      if (isScrolling) return
      
      isScrolling = true
      
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        // Scroll down
        setCurrentSection(prev => prev + 1)
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scroll up
        setCurrentSection(prev => prev - 1)
      }
      
      setTimeout(() => {
        isScrolling = false
      }, 1000)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [currentSection, sections.length])

  useEffect(() => {
    const sectionElement = document.getElementById(sections[currentSection])
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentSection, sections])

  return (
    <div className="app">
      <Navbar 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      <main className="l-main">
        {sections.map((sectionId, index) => (
          <section 
            key={sectionId}
            className={`${sectionId} section ${index === currentSection ? 'active' : ''}`} 
            id={sectionId}
          >
            {sectionId === 'home' && (
              <div className="home__container bd-grid">
                <div className="home__data">
                  <h1 className="home__title">
                    Hi,<br />I'am <span className="home__title-color">Lokeswar</span><br />
                    A Machine Learning <br /><span className="home__title-color">Enthusiast</span>
                  </h1>
                </div>
              </div>
            )}

            {sectionId === 'about' && (
              <>
                <h2 className="section-title">About</h2>
                <div className="about__container bd-grid">
                  <div className="about__text">
                    <p>I'm <b>Lokeswar</b>, currently pursuing a degree in Artificial Intelligence and Machine Learning (AIML) at SRKR Engineering College in Bhimavaram. I am very interested in the software sector and have dedicated significant time to developing my skills in AI and ML.</p>
                  </div>
                </div>
              </>
            )}

            {sectionId === 'skills' && (
              <>
                <h2 className="section-title">Skills</h2>
                <div className="skills__container bd-grid">
                  <div className="skills__text">
                    <p>I am proficient in programming languages, including <b>C</b>, <b>Java</b>, and <b>Python</b>. Additionally, I have a strong foundation in <b>Machine Learning</b>, covering various techniques such as supervised learning, unsupervised learning, deep learning, and reinforcement learning. I possess technical expertise in <b>Pandas</b> in Python, allowing me to manipulate and analyze data efficiently.</p>
                  </div>
                </div>
              </>
            )}

            {sectionId === 'work' && (
              <>
                <h2 className="section-title">Work Experiences</h2>
                <div className="work__container bd-grid">
                  <div className="work__text">
                    <p>Portfolio work examples and project showcases will be displayed here. This includes various AI/ML projects, web development work, and other technical achievements.</p>
                  </div>
                </div>
              </>
            )}

            {sectionId === 'contact' && (
              <>
                <h2 className="section-title">Contact</h2>
                <div className="contact__container bd-grid">
                  <form className="contact__form">
                    <input type="text" placeholder="Name" className="contact__input" />
                    <input type="email" placeholder="Email" className="contact__input" required />
                    <textarea
                      placeholder="Type Your Message Here......"
                      className="contact__input"
                      rows="10"
                    ></textarea>
                    <button type="button" className="contact__button button">Send</button>
                  </form>
                </div>
              </>
            )}

            {sectionId === 'projects' && (
              <>
                <h2 className="section-title">Projects</h2>
                <div className="projects__container bd-grid">
                  <div className="projects__text">
                    <p>Detailed project information including DSA implementations, SeeingThroughSound (AI for visually impaired), and other machine learning projects will be displayed here.</p>
                  </div>
                </div>
              </>
            )}
          </section>
        ))}
      </main>
    </div>
  )
}

export default App
