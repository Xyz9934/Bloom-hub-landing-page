import { siteContent } from '../../config/siteContent'

function SocialIcon({ label }: { label: string }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-sm font-semibold text-stone-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500">
      {label}
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-sm text-stone-500">
          {siteContent.copyright} {new Date().getFullYear()} {siteContent.businessName}. {siteContent.footerText}
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <a href="#" className="text-sm text-stone-500 transition hover:text-rose-500">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-stone-500 transition hover:text-rose-500">
            Terms & Conditions
          </a>
        </div>

        <div className="flex items-center gap-3">
          {siteContent.socialMediaLinks
            .filter((link) => Boolean(link.url))
            .map((link) => (
              <a key={link.label} href={link.url} aria-label={link.label} className="group">
                <SocialIcon label={link.label.slice(0, 2).toUpperCase()} />
              </a>
            ))}
        </div>
      </div>
    </footer>
  )
}
