import type { ButtonHTMLAttributes } from 'react'

type FlowerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export default function FlowerButton({ variant = 'primary', className = '', ...props }: FlowerButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-2'
  const styles =
    variant === 'primary'
      ? 'bg-stone-900 text-white shadow-lg shadow-stone-900/15 hover:-translate-y-0.5 hover:bg-stone-800'
      : 'border border-stone-200 bg-white/90 text-stone-900 backdrop-blur hover:-translate-y-0.5 hover:border-rose-200 hover:bg-rose-50'

  return <button className={`${base} ${styles} ${className}`} {...props} />
}
