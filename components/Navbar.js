import { useState } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (id) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">ᓚᘏᗢ</div>
      <div className="navbar-links">
        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`navbar-link ${activeSection === section ? 'active' : ''}`}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  )
}