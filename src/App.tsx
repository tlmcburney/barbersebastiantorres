import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import VideoShowcase from './components/VideoShowcase'
import InstagramFeed from './components/InstagramFeed'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Services from './components/Services'
import ServiceGallery from './components/ServiceGallery'
import ServiceModal from './components/ServiceModal'
import GoogleReviewsBadge from './components/GoogleReviewsBadge'
import FAQ from './components/FAQ'
import BookingSection from './components/BookingSection'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import FloatingBookButton from './components/FloatingBookButton'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'
import { ServiceStyle } from './lib/supabase'

function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const [selectedStyle, setSelectedStyle] = useState<ServiceStyle | null>(null)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-on-scroll')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="bg-black text-white">
      <ScrollProgress />
      <Header />
      <Hero />
      {/* TEMPORARILY HIDDEN - About section now in Hero split-screen */}
      {/* <About /> */}
      <GoogleReviewsBadge />
      <Services onStyleClick={setSelectedStyle} />
      <ServiceGallery onCategoryClick={setSelectedCategory} />
      <Testimonials />
      <Gallery onImageClick={openLightbox} />
      <VideoShowcase />
      <InstagramFeed />
      <BookingSection />
      <FAQ />
      <Footer />

      <FloatingBookButton />
      <BackToTop />

      {lightboxOpen && (
        <Lightbox
          startIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {selectedCategory && (
        <ServiceModal
          style={null}
          onClose={() => setSelectedCategory(null)}
        />
      )}

      {selectedStyle && (
        <ServiceModal
          style={selectedStyle}
          onClose={() => setSelectedStyle(null)}
        />
      )}
    </div>
  )
}

export default App;
