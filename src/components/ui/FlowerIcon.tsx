type FlowerIconProps = {
  className?: string
}

export default function FlowerIcon({ className = '' }: FlowerIconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <path
        d="M32 12c4 0 7 3 8 7 2-3 5-5 9-5 5 0 9 4 9 9 0 4-2 7-5 9 4 1 7 4 7 8 0 5-4 9-9 9-4 0-7-2-9-5-1 4-4 7-8 7s-7-3-8-7c-2 3-5 5-9 5-5 0-9-4-9-9 0-4 2-7 5-8-4-2-7-5-7-9 0-5 4-9 9-9 4 0 7 2 9 5 1-4 4-7 8-7Z"
        fill="currentColor"
        fillOpacity="0.16"
      />
      <circle cx="32" cy="32" r="7" fill="currentColor" fillOpacity="0.35" />
    </svg>
  )
}
