export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      icon: '💻',
      skills: ['HTML', 'CSS', 'JavaScript (ES6)', 'Python', 'Node.js']
    },
    {
      category: 'Frameworks',
      icon: '⚡',
      skills: ['React', 'Next.js', 'Framer Motion', 'OpenCV']
    },
    {
      category: 'Backend & DB',
      icon: '🗄️',
      skills: ['Supabase', 'MongoDB (Basics)', 'APIs']
    },
    {
      category: 'Tools',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Render', 'Google Cloud', 'n8n', 'Notion']
    },
    {
      category: 'Design',
      icon: '🎨',
      skills: ['Figma', 'Responsive Web Design']
    },
    {
      category: 'AI',
      icon: '🤖',
      skills: ['Prompt Engineering', 'Agentic AI']
    }
  ]

  return (
    <section id="skills" className="section section-gray">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skill-categories-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category-card">
              <div className="skill-category-header">
                <span className="skill-category-icon">{cat.icon}</span>
                <h3 className="skill-category-title">{cat.category}</h3>
              </div>
              <div className="skill-badges">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}