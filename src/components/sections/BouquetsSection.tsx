import SectionHeading from '../ui/SectionHeading'

const bouquets = [
  {
    name: 'Blush Serenade',
    description: 'Soft garden roses blended with delicate seasonal accents for an elegant statement.',
    price: 'Starting from ₹1,499',
    image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Lavender Whisper',
    description: 'A graceful pastel bouquet inspired by calm tones, gentle textures, and fine detail.',
    price: 'Starting from ₹1,899',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Garden Grace',
    description: 'Fresh white and green blooms arranged with a modern, airy feel for special gifting.',
    price: 'Starting from ₹2,199',
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
  },
]

export default function BouquetsSection() {
  return (
    <section id="bouquets" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Bouquets"
          title="Handpicked arrangements with a premium finish"
          description="A curated selection of signature bouquets designed to look beautiful on arrival and memorable in every frame."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {bouquets.map((bouquet) => (
            <article
              key={bouquet.name}
              className="group overflow-hidden rounded-3xl border border-white bg-white shadow-[0_20px_60px_-35px_rgba(15,23,42,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-35px_rgba(15,23,42,0.25)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={bouquet.image}
                  alt={bouquet.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-stone-900">{bouquet.name}</h3>
                <p className="text-sm leading-7 text-stone-600">{bouquet.description}</p>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-500">{bouquet.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
