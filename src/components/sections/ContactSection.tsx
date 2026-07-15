import SectionHeading from '../ui/SectionHeading'

const contactItems = [
  { label: 'Phone', value: '9470439517' },
  { label: 'Email', value: 'hello@shifablooms.com' },
  { label: 'Instagram', value: '@shifa.blooms' },
  { label: 'Address', value: 'Your studio address placeholder, City, Country' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Reach out for bouquets, gifting, and custom floral requests"
          description="This is a simple contact display section for now. We’ll wire real enquiry flows in a later milestone."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-white bg-white p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.25)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">{item.label}</p>
              <p className="mt-4 text-base leading-7 text-stone-700">{item.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
