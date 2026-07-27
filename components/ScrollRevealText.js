import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollRevealText({ children, className = '' }) {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.70']
  })

  const text = typeof children === 'string' ? children : String(children)
  const words = text.split(' ')

  return (
    <p ref={containerRef} className={`scroll-reveal-text ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
      })}
    </p>
  )
}

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.25, 1])
  const color = useTransform(progress, range, ['#94a3b8', '#0f172a'])

  return (
    <span style={{ display: 'inline-block', marginRight: '0.35em', whiteSpace: 'nowrap' }}>
      <motion.span style={{ opacity, color, display: 'inline-block' }}>
        {word}
      </motion.span>
    </span>
  )
}
