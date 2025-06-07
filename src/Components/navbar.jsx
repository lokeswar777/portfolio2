import { useState, useEffect } from 'react'
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion'
import '../styles/Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setScrolled(scrollPosition > 50)

            const sections = ['home', 'about', 'skills', 'work', 'contact', 'projects']
            const currentSection = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            
            if (currentSection) {
                setActiveSection(currentSection)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'work', label: 'Work' },
        { id: 'contact', label: 'Contact' },
        { id: 'projects', label: 'Projects' }
    ]

    return (
        <LazyMotion features={domAnimation}>
            <motion.nav 
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="navbar-container">
                    <motion.div 
                        className="navbar-brand"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a 
                            href="#home" 
                            className="brand-link"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('home')
                            }}
                        >
                            Lokeswar
                        </a>
                    </motion.div>
                    
                    <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                        <motion.ul 
                            className="navbar-nav"
                            initial={false}
                            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 0 }}
                        >
                            {navItems.map((item, index) => (
                                <motion.li 
                                    key={item.id}
                                    className="nav-item"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <motion.a
                                        href={`#${item.id}`}
                                        className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            scrollToSection(item.id)
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.label}
                                        {activeSection === item.id && (
                                            <motion.div
                                                className="active-indicator"
                                                layoutId="activeIndicator"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 30
                                                }}
                                            />
                                        )}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    <motion.div 
                        className="navbar-toggle" 
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.span 
                            className={`bar ${isMenuOpen ? 'active' : ''}`}
                            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        />
                        <motion.span 
                            className={`bar ${isMenuOpen ? 'active' : ''}`}
                            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        />
                        <motion.span 
                            className={`bar ${isMenuOpen ? 'active' : ''}`}
                            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        />
                    </motion.div>
                </div>
            </motion.nav>
        </LazyMotion>
    )
}

export default Navbar
