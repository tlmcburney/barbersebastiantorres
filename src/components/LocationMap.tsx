import React from 'react'
import { MapPin, Navigation, Phone, Clock, Mail } from 'lucide-react'

const LocationMap: React.FC = () => {
  const address = 'West Hollywood, CA'
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=West+Hollywood+CA'

  return (
    <section className="py-24 px-4 bg-zinc-950 fade-on-scroll opacity-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-12 text-gold">Visit Us</h2>

        <p className="text-center text-gray-300 text-lg mb-12">
          Located in the heart of West Hollywood. Easy parking and convenient access.
        </p>

        {/* Three-Column Layout for Contact, Hours, and Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Contact Column */}
          <div className="bg-black border-2 border-gold/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-2xl font-semibold text-gold">Contact</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Phone</p>
                <a
                  href="tel:3108827779"
                  className="text-white text-lg hover:text-gold transition-colors block"
                >
                  (310) 882-7779
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a
                  href="mailto:sebastiantorres92@yahoo.com"
                  className="text-white hover:text-gold transition-colors break-all"
                >
                  sebastiantorres92@yahoo.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="tel:3108827779"
                  className="btn-secondary inline-block w-full text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Hours of Operation Column */}
          <div className="bg-black border-2 border-gold/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-2xl font-semibold text-gold">Hours of Operation</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Tuesday - Friday</span>
                <span className="text-white font-semibold">10am - 7pm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Saturday</span>
                <span className="text-white font-semibold">9am - 5pm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Sunday - Monday</span>
                <span className="text-gray-500">Closed</span>
              </div>
            </div>
          </div>

          {/* Location Column */}
          <div className="bg-black border-2 border-gold/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-2xl font-semibold text-gold">Location</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-2">Address</p>
                <p className="text-white text-lg">{address}</p>
              </div>
              <div className="pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 w-full"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

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
