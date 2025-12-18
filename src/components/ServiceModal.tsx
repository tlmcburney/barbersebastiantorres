import React, { useEffect } from 'react'
import { X } from 'lucide-react'

// Define the structure matching the ServiceCategory from ServiceGallery
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

// Props for the ServiceModal component
interface ServiceModalProps {
  category: ServiceCategory | null
  onClose: () => void
}

const ServiceModal: React.FC<ServiceModalProps> = ({ category, onClose }) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'

    // Cleanup: remove event listener and restore body scroll
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  // Don't render if no category is selected
  if (!category) return null

  // Array of the three detail images
  const images = [category.image_1, category.image_2, category.image_3]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop overlay - clicking it closes the modal */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal content container */}
      <div className="relative bg-zinc-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto border-2 border-zinc-800 shadow-2xl">
        {/* Close button in top right corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-zinc-800 hover:bg-gold text-white hover:text-black transition-all duration-300 flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal header with title and description */}
        <div className="p-8 border-b border-zinc-800">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-3">
            {category.title}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Grid of 3 images */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-zinc-800 group"
              >
                <img
                  src={image}
                  alt={`${category.title} example ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Call to action button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')}
              className="btn-primary px-10 py-4 text-lg"
            >
              Book This Service
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceModal
