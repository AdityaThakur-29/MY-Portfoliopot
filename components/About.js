import ScrollRevealText from './ScrollRevealText'

export default function About() {
  const featureCards = [
    {
      title: "Clean Code",
      desc: "Writing scalable and maintainable code.",
      icon: (
        <svg className="about-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: "Performance",
      desc: "Building fast and optimized web apps.",
      icon: (
        <svg className="about-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    {
      title: "Design Focused",
      desc: "Creating beautiful UI with great user experience.",
      icon: (
        <svg className="about-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
          <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.16-.64-1.57-.4-.41-.66-.96-.66-1.58 0-1.38 1.12-2.5 2.5-2.5H18c2.21 0 4-1.79 4-4 0-5.51-4.49-10-10-10z"></path>
        </svg>
      )
    }
  ]

  const stats = [
    {
      number: "20+",
      label: "Projects",
      icon: (
        <svg className="about-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      number: "2+",
      label: "Years Learning",
      icon: (
        <svg className="about-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      )
    },
    {
      number: "5+",
      label: "Technologies",
      icon: (
        <svg className="about-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    {
      number: "100%",
      label: "Dedication",
      icon: (
        <svg className="about-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ]

  return (
    <section id="about" className="section section-white">
      <div className="section-container">
        <div className="about-redesigned-grid">
          {/* Left Column: Photo, Orbit Ring & Feature Cards */}
          <div className="about-left-col">
            <div className="about-photo-orbit-container">
              <div className="about-dots-matrix" />
              <div className="about-orbit-ring">
                <div className="about-orbit-dot" />
              </div>
              <img
                src="/profile.jpg"
                alt="Aditya Thakur Profile"
                className="about-profile-img"
              />
            </div>

            <div className="about-feature-cards">
              {featureCards.map((card) => (
                <div key={card.title} className="about-feature-card">
                  {card.icon}
                  <h4 className="about-feature-title">{card.title}</h4>
                  <p className="about-feature-desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Content & Stats */}
          <div className="about-right-col">
            <span className="about-badge">About Me</span>
            <div>
              <h2 className="about-main-title">
                About <span className="about-title-highlight">Me</span>
              </h2>
              <div className="about-title-underline" />
            </div>

            <div className="about-paragraphs">
              <ScrollRevealText>
                I&apos;m a passionate frontend developer with expertise in creating beautiful,
                responsive, and user-friendly web applications.
              </ScrollRevealText>
              <ScrollRevealText>
                With a strong foundation in modern web technologies and a keen eye for design,
                I bring ideas to life through clean code and elegant interfaces.
              </ScrollRevealText>
              <ScrollRevealText>
                I love solving complex problems and continuously learning new technologies
                to stay at the forefront of web development.
              </ScrollRevealText>
            </div>

            <div className="about-stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat-item">
                  {stat.icon}
                  <span className="about-stat-number">{stat.number}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}