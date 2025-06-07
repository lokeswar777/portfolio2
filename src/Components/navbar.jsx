import { useState } from 'react'
import '../styles/Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <a href="#home" className="brand-link" onClick={handleLinkClick}>
                        Lokeswar
                    </a>
                </div>
                
                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#home" className="nav-link" onClick={handleLinkClick}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" onClick={handleLinkClick}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link" onClick={handleLinkClick}>
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#work" className="nav-link" onClick={handleLinkClick}>
                                Work
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" onClick={handleLinkClick}>
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link" onClick={handleLinkClick}>
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
