import FadeIn from '../ui/FadeIn'
import SectionHeading from '../ui/SectionHeading'
import { siteContent } from '../../config/siteContent'

const features = [
  {
    title: 'Fresh Flowers',
    description: 'We prioritize freshness so each bouquet feels vibrant, fragrant, and long-lasting.',
  },
  {
    title: 'Handmade Bouquets',
    description: 'Each arrangement is assembled with attention to detail for a refined look and feel.',
  },
  {
    title: 'Affordable Pricing',
    description: 'Premium presentation with accessible price points for thoughtful gifting.',
  },
  {
    title: 'Fast Response',
    description: 'Quick communication for orders, questions, and special requests when you need it most.',
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.whyChooseUsEyebrow}
          title={siteContent.whyChooseUsTitle}
          description={siteContent.whyChooseUsText}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.08}>
              <article className="rounded-3xl border border-white bg-white p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-45px_rgba(15,23,42,0.3)]">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-rose-100 via-amber-50 to-emerald-50" />
                <h3 className="text-lg font-semibold text-stone-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{feature.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
