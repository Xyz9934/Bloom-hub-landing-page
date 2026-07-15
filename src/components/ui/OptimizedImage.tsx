import { useState } from 'react'

type OptimizedImageProps = {
  src: string
  alt: string
  className?: string
}

export default function OptimizedImage({ src, alt, className = '' }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative h-full w-full overflow-hidden bg-stone-100">
      {!isLoaded ? <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-stone-100 via-white to-stone-100" /> : null}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      />
    </div>
  )
}
