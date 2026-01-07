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
        preload="metadata"
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/ARREGLOS.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30 z-[1]"></div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-black z-[2] md:hidden"></div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10 pt-20">
        <div className="flex flex-col items-center">
          <p
            className="text-2xl md:text-3xl lg:text-4xl mb-4 text-white tracking-widest"
            style={{
              fontFamily: '"Cinzel", serif',
              fontWeight: 400,
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            The official website of
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl text-white"
            style={{
              fontFamily: '"Allura", cursive',
              fontWeight: 400,
              textShadow: '3px 3px 6px rgba(0,0,0,0.9)'
            }}
          >
            Barber Sebastian Torres
          </h1>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="w-8 h-8 text-gold" />
        </div>
      </div>
    </section>
  )
}

export default Hero
