import React from 'react'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/ARREGLOS.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30 z-[1]"></div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10 pt-20">
        <div className="mb-8">
          <p className="text-2xl md:text-3xl lg:text-4xl mb-4 text-white font-bold tracking-wider uppercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            The Official Barbershop of
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-bold tracking-wide" style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
            Barber Sebastian Torres
          </h1>
        </div>

        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white font-semibold tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          The Official Website of Barber Sebastian Torres
        </p>

        <button
          onClick={() => window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')}
          className="btn-primary text-lg px-12 py-4 mb-6"
        >
          Book Your Appointment
        </button>

        <p className="text-3xl md:text-5xl lg:text-6xl text-gold font-semibold tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
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
