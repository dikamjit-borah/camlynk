'use client'

import { motion } from 'framer-motion'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  id?: string
  delay?: number
}

export default function SectionWrapper({ children, className = '', style, id, delay = 0 }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
