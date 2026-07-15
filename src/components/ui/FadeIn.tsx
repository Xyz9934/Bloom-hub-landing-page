import type { CSSProperties, ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  return (
    <div className={`${className} animate-fade-up`} style={{ animationDelay: `${delay}s` } satisfies CSSProperties}>
      {children}
    </div>
  )
}
