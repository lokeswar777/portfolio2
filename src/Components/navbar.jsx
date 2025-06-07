import { useState } from 'react'
import '../styles/Navbar.css'

function Navbar({ currentSection, onSectionChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const sections = ['home', 'about', 'skills', 'work', 'contact', 'projects']

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleSectionClick = (sectionId) => {
        onSectionChange(sections.indexOf(sectionId))
        setIsMenuOpen(false)
    }

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div id="nameofown">
                    <a 
                        href="#home" 
                        className="nav__logo" 
                        onClick={(e) => {
                            e.preventDefault()
                            handleSectionClick('home')
                        }}
                    >
                        Lokeswar
                    </a>
                </div>

                <div className={`nav__menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        {sections.map(section => (
                            <li key={section} className="nav__item">
                                <a 
                                    href={`#${section}`}
                                    className={`nav__link ${currentSection === sections.indexOf(section) ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleSectionClick(section)
                                    }}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
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
