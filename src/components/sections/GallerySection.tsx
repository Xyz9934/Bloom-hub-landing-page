import SectionHeading from '../ui/SectionHeading'

const galleryImages = [
  'https://images.unsplash.com/photo-1508610048659-a06b669e6a9a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1463862049139-8a2ad38ebf72?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=900&q=80',
]

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A glimpse of the floral mood we want to create"
          description="Temporary placeholder imagery arranged in a responsive mosaic to establish the visual rhythm of the site."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className={`group overflow-hidden rounded-3xl shadow-[0_20px_60px_-45px_rgba(15,23,42,0.3)] ${
                index === 0 || index === 4 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <img
                src={src}
                alt={`Gallery floral inspiration ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
