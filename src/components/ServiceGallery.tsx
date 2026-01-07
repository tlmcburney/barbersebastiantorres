import React from 'react'
import { Scissors, Sparkles, Square, TrendingDown, Grip, User } from 'lucide-react'

interface CategoryTile {
  title: string
  description: string
  icon: React.ReactNode
}

interface ServiceGalleryProps {
  onCategoryClick: (category: CategoryTile) => void
}

const categories: CategoryTile[] = [
  {
    title: 'SKIN FADES (High/Mid/Low)',
    description: 'Dramatic contrast between longer top and skin-level sides. Choose your fade height: high (near crown), mid (temple level), or low (above ear).',
    icon: <Scissors className="w-12 h-12" />
  },
  {
    title: 'SHADOW FADES',
    description: 'Subtle shadow effect using clipper guards (0.5-2) rather than complete skin. Creates five o\'clock shadow appearance on sides.',
    icon: <Sparkles className="w-12 h-12" />
  },
  {
    title: 'TAPERS & DETAILS',
    description: 'Precision sideburn work and clean lineup details. Perfect for professional looks requiring subtle sophistication.',
    icon: <Square className="w-12 h-12" />
  },
  {
    title: 'DROP FADES',
    description: 'Modern technique creating rounded head profile. Fade drops from temple to mid-ear, adding dimension and shape.',
    icon: <TrendingDown className="w-12 h-12" />
  },
  {
    title: 'BEARD SCULPTING',
    description: 'From subtle shadow to full sculpted beards. Line-ups, shaping, and hot towel finishing.',
    icon: <Grip className="w-12 h-12" />
  },
  {
    title: 'CLASSIC CUTS & BUZZ',
    description: 'Timeless gentleman\'s cuts and clean buzz cuts for clients embracing simplicity.',
    icon: <User className="w-12 h-12" />
  }
]

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ onCategoryClick }) => {
  return (
    <section id="service-gallery" className="py-24 px-4 bg-black fade-on-scroll">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-4 text-gold">Explore Different Styles</h2>

        <p className="text-center text-gray-300 text-xl mb-12">
          Understanding your options
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => onCategoryClick(category)}
            >
              <div className="relative overflow-hidden rounded-lg border-2 border-zinc-800 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 bg-black h-[300px] flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-gold mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {category.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6">
            Not sure which style is right for you?
          </p>
          <button
            onClick={() => window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')}
            className="btn-primary px-10 py-4 text-lg"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServiceGallery
