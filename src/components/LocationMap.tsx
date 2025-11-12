import React from 'react'
import { MapPin } from 'lucide-react'

const LocationMap: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-zinc-950 fade-on-scroll opacity-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-12 text-gold">Visit Us</h2>

        <p className="text-center text-gray-300 text-lg mb-12">
          Located in the heart of West Hollywood. Easy parking and convenient access.
        </p>

        {/* Google Map Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gold mb-6 flex items-center gap-3">
            <MapPin className="w-6 h-6" />
            Find Us On The Map
          </h3>
          <div className="bg-black border-2 border-gold/30 rounded-lg overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.45397583746!2d-118.39932179999999!3d34.090033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf1a8a0d0c93%3A0x4e1f4a0c5f0a5e8e!2sWest%20Hollywood%2C%20CA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="West Hollywood Location"
            />
          </div>
        </div>

        {/* Book Appointment Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')}
            className="btn-primary py-4 px-8 text-lg"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  )
}

export default LocationMap
