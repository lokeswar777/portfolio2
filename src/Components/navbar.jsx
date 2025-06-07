import { useState } from 'react'
import '../styles/Navbar.css'

function Navbar({ currentSection }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMenuOpen(false)
        }
    }

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div id="nameofown">
                    <a href="#home" className="nav__logo" onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('home')
                    }}>
                        Lokeswar
                    </a>
                </div>

                <div className={`nav__menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a 
                                href="#home"
                                className={`nav__link ${currentSection === 'home' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('home')
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#about"
                                className={`nav__link ${currentSection === 'about' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('about')
                                }}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#skills"
                                className={`nav__link ${currentSection === 'skills' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('skills')
                                }}
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#work"
                                className={`nav__link ${currentSection === 'work' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('work')
                                }}
                            >
                                Work
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#contact"
                                className={`nav__link ${currentSection === 'contact' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('contact')
                                }}
                            >
                                Contact
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#projects"
                                className={`nav__link ${currentSection === 'projects' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('projects')
                                }}
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle" onClick={toggleMenu}>
                    <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
