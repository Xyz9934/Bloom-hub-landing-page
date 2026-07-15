import { motion, type MotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
} & Pick<MotionProps, 'viewport'>

export default function FadeIn({ children, className = '', delay = 0, y = 18, viewport }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      viewport={viewport ?? { once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
