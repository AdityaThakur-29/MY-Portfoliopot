export default function Skills() {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Git', 'Responsive Design', 'UI/UX']

  return (
    <section id="skills" className="section section-gray">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-name">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}