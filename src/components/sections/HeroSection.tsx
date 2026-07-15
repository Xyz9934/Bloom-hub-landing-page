import FlowerButton from '../ui/FlowerButton'
import { siteContent } from '../../config/siteContent'

type HeroSectionProps = {
  onOrderNowClick: () => void
}

export default function HeroSection({ onOrderNowClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative isolate min-h-[92vh] overflow-hidden bg-[url('/hero-bloom.svg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-900/40 to-rose-950/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,228,236,0.35),_transparent_28%)]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white animate-fade-up">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-rose-50 backdrop-blur">
            {siteContent.tagline}
          </p>
          <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {siteContent.heroHeading}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-stone-100/90 sm:text-lg">
            {siteContent.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <FlowerButton className="min-w-40" onClick={onOrderNowClick}>
              Order Now
            </FlowerButton>
            <a
              href="#bouquets"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Explore Bouquets
            </a>
          </div>
        </div>
      </div>

      <a
        href="#bouquets"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-white/80 transition hover:text-white"
      >
        <span>Scroll</span>
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/30">
          <span className="mt-2 h-2 w-1.5 animate-bounce rounded-full bg-white" />
        </span>
      </a>
    </section>
  )
}
