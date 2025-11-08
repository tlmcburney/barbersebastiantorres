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
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Barber Sebastian Torres"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-gold rounded-lg -z-10"></div>
          </div>

          <div className="space-y-6">
            <p className="text-gold text-xl font-semibold tracking-wide uppercase">
              Master Barber • LA Based
            </p>

            <p className="text-white text-lg leading-relaxed">
              Walk into Sebastian's chair and walk out transformed. It's not just about the cut—it's about
              how you feel when you see yourself in the mirror. <span className="text-gold font-semibold">Confident. Sharp. Ready.</span>
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              In the heart of West Hollywood, Sebastian has built a reputation on one simple truth:
              precision grooming changes everything. Every fade is deliberate. Every line is intentional.
              Every client leaves feeling like the best version of themselves.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              With over a decade of experience perfecting his craft, Sebastian combines traditional barbering
              techniques with modern styling trends. His attention to detail and commitment to excellence
              has made him one of LA's most sought-after barbers.
            </p>

            <div className="pt-4">
              <p className="text-gold font-semibold text-2xl leading-relaxed">
                "This is where craft meets transformation. This is where you look as good as you feel."
              </p>
            </div>

            <button
              onClick={() => window.open('INSERT_GHL_CALENDAR_LINK_HERE', '_blank')}
              className="btn-primary mt-6"
            >
              Book With Sebastian
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
