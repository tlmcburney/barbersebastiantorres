import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { ChevronRight } from 'lucide-react'

// Define the structure of a service category
interface ServiceCategory {
  id: string
  title: string
  description: string
  cover_image: string
  image_1: string
  image_2: string
  image_3: string
  display_order: number
}

// Props for the ServiceGallery component
interface ServiceGalleryProps {
  onCategoryClick: (category: ServiceCategory) => void
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ onCategoryClick }) => {
  // State to store service categories fetched from database
  const [categories, setCategories] = useState<ServiceCategory[]>([])
  // State to track loading status
  const [loading, setLoading] = useState(true)

  // Fetch service categories from Supabase when component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from('service_categories')
          .select('*')
          .order('display_order', { ascending: true })

        if (error) {
          console.error('Error fetching service categories:', error)
          return
        }

        if (data) {
          setCategories(data)
        }
      } catch (err) {
        console.error('Error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  // Show loading state while fetching data
  if (loading) {
    return (
      <section className="py-24 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-16 text-gold">View the Work</h2>
          <div className="text-center text-gray-400">Loading services...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="service-gallery" className="py-24 px-4 bg-zinc-900 fade-on-scroll opacity-0">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="section-title mb-16 text-gold">View the Work</h2>

        {/* Introduction text */}
        <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
          Explore our signature services. Each style represents precision craftsmanship and attention to detail.
        </p>

        {/* Grid of service category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group cursor-pointer fade-on-scroll opacity-0"
              onClick={() => onCategoryClick(category)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category tile card */}
              <div className="relative overflow-hidden rounded-lg border-2 border-zinc-800 group-hover:border-gold transition-all duration-300 bg-black">
                {/* Cover image container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.cover_image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* View icon that appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </div>

                {/* Category title and description */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {category.description}
                  </p>

                  {/* "View Examples" call to action */}
                  <div className="flex items-center mt-4 text-gray-500 group-hover:text-gold transition-colors duration-300">
                    <span className="text-sm font-medium">View Examples</span>
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action at bottom of section */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6">
            Ready to get your own custom look?
          </p>
          <button
            onClick={() => window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')}
            className="btn-primary px-10 py-4 text-lg"
          >
            Book With Sebastian
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServiceGallery
