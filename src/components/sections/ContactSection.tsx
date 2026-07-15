import FadeIn from '../ui/FadeIn'
import SectionHeading from '../ui/SectionHeading'
import { siteContent } from '../../config/siteContent'

const contactItems = [
  { label: 'Phone', value: siteContent.phoneNumber, href: `tel:+91${siteContent.phoneNumber}` },
  siteContent.email ? { label: 'Email', value: siteContent.email, href: `mailto:${siteContent.email}` } : null,
  siteContent.instagramUrl ? { label: 'Instagram', value: '@shifa.blooms', href: siteContent.instagramUrl } : null,
  siteContent.address ? { label: 'Address', value: siteContent.address, href: siteContent.googleMapsUrl } : null,
].filter(Boolean) as Array<{ label: string; value: string; href?: string }>

export default function ContactSection() {
  return (
    <section id="contact" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.contactEyebrow}
          title={siteContent.contactTitle}
          description={siteContent.contactDescription}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.07}>
              <article className="rounded-3xl border border-white bg-white p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.25)]">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">{item.label}</p>
                <p className="mt-4 text-base leading-7 text-stone-700">{item.value}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.label === 'Address' ? '_blank' : '_self'}
                    rel={item.label === 'Address' ? 'noreferrer' : undefined}
                    className="mt-4 inline-flex text-sm font-semibold text-rose-500 transition hover:text-rose-600"
                  >
                    View {item.label}
                  </a>
                ) : null}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
