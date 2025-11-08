import React from 'react'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10 pt-20">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 tracking-wide text-white">
          Barber Sebastian Torres
        </h1>

        <p className="text-3xl md:text-5xl lg:text-6xl mb-12 text-gold font-light tracking-wider">
          LA Barber Shop
        </p>

        <button
          onClick={() => window.open('INSERT_GHL_CALENDAR_LINK_HERE', '_blank')}
          className="btn-primary text-lg px-12 py-4 mb-6"
        >
          Book Your Appointment
        </button>

        <p className="text-3xl md:text-5xl lg:text-6xl text-gold font-semibold tracking-wide">
          My Cuts Breed Confidence
        </p>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold" />
        </div>
      </div>
    </section>
  )
}

export default Hero
