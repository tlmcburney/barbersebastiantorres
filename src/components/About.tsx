import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-black fade-on-scroll opacity-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-16 text-gold">Meet Sebastian Torres</h2>

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
            <p className="text-gold text-xl font-semibold tracking-wide uppercase">
              Master Barber • LA Based
            </p>

            <p className="text-white text-lg leading-relaxed">
              Sebastian Torres doesn't just cut hair—he engineers confidence. Every fade, every lineup, every hot towel shave is executed with precision that sets him apart in West Hollywood.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              His clients don't just walk out looking sharp. They walk out feeling different. That's what seven years of obsessive attention to detail gets you. While other barbers rush to fit in more appointments, Sebastian takes the time to understand your hair texture, face shape, and style goals. The result? Cuts that look incredible and stay looking incredible.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              From classic gentleman's cuts to modern fades, beard sculpting to traditional hot lather shaves, Sebastian's range matches his expertise. But what keeps clients coming back isn't just the technical skill—it's the experience. Professional, personalized, and built around making you feel at ease from the moment you sit down.
            </p>

            <div className="pt-4 text-center flex flex-col items-center gap-1">
              <h3 className="text-white font-serif font-bold text-lg md:text-2xl lg:text-3xl uppercase tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                My Cuts Boost
              </h3>
              <h3 className="text-gold font-serif font-bold text-2xl md:text-4xl lg:text-5xl uppercase tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Your
              </h3>
              <h3 className="text-white font-serif font-semibold text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide mt-1" style={{ textShadow: '0 0 1px #D4AF37, 0 0 1px #D4AF37, 1px 0 0 #D4AF37, -1px 0 0 #D4AF37, 0 1px 0 #D4AF37, 0 -1px 0 #D4AF37, 1px 1px 0 #D4AF37, -1px -1px 0 #D4AF37, 1px -1px 0 #D4AF37, -1px 1px 0 #D4AF37, 1.5px 0 0 #D4AF37, -1.5px 0 0 #D4AF37, 0 1.5px 0 #D4AF37, 0 -1.5px 0 #D4AF37, 1.5px 1.5px 0 #D4AF37, -1.5px -1.5px 0 #D4AF37, 1.5px -1.5px 0 #D4AF37, -1.5px 1.5px 0 #D4AF37, 2px 0 0 #D4AF37, -2px 0 0 #D4AF37, 0 2px 0 #D4AF37, 0 -2px 0 #D4AF37, 2px 2px 0 #D4AF37, -2px -2px 0 #D4AF37, 2px -2px 0 #D4AF37, -2px 2px 0 #D4AF37' }}>
                [KON-FI-DUHNS]
              </h3>
            </div>

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
