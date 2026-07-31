import dynamic from 'next/dynamic'

const IconCloud = dynamic(() => import('./magicui/IconCloud'), {
  ssr: false
})

function SkillCard({ cat }) {
  return (
    <div className="skill-category-card cursor-target">
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
  );
}

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      icon: '💻',
      skills: ['HTML', 'CSS', 'JavaScript ', 'Python', 'Node.js']
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

  const slugs = [
    "html5",
    "css3",
    "javascript",
    "python",
    "nodedotjs",
    "react",
    "nextdotjs",
    "supabase",
    "mongodb",
    "git",
    "github",
    "figma",
    "vercel",
    "netlify",
    "googlecloud",
    "opencv",
    "notion",
    "n8n",
    "framer",
    "typescript",
    "tailwindcss",
    "visualstudiocode",
    "npm",
    "docker",
    "postman"
  ];

  return (
    <section id="skills" className="skills-section-stack">
      <div className="skills-section-container">
        <div className="skills-left-col">
          <div className="skills-left-sticky">
            <span className="skills-pre-title">EXPERTISE</span>
            <h2 className="skills-main-title">My Skills</h2>
            <div className="skills-title-underline"></div>
            <p className="skills-description">
              I specialize in craft-oriented, high-performance web applications using modern tools.
              Here is my core stack, covering frontend design, backend infrastructure, development tools, and AI integration.
            </p>
            <div className="skills-cloud-wrapper">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
        <div className="skills-right-col">
          {skillCategories.map((cat, index) => (
            <SkillCard key={index} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
