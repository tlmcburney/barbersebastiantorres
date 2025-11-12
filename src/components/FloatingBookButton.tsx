import React, { useState, useEffect } from 'react'
import { Calendar } from 'lucide-react'

const FloatingBookButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBooking = () => {
    window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')
  }

  return (
    <button
      onClick={handleBooking}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-gold text-black font-bold px-6 py-4 rounded-full shadow-2xl hover:bg-white transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Book appointment"
    >
      <Calendar className="w-5 h-5" />
      <span className="hidden sm:inline">Book Now</span>
    </button>
  )
}

export default FloatingBookButton
