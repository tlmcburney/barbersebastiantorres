import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-black fade-on-scroll opacity-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-8 text-gold">Meet Sebastian Torres</h2>

        <div className="text-center mb-20 flex flex-col items-center leading-none">
          <h3 className="text-white font-serif font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            My Cuts Boost
          </h3>
          <h3 className="text-gold font-serif font-bold text-3xl md:text-5xl lg:text-6xl uppercase tracking-wider mb-16" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Your
          </h3>
          <h3 className="text-white font-serif font-semibold text-3xl md:text-5xl lg:text-6xl uppercase tracking-wide mb-2" style={{ textShadow: '0 0 1px #D4AF37, 0 0 1px #D4AF37, 1px 0 0 #D4AF37, -1px 0 0 #D4AF37, 0 1px 0 #D4AF37, 0 -1px 0 #D4AF37, 1px 1px 0 #D4AF37, -1px -1px 0 #D4AF37, 1px -1px 0 #D4AF37, -1px 1px 0 #D4AF37, 1.5px 0 0 #D4AF37, -1.5px 0 0 #D4AF37, 0 1.5px 0 #D4AF37, 0 -1.5px 0 #D4AF37, 1.5px 1.5px 0 #D4AF37, -1.5px -1.5px 0 #D4AF37, 1.5px -1.5px 0 #D4AF37, -1.5px 1.5px 0 #D4AF37, 2px 0 0 #D4AF37, -2px 0 0 #D4AF37, 0 2px 0 #D4AF37, 0 -2px 0 #D4AF37, 2px 2px 0 #D4AF37, -2px -2px 0 #D4AF37, 2px -2px 0 #D4AF37, -2px 2px 0 #D4AF37' }}>
            [KON-FI-DUHNS]
          </h3>
          <p className="text-base md:text-lg text-white font-bold uppercase mb-16">CONFIDENCE</p>
          <p className="text-base md:text-lg text-white text-opacity-90 font-medium tracking-wide" style={{ fontFamily: '"Cinzel", serif' }}>Master Barber - LA Based</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
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

          <div className="space-y-6">
            <p className="text-white text-lg leading-relaxed font-sans">
              I'm in the business of [KON-FI-DUHNS]. Based in West Hollywood, I've built a studio where passion for grooming meets the high-energy pulse of the street. For me, it's not just about the clippers; it's about the integrity behind the craft. I pride myself on providing a professional, 5-star experience that bridges the gap between classic technique and modern urban style.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed font-sans">
              From razor-sharp fades and textured cuts to the ritual of a classic hot towel shave, every service is a commitment to your image. Whether we're sculpting a well-defined beard or hitting a precision line-up, the goal remains the same: <span className="text-white font-semibold">Value</span>. What separates me from the rest isn't just the skill—it's the elevation you feel the second you step out of my chair.
            </p>

            {/* TODO: Replace with actual Booksy URL from Sebastian */}
            <div className="text-center">
              <button
                onClick={() => window.open('INSERT_BOOKSY_LINK_HERE', '_blank')}
                className="btn-primary mt-6"
              >
                Book With Sebastian
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
