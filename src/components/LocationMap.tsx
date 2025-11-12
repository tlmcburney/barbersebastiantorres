import React from 'react'
import { MapPin, Navigation, Phone, Clock } from 'lucide-react'

const LocationMap: React.FC = () => {
  const address = 'West Hollywood, CA'
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=West+Hollywood+CA'

  return (
    <section className="py-24 px-4 bg-zinc-950 fade-on-scroll opacity-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-8 text-gold">Visit Us</h2>

        <p className="text-center text-gray-300 text-lg mb-12">
          Located in the heart of West Hollywood. Easy parking and convenient access.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-black border-2 border-gold/30 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-gray-300 text-lg">{address}</p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:underline mt-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black border-2 border-gold/30 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-4">Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">Tuesday - Friday</span>
                      <span className="text-gold">10am - 7pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">Saturday</span>
                      <span className="text-gold">9am - 5pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">Sunday - Monday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black border-2 border-gold/30 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
                  <a
                    href="tel:3108827779"
                    className="text-gold text-lg hover:underline block mb-1"
                  >
                    (310) 882-7779
                  </a>
                  <a
                    href="mailto:sebastiantorres92@yahoo.com"
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    sebastiantorres92@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')}
              className="w-full btn-primary py-4 text-lg"
            >
              Book Your Appointment
            </button>
          </div>

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
      </div>
    </section>
  )
}

export default LocationMap
