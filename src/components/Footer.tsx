import React from 'react'
import { Mail, Phone, MapPin, MessageSquare, Scissors } from 'lucide-react'

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-6 text-gold">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <a
                href="tel:3108827779"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span>(310) 882-7779</span>
              </a>
              <a
                href="sms:3108827779"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-gold transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-gold" />
                <span>Text: (310) 882-7779</span>
              </a>
              <a
                href="mailto:sebastiantorres92@yahoo.com"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5 text-gold" />
                <span>sebastiantorres92@yahoo.com</span>
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

          <div className="bg-black border-2 border-gold/30 rounded-lg overflow-hidden h-[300px]">
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
