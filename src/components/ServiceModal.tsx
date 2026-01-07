import React, { useEffect } from 'react'
import { X } from 'lucide-react'

interface CategoryTile {
  title: string
  description: string
  icon: React.ReactNode
}

interface ServiceModalProps {
  category: CategoryTile | null
  onClose: () => void
}

const ServiceModal: React.FC<ServiceModalProps> = ({ category, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!category) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-zinc-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-zinc-800 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-zinc-800 hover:bg-gold text-white hover:text-black transition-all duration-300 flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 border-b border-zinc-800">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-3">
            {category.title}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {category.description}
          </p>
        </div>

        <div className="p-8 text-center">
          <div className="py-16">
            <div className="text-gold mb-6 flex justify-center">
              {category.icon}
            </div>

            <p className="text-gray-300 text-xl mb-8">
              Gallery photos coming soon
            </p>

            <p className="text-gray-400 text-lg mb-8">
              Each category will showcase 3 examples
            </p>

            <button
              onClick={() => window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')}
              className="btn-primary px-10 py-4 text-lg"
            >
              Book This Style
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceModal
