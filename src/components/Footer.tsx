import React from 'react'
import { Instagram, Mail, Phone, MapPin, MessageSquare, Scissors } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-4 border-t-2 border-gold/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold mb-4">
            <Scissors className="w-8 h-8 text-black" />
          </div>
          <h3 className="font-serif text-3xl mb-2 text-gold">Barber Sebastian Torres</h3>
          <p className="text-white text-lg">LA Barber Shop</p>
          <p className="text-gold text-sm tracking-widest uppercase mt-2">My Cuts Breed Confidence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-6 text-gold">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <a
                href="tel:3105550123"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span>(310) 555-0123</span>
              </a>
              <a
                href="sms:3105550123"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-gold transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-gold" />
                <span>Text: (310) 555-0123</span>
              </a>
              <a
                href="mailto:hello@sebastiantorres.com"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5 text-gold" />
                <span>hello@sebastiantorres.com</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-gold" />
                <span>West Hollywood, CA</span>
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

          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-6 text-gold">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-6">
              <a
                href="https://instagram.com/sebastiantorres"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <button
              onClick={() => window.open('INSERT_GHL_CALENDAR_LINK_HERE', '_blank')}
              className="btn-primary w-full md:w-auto"
            >
              Book Appointment
            </button>
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
