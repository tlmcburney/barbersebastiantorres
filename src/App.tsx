import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import VideoShowcase from './components/VideoShowcase'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Services from './components/Services'
import BookingSection from './components/BookingSection'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import VideoUploader from './components/VideoUploader'

function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

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
      <Header />
      <Hero />
      <About />

      {/* TEMPORARY: Video Upload Section - Remove after uploading videos */}
      <section className="py-12 px-4 bg-zinc-900">
        <VideoUploader />
      </section>

      <VideoShowcase />
      <Testimonials />
      <Gallery onImageClick={openLightbox} />
      <Services />
      <BookingSection />
      <Footer />

      {lightboxOpen && (
        <Lightbox
          startIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  )
}

export default App;
