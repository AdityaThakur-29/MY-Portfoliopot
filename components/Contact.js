import { useState, useEffect } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  const showToast = (title, desc, type = 'info') => {
    setToast({ title, desc, type })
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate that form values are not empty
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast("Action Required", "Please fill in all fields (Name, Email, and Message) before sending.", "warning")
      return;
    }

    const token = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE"

    if (token === "YOUR_ACCESS_KEY_HERE") {
      showToast("Configuration Required", "Please configure your Web3Forms Access Key in your .env.local file.", "error")
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: token,
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      })

      const result = await response.json()
      if (result.success) {
        showToast("Message Sent Successfully", "Your message has been successfully sent. Thank you for reaching out!", "success")
        setFormData({ name: '', email: '', message: '' })
      } else {
        showToast("Submission Failed", "Something went wrong. Please try again.", "error")
      }
    } catch (error) {
      showToast("Network Error", "An error occurred. Please check your connection and try again.", "error")
    }
  }

  
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

      {toast && (
        <div className="toast-stack">
          <div className={`custom-toast ${toast.type}`}>
            <svg className="toast-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {toast.type === 'success' && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              )}
              {toast.type === 'warning' && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              )}
              {toast.type === 'error' && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              )}
              {toast.type === 'info' && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              )}
            </svg>
            <div className="toast-content">
              <span className="toast-title">{toast.title}</span>
              <span className="toast-desc">{toast.desc}</span>
            </div>
            <button className="toast-close-btn" onClick={() => setToast(null)}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <div className="toast-progress"></div>
          </div>
        </div>
      )}
    </section>
  )
}