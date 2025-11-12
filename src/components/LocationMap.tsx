import React from 'react'
import { MapPin } from 'lucide-react'

const LocationMap: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-zinc-950 fade-on-scroll opacity-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-12 text-gold">Visit Us</h2>

        <div className="text-center mb-12">
          <div className="flex items-start justify-center gap-3 text-gray-300 text-lg mb-4">
            <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
            <div>
              <p>8000 Sunset Blvd B200 Suite 4</p>
              <p>Los Angeles, CA 90046</p>
            </div>
          </div>
          <p className="text-gray-300">
            Located in the heart of West Hollywood. Easy parking and convenient access.
          </p>
        </div>

        {/* Google Map Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gold mb-6 flex items-center justify-center gap-3">
            <MapPin className="w-6 h-6" />
            Find Us On The Map
          </h3>
          <div className="bg-black border-2 border-gold/30 rounded-lg overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8579654859815!2d-118.37450082346662!3d34.09757271711879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf3ec156d72f%3A0x8e1f5b1d1c1d1c1d!2s8000%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090046!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barber Sebastian Torres Location"
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
