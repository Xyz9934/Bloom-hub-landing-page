import { motion } from 'framer-motion'

const footerLinks = ['Privacy Policy', 'Terms & Conditions']

function SocialIcon({ label }: { label: string }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-sm font-semibold text-stone-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500">
      {label}
    </span>
  )
}

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-stone-200 bg-white"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-sm text-stone-500">© {new Date().getFullYear()} Shifa Blooms. All rights reserved.</p>

        <div className="flex flex-wrap items-center gap-5">
          {footerLinks.map((link) => (
            <a key={link} href="#" className="text-sm text-stone-500 transition hover:text-rose-500">
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <SocialIcon label="IG" />
          <SocialIcon label="FB" />
          <SocialIcon label="WA" />
        </div>
      </div>
    </motion.footer>
  )
}
