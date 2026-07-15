import FadeIn from '../ui/FadeIn'
import FlowerIcon from '../ui/FlowerIcon'
import SectionHeading from '../ui/SectionHeading'
import { siteContent } from '../../config/siteContent'

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.aboutEyebrow}
          title={siteContent.aboutTitle}
          description={siteContent.aboutUsText}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 via-white to-emerald-50 p-8 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.28)]">
              <div className="absolute right-6 top-6 text-rose-200">
                <FlowerIcon className="h-24 w-24" />
              </div>
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">Our story</p>
                <h3 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
                  Floral designs that feel curated, warm, and memorable
                </h3>
                <p className="max-w-xl text-base leading-8 text-stone-600">
                  We focus on refined color palettes, premium flower selection, and polished presentation to make
                  every order feel special. This section is intentionally placeholder content for the first launch
                  milestone.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-stone-100 bg-stone-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Fresh curation</p>
                <p className="mt-4 text-base leading-7 text-stone-600">
                  Carefully selected seasonal blooms arranged with a premium finish.
                </p>
              </div>
              <div className="rounded-3xl border border-stone-100 bg-rose-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-500">Gift-ready</p>
                <p className="mt-4 text-base leading-7 text-stone-600">
                  Elegant wrapping and presentation that feel polished from the first glance.
                </p>
              </div>
              <div className="rounded-3xl border border-stone-100 bg-white p-6 shadow-sm sm:col-span-2">
                <div className="grid gap-4 sm:grid-cols-3">
                  {['Soft palette', 'Luxury finish', 'Local service'].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-stone-50 px-4 py-5 text-center text-sm font-medium text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
