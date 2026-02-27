import React from 'react'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-black pt-40 md:pt-44">
      {/* SPLIT SCREEN LAYOUT - Video Left, Bio Right */}
      <div className="flex flex-col md:flex-row">
        {/* LEFT SIDE - Video (50% width on desktop, full on mobile top) */}
        <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen overflow-hidden">
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

          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10 py-12">
            <div className="flex flex-col items-center">
              <div
                className="text-lg md:text-2xl lg:text-3xl mb-4 text-white tracking-wider"
                style={{
                  fontFamily: '"Cinzel", serif',
                  fontWeight: 600,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                }}
              >
                The official website of
              </div>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl text-white"
                style={{
                  fontFamily: '"Allura", cursive',
                  fontWeight: 400,
                  textShadow: '3px 3px 6px rgba(0,0,0,0.9)'
                }}
              >
                Barber Sebastian Torres
              </h1>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Meet Sebastian Bio (50% width on desktop, full on mobile bottom) */}
        <div className="relative w-full md:w-1/2 bg-black">
          <div className="flex items-start px-6 md:px-8 lg:px-12 py-8 md:py-12">
            <div className="space-y-6 w-full">
              {/* Bio Content */}
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold" style={{ fontFamily: '"Cinzel", serif' }}>
                  Meet Sebastian Torres
                </h2>

                <p className="text-white text-base md:text-lg leading-relaxed">
                  I'm in the business of [KON-FI-DUHNS]. Based in West Hollywood, I've built a studio where passion for grooming meets the high-energy pulse of the street. For me, it's not just about the clippers; it's about the integrity behind the craft. I pride myself on providing a professional, 5-star experience that bridges the gap between classic technique and modern urban style.
                </p>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  From razor-sharp fades and textured cuts to the ritual of a classic hot towel shave, every service is a commitment to your image. Whether we're sculpting a well-defined beard or hitting a precision line-up, the goal remains the same: <span className="text-white font-semibold">Value</span>. What separates me from the rest isn't just the skill—it's the elevation you feel the second you step out of my chair.
                </p>

                <div className="pt-4 text-center flex flex-col items-center leading-none">
                  <h3 className="text-white font-serif font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-wider -mb-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                    My Cuts Boost
                  </h3>
                  <h3 className="text-gold font-serif font-bold text-2xl md:text-4xl lg:text-5xl uppercase tracking-wider -mb-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                    Your
                  </h3>
                  <h3 className="text-white font-serif font-semibold text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide" style={{ textShadow: '0 0 1px #D4AF37, 0 0 1px #D4AF37, 1px 0 0 #D4AF37, -1px 0 0 #D4AF37, 0 1px 0 #D4AF37, 0 -1px 0 #D4AF37, 1px 1px 0 #D4AF37, -1px -1px 0 #D4AF37, 1px -1px 0 #D4AF37, -1px 1px 0 #D4AF37, 1.5px 0 0 #D4AF37, -1.5px 0 0 #D4AF37, 0 1.5px 0 #D4AF37, 0 -1.5px 0 #D4AF37, 1.5px 1.5px 0 #D4AF37, -1.5px -1.5px 0 #D4AF37, 1.5px -1.5px 0 #D4AF37, -1.5px 1.5px 0 #D4AF37, 2px 0 0 #D4AF37, -2px 0 0 #D4AF37, 0 2px 0 #D4AF37, 0 -2px 0 #D4AF37, 2px 2px 0 #D4AF37, -2px -2px 0 #D4AF37, 2px -2px 0 #D4AF37, -2px 2px 0 #D4AF37' }}>
                    [KON-FI-DUHNS]
                  </h3>
                  <p className="text-sm md:text-base text-white text-opacity-70 font-light italic mt-2">confidence</p>
                  <p className="text-base md:text-lg text-white text-opacity-90 font-medium tracking-wide">Master Barber - LA Based</p>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => window.open('INSERT_BOOKSY_LINK_HERE', '_blank')}
                    className="btn-primary mt-4"
                  >
                    Book With Sebastian
                  </button>
                </div>
              </div>

              {/* Sebastian's Image - Below Text */}
              <div className="relative max-w-md mx-auto pb-8">
                <div className="aspect-[4/5] bg-zinc-900 rounded-lg overflow-hidden">
                  <img
                    src="/images/F8735A20-DD0A-412D-BAB5-F43F333784F8.jpeg"
                    alt="Barber Sebastian Torres"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    width="600"
                    height="750"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-gold rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden md:block">
        <ChevronDown className="w-8 h-8 text-gold" />
      </div>
    </section>
  )
}

export default Hero

/* ========================================
   ORIGINAL CODE - PRESERVED FOR REVERSION
   ========================================

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
          <div
            className="text-lg md:text-2xl lg:text-3xl mb-4 text-white tracking-wider"
            style={{
              fontFamily: '"Cinzel", serif',
              fontWeight: 600,
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            The official website of
          </div>
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

   ======================================== */
