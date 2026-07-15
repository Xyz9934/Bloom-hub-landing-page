import { lazy, Suspense, useEffect, useState } from 'react'
import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'
import AboutSection from '../../components/sections/AboutSection'
import BouquetsSection from '../../components/sections/BouquetsSection'
import ContactSection from '../../components/sections/ContactSection'
import GallerySection from '../../components/sections/GallerySection'
import HeroSection from '../../components/sections/HeroSection'
import WhyChooseUsSection from '../../components/sections/WhyChooseUsSection'
import FullscreenLoader from '../../components/ui/FullscreenLoader'
import { useSeo } from '../../hooks/useSeo'

const EnquiryModal = lazy(() => import('../../components/enquiry/EnquiryModal'))

export default function LandingPage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  useSeo()
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <main className="bg-white text-stone-900">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Navbar onOrderNowClick={() => setIsEnquiryOpen(true)} />
      <HeroSection onOrderNowClick={() => setIsEnquiryOpen(true)} />
      <BouquetsSection />
      <AboutSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <Suspense fallback={<FullscreenLoader />}>
        <EnquiryModal open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
      </Suspense>
    </main>
  )
}
