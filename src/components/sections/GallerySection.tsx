import { galleryItems } from '../../data/gallery'
import { siteContent } from '../../config/siteContent'
import FadeIn from '../ui/FadeIn'
import OptimizedImage from '../ui/OptimizedImage'
import SectionHeading from '../ui/SectionHeading'

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.galleryEyebrow}
          title={siteContent.galleryTitle}
          description={siteContent.galleryDescription}
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {galleryItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.05}>
              <div
                className={`group overflow-hidden rounded-3xl shadow-[0_20px_60px_-45px_rgba(15,23,42,0.3)] ${
                  item.featured ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <OptimizedImage
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
