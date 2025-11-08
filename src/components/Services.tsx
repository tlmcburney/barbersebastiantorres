import React from 'react'
import { Scissors, Sparkles, Droplet, Star } from 'lucide-react'

interface Service {
  icon: React.ReactNode
  title: string
  price: string
  description: string
}

const services: Service[] = [
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Precision Haircuts',
    price: '$65',
    description: 'Modern fades, classic gentleman\'s cuts, and contemporary styles. Walk out feeling sharp, polished, and ready to turn heads.'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Beard Grooming',
    price: '$45',
    description: 'Expert sculpting and shaping that defines your jawline. Your beard, refined to perfection.'
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: 'Hot Lather Shaves',
    price: '$55',
    description: 'Traditional hot lather shave that\'s equal parts ritual and relaxation. Smooth, clean, sophisticated.'
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Signature Combos',
    price: '$85-100',
    description: 'The complete transformation. Haircut and beard grooming or hot shave. Leave looking and feeling unstoppable.'
  }
]

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 bg-zinc-950 fade-on-scroll opacity-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-16 text-gold">Services</h2>

        <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
          Premium grooming services tailored to elevate your style and confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black border-2 border-zinc-800 p-8 rounded-lg hover:border-gold transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border-2 border-gold text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-gold transition-colors">
                {service.title}
              </h3>

              <p className="text-3xl font-bold text-gold mb-4">
                {service.price}
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <button
                onClick={() => window.open('INSERT_GHL_CALENDAR_LINK_HERE', '_blank')}
                className="btn-secondary w-full"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
