import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (This is a demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  // Add your social media links here
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AdityaThakur-29',  
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditya-thakur-901ab6392/',  
      icon: '💼'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aditya___thakur_86/',  
      icon: '📸'
    }
  ]

  return (
    <section id="contact" className="section section-gray contact-with-background">
      <div className="contact-overlay">
        <div className="contact-container">
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              className="form-textarea"
            />
            <button onClick={handleSubmit} className="form-button">
              Send Message
            </button>
          </div>

          <div className="social-section">
            <p className="social-text">Connect with me:</p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">{social.icon}</span> {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}