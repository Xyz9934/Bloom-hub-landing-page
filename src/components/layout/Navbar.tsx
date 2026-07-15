import { motion } from 'framer-motion'
import { siteContent } from '../../config/siteContent'
import FlowerIcon from '../ui/FlowerIcon'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Bouquets', href: '#bouquets' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

type NavbarProps = {
  onOrderNowClick: () => void
}

export default function Navbar({ onOrderNowClick }: NavbarProps) {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-xl"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-500 shadow-sm">
            <FlowerIcon className="h-6 w-6" />
          </span>
          <span className="text-lg font-semibold tracking-[0.2em] text-stone-900">{siteContent.businessName}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition hover:text-rose-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onOrderNowClick}
          className="hidden rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-stone-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-stone-800 md:inline-flex"
        >
          Order Now
        </button>

        <button
          type="button"
          onClick={onOrderNowClick}
          className="inline-flex rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-900 shadow-sm transition hover:border-rose-200 hover:bg-rose-50 md:hidden"
        >
          Order Now
        </button>
      </div>
    </motion.header>
  )
}
