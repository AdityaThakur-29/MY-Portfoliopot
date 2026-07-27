import dynamic from 'next/dynamic'
import { ReactLenis } from 'lenis/react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const TargetCursor = dynamic(() => import('../components/TargetCursor'), {
  ssr: false
})

export default function Home() {
  return (
    <ReactLenis root>
      <div>
        <TargetCursor targetSelector=".cursor-target, button, a, .project-stack-card, .skill-category-card, .about-feature-card" />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  )
}