import React from 'react'
import { Mail, Phone, MapPin, MessageSquare, Navigation } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-4 border-t-2 border-gold/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mx-auto mb-3">
            <span className="text-black font-bold text-xl">ST</span>
          </div>
          <h2 className="text-2xl font-serif text-white mb-2">Barber Sebastian Torres</h2>
          <p className="text-sm text-gold tracking-wide mb-2">LA Barber Shop</p>
          <div className="text-lg font-semibold text-gold tracking-wider">
            <div>MY CUTS BOOST YOUR</div>
            <div>[KON-FI-DUHNS]</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6 text-gold">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <a
                href="tel:4244845684"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span>(424) 484-5684</span>
              </a>
              <a
                href="sms:4244845684"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-gold transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-gold" />
                <span>Text: (424) 484-5684</span>
              </a>
              <a
                href="mailto:sebastiantorres92@yahoo.com"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5 text-gold" />
                <span>sebastiantorres92@yahoo.com</span>
              </a>
              <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span>8000 Sunset Blvd B200 Suite 4<br />Los Angeles, CA 90046</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6 text-gold">Hours of Operation</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between max-w-xs mx-auto">
                <span className="font-semibold text-white">Tuesday - Friday</span>
                <span className="text-gold">10am - 7pm</span>
              </div>
              <div className="flex justify-between max-w-xs mx-auto">
                <span className="font-semibold text-white">Saturday</span>
                <span className="text-gold">9am - 5pm</span>
              </div>
              <div className="flex justify-between max-w-xs mx-auto">
                <span className="font-semibold text-white">Sunday - Monday</span>
                <span className="text-gray-500">Closed</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6 text-gold">Location</h4>
            <div className="space-y-4">
              <div className="bg-zinc-900 border-2 border-gold/30 rounded-lg p-6">
                <div className="flex items-start gap-3 text-gray-300 mb-4">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Visit Our Shop</p>
                    <p>8000 Sunset Blvd B200 Suite 4</p>
                    <p>Los Angeles, CA 90046</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Located in the heart of West Hollywood with convenient parking
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=8000+Sunset+Blvd+B200+Suite+4+Los+Angeles+CA+90046"
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

        <div className="border-t border-gold/30 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Barber Sebastian Torres. All rights reserved.
          </p>
          <p className="text-center text-gold text-xs mt-2">
            Premium Men's Grooming | West Hollywood, CA
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
