import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getServiceOfferings, ServiceOffering, ServiceStyle } from '../lib/supabase'
import StyleCard from './StyleCard'

interface ServicesProps {
  onStyleClick: (style: ServiceStyle) => void
}

const Services: React.FC<ServicesProps> = ({ onStyleClick }) => {
  const [offerings, setOfferings] = useState<ServiceOffering[]>([])
  const [loading, setLoading] = useState(true)
  const scrollContainerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const fetchOfferings = async () => {
      const data = await getServiceOfferings()
      setOfferings(data)
      setLoading(false)
    }

    fetchOfferings()
  }, [])

  const scroll = (offeringId: string, direction: 'left' | 'right') => {
    const container = scrollContainerRefs.current[offeringId]
    if (!container) return

    const scrollAmount = 200
    const newScrollLeft = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    })
  }

  if (loading) {
    return (
      <section id="services" className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">Loading services...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-8 text-gold">Services</h2>

        <p className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
          Premium grooming services tailored to elevate your style and confidence.
        </p>

        <div className="space-y-12">
          {offerings.map((offering) => (
            <div
              key={offering.id}
              className="bg-zinc-950 border-2 border-zinc-800 rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/4 p-8 lg:p-10 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-800">
                  <h3 className="text-3xl font-bold text-gold mb-4">
                    {offering.title}
                  </h3>

                  <div className="mb-6">
                    <p className="text-4xl font-bold text-white mb-2">
                      ${offering.regular_price}
                    </p>
                    <p className="text-xl text-gold">
                      ${offering.member_price} <span className="text-sm text-gray-400">members*</span>
                    </p>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    {offering.description}
                  </p>

                  <button
                    onClick={() => window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')}
                    className="btn-primary w-full lg:w-auto"
                  >
                    Book Now
                  </button>
                </div>

                <div className="lg:w-3/4 p-6 lg:p-8 flex items-center">
                  <div className="relative w-full">
                    <button
                      onClick={() => scroll(offering.id, 'left')}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/80 border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 hidden lg:block"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div
                      ref={(el) => scrollContainerRefs.current[offering.id] = el}
                      className="flex flex-col md:flex-row gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gold/50 scrollbar-track-zinc-800 pb-2 px-8 lg:px-12"
                      style={{ scrollbarWidth: 'thin' }}
                    >
                      {offering.styles.map((style) => (
                        <StyleCard
                          key={style.id}
                          style={style}
                          onClick={() => onStyleClick(style)}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => scroll(offering.id, 'right')}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/80 border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 hidden lg:block"
                      aria-label="Scroll right"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-zinc-900/50 border-t-2 border-gold/30 rounded-lg text-center">
          <p className="text-gray-300 text-sm leading-relaxed max-w-4xl mx-auto">
            <span className="text-gold font-bold">*</span> Barber Sebastian Torres Confidence Guarantee - Join the{' '}
            <button
              onClick={() => window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')}
              className="text-gold hover:text-yellow-400 underline font-semibold transition-colors"
            >
              BST Members Club
            </button>
            {' '}to receive member only rates for your services
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
