import { bouquets } from '../../data/bouquets'
import { siteContent } from '../../config/siteContent'
import FadeIn from '../ui/FadeIn'
import OptimizedImage from '../ui/OptimizedImage'
import SectionHeading from '../ui/SectionHeading'

export default function BouquetsSection() {
  return (
    <section id="bouquets" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.featuredBouquetsEyebrow}
          title={siteContent.featuredBouquetsTitle}
          description={siteContent.featuredBouquetsDescription}
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {bouquets
            .filter((bouquet) => bouquet.featured)
            .map((bouquet, index) => (
              <FadeIn key={bouquet.id} delay={index * 0.08}>
                <article className="group overflow-hidden rounded-3xl border border-white bg-white shadow-[0_20px_60px_-35px_rgba(15,23,42,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-35px_rgba(15,23,42,0.25)]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <OptimizedImage
                      src={bouquet.image}
                      alt={`${bouquet.name} product photo`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-xl font-semibold text-stone-900">{bouquet.name}</h3>
                    <p className="text-sm leading-7 text-stone-600">{bouquet.shortDescription}</p>
                    {bouquet.description ? <p className="text-sm leading-7 text-stone-500">{bouquet.description}</p> : null}
                    {bouquet.features?.length ? (
                      <ul className="flex flex-wrap gap-2 pt-1">
                        {bouquet.features.map((feature) => (
                          <li
                            key={feature}
                            className="rounded-full bg-stone-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-500">{bouquet.price}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
        </div>
      </div>
    </section>
  )
}
