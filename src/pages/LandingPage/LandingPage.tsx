import { useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import HeroSection from '../../components/sections/HeroSection'
import BouquetsSection from '../../components/sections/BouquetsSection'
import AboutSection from '../../components/sections/AboutSection'
import WhyChooseUsSection from '../../components/sections/WhyChooseUsSection'
import GallerySection from '../../components/sections/GallerySection'
import ContactSection from '../../components/sections/ContactSection'
import EnquiryModal from '../../components/enquiry/EnquiryModal'

export default function LandingPage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

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
      <EnquiryModal open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </main>
  )
}
