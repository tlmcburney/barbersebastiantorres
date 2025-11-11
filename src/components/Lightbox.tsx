import React, { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
  startIndex: number
  onClose: () => void
}

const galleryImages = [
  '/images/F8735A20-DD0A-412D-BAB5-F43F333784F8.jpeg',
  '/images/68B6D779-3A85-4156-8FA0-9E20E9F21FF5_4_5005_c.jpeg',
  '/images/7BD988CF-55D5-4704-8F4D-3B25B791A79F.png',
  '/images/89A47E19-EC82-4BFB-A151-CECB175683C1.png',
  '/images/E53C2E5E-BEAD-4824-8ECF-7DBA7E2A3927.png',
  '/images/1181254A-2AD7-45E1-B468-1734239BAD12_4_5005_c.jpeg',
  '/images/9375B635-EB1A-4E2C-8F0F-8C4D5EB10662.png',
  '/images/15CCF54C-B40E-472C-84E0-5508CBDAAFDC.png',
]

const Lightbox: React.FC<LightboxProps> = ({ startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex)

  // Navigate to previous image
  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  // Navigate to next image
  const nextImage = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-900 hover:bg-gold hover:text-black transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous button */}
      <button
        onClick={prevImage}
        className="absolute left-4 z-10 p-3 rounded-full bg-zinc-900 hover:bg-gold hover:text-black transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={nextImage}
        className="absolute right-4 z-10 p-3 rounded-full bg-zinc-900 hover:bg-gold hover:text-black transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div className="max-w-7xl max-h-[90vh] mx-4">
        <img
          src={galleryImages[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gold">
        {currentIndex + 1} / {galleryImages.length}
      </div>
    </div>
  )
}

export default Lightbox
