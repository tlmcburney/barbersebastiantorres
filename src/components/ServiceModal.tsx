import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { ServiceStyle } from '../lib/supabase'

interface ServiceModalProps {
  style: ServiceStyle | null
  onClose: () => void
}

const ServiceModal: React.FC<ServiceModalProps> = ({ style, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null)
        } else {
          onClose()
        }
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, selectedImage])

  if (!style) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-zinc-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto border-2 border-gold/30 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-zinc-800 hover:bg-gold text-white hover:text-black transition-all duration-300 flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 border-b border-zinc-800">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-2">
            {style.name}
          </h2>
          <p className="text-gray-400 text-sm">
            View examples and book this style
          </p>
        </div>

        <div className="p-8">
          {style.gallery_images.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {style.gallery_images.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="aspect-[3/4] overflow-hidden rounded-lg border-2 border-zinc-800 hover:border-gold transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedImage(imageUrl)}
                  >
                    <img
                      src={imageUrl}
                      alt={`${style.name} example ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')}
                  className="btn-primary px-10 py-4 text-lg"
                >
                  Book This Style
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg mb-8">
                Gallery images will be added soon
              </p>
              <button
                onClick={() => window.open('https://calendar.app.google/BEhtXqMUscVqVvF68', '_blank')}
                className="btn-primary px-10 py-4 text-lg"
              >
                Book This Style
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-zinc-800 hover:bg-gold text-white hover:text-black transition-all duration-300 flex items-center justify-center"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default ServiceModal
