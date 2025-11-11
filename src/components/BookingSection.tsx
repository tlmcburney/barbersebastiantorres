import React from 'react'
import { Calendar } from 'lucide-react'

const BookingSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black fade-on-scroll opacity-0">
      <div className="max-w-4xl mx-auto text-center">
        <div className="border-4 border-gold rounded-lg p-12 md:p-16 bg-gradient-to-b from-zinc-900/50 to-black">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold mb-8">
            <Calendar className="w-10 h-10 text-black" />
          </div>

          <h2 className="section-title mb-6 text-gold">Ready to Transform?</h2>

          <p className="text-2xl md:text-3xl text-white mb-4 leading-relaxed font-semibold">
            Step into the chair. Walk out with confidence.
          </p>

          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book your appointment with Sebastian and experience the difference that precision grooming makes.
            Your transformation starts here.
          </p>

          <button
            onClick={() => window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')}
            className="btn-primary text-xl px-16 py-6 transform hover:scale-105 transition-all duration-300"
          >
            Schedule Now
          </button>

          <div className="mt-8 pt-8 border-t border-gold/30">
            <p className="text-sm text-gold font-semibold">
              Located in West Hollywood, CA • Available by appointment only
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSection
