import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/images/7BD988CF-55D5-4704-8F4D-3B25B791A79F.png"
              alt="Barber Sebastian Torres Logo"
              className="h-28 md:h-36 w-auto object-contain"
            />

            <div className="flex flex-col">
              <p className="text-lg md:text-xl text-gold tracking-wide">
                Barber Sebastian Torres
              </p>
              <p className="text-lg md:text-xl text-gold tracking-wide">
                LA Barbershop
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            <button
              onClick={() => scrollToSection('about')}
              className="text-2xl md:text-3xl text-white hover:text-gold transition-colors"
            >
              Bio
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-2xl md:text-3xl text-white hover:text-gold transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-2xl md:text-3xl text-white hover:text-gold transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-2xl md:text-3xl text-white hover:text-gold transition-colors"
            >
              Services
            </button>
            {/* TODO: Replace with actual Booksy URL from Sebastian */}
            <button
              onClick={() => window.open('INSERT_BOOKSY_LINK_HERE', '_blank')}
              className="btn-primary py-4 px-10 text-xl"
            >
              Book Now
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gold"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-zinc-800 pt-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-xl text-white hover:text-gold transition-colors py-4"
            >
              Bio
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left text-xl text-white hover:text-gold transition-colors py-4"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-xl text-white hover:text-gold transition-colors py-4"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-xl text-white hover:text-gold transition-colors py-4"
            >
              Services
            </button>
            {/* TODO: Replace with actual Booksy URL from Sebastian */}
            <button
              onClick={() => window.open('INSERT_BOOKSY_LINK_HERE', '_blank')}
              className="btn-primary w-full py-5 text-xl"
            >
              Book Now
            </button>
          </nav>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
    </header>
  )
}

export default Header
