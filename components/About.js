export default function About() {
  return (
    <section id="about" className="section section-white">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-image-container">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="about-image"
            />
          </div>
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              I'm a passionate frontend developer with expertise in creating beautiful, 
              responsive, and user-friendly web applications. With a strong foundation in 
              modern web technologies and a keen eye for design, I bring ideas to life through 
              clean code and elegant interfaces. I love solving complex problems and 
              continuously learning new technologies to stay at the forefront of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}