export default function Projects() {
  const projects = [
    {
      title: 'CSSCraft',
      description: 'Interactive CSS component generator using React, Next.js, HTML, CSS, JavaScript. Live preview, code generation, deployed on Vercel.',
      image: '/csscraft_preview.png',
      liveUrl: 'https://css-craft.vercel.app/',
      // codeUrl: 'https://github.com/AdityaThakur-29/CSSCraft'
    },
    {
      title: 'HackZone',
      description: 'An AI Platform helping students discover hackathons, workshops, and bootcamps.',
      image: '/hackzone_preview.png',
      liveUrl: 'https://sackzone.vercel.app/',
      codeUrl: 'https://github.com/AdityaThakur-29/HackZone'
    },
    {
      title: 'Netflix Clone',
      description: 'A fully responsive Netflix clone with movie browsing, search functionality, and dynamic content display.',
      image: '/nethlix.jpg',
      liveUrl: 'https://myflix-two-sand.vercel.app/',
      codeUrl: 'https://github.com/AdityaThakur-29/Netflix-Clone'
    },
    {
      title: 'Tic Tac Toe',
      description: 'Interactive tic-tac-toe game with player vs player mode, win detection, and score tracking.',
      image: '/tectacto.png',
      liveUrl: 'https://tic-tac-toe-delta-self-96.vercel.app/',
      codeUrl: 'https://github.com/AdityaThakur-29/tic-tac-toe'
    },
    {
      title: 'QR-CODE GENERATER',
      description: 'A simple, and customizable QR Code Generator Web App built using HTML, CSS, and JavaScript.',
      image: '/qrbg.png',
      liveUrl: 'https://qr-code-generater-delta.vercel.app/',
      codeUrl: 'https://github.com/AdityaThakur-29/QR-CODE--GENERATER'
    },
    {
      title: 'Sign Up Form',
      description: 'Modern registration form with form validation, password strength checker, and responsive design.',
      image: '/sing-up.jpg',
      liveUrl: 'https://sign-up-form-gray-nine.vercel.app/',
      codeUrl: 'https://github.com/AdityaThakur-29/sign-up-form'
    },
    {
      title: 'Rainbow-cat game',
      description: 'A fun and interactive rainbow cat game built with HTML, CSS, and JavaScript.',
      image: '/rainbow-cat.jpg',
      liveUrl: 'https://rainbow-cat-1.vercel.app/',
      codeUrl: 'https://github.com/AdityaThakur-29/rainbow-_cat_1'
    },
  ]

  return (
    <section id="projects" className="projects-section-stack">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-stack-list">
          {projects.map((project, index) => {
            const offsetTop = `calc(80px + ${index * 24}px)`
            return (
              <div
                key={index}
                className="project-stack-card"
                style={{
                  top: offsetTop,
                  zIndex: index + 1
                }}
              >
                <div className="project-stack-content">
                  <div className="project-stack-info">
                    <span className="project-stack-number">PROJECT 0{index + 1}</span>
                    <h3 className="project-stack-title">{project.title}</h3>
                    <p className="project-stack-description">{project.description}</p>
                    <div className="project-stack-buttons">
                      {project.codeUrl && (
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-stack-link">
                          <button className="project-stack-button-primary">View Code</button>
                        </a>
                      )}
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-stack-link">
                        <button className="project-stack-button-secondary">Live Demo</button>
                      </a>
                    </div>
                  </div>
                  <div className="project-stack-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-stack-image"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}