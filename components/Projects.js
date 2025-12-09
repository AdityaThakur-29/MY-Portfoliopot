export default function Projects() {
const projects = [
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
        title: 'Sign Up Form',
        description: 'Modern registration form with form validation, password strength checker, and responsive design.',
        image: '/sing-up.jpg',
        liveUrl: 'https://sign-up-form-gray-nine.vercel.app/',
        codeUrl: 'https://github.com/AdityaThakur-29/sign-up-form'
      },
    ]

return (
    <section id="projects" className="section section-white">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-buttons">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <button className="project-button-primary">View Code</button>
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <button className="project-button-secondary">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}