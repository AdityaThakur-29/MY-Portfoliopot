export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AdityaThakur-29',  
     
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditya-thakur-901ab6392/',  
      
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aditya___thakur_86/',  
      
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-socials">
        {socialLinks.map((social) => (
          <a 
            key={social.name} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            {social.name}
          </a>
        ))}
      </div>
      <p className="footer-copyright">
        Copyright © 2025. All rights reserved.
      </p>
    </footer>
  )
}