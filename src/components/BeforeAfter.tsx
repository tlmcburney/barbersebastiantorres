import React, { useState, useRef, useEffect } from 'react'
import { GripVertical } from 'lucide-react'

interface BeforeAfterImage {
  before: string
  after: string
  title: string
}

const beforeAfterImages: BeforeAfterImage[] = [
  {
    before: '/images/BFB8A1C9-98FA-4B53-AE9F-B9EAFBF457F0.png',
    after: '/images/F8735A20-DD0A-412D-BAB5-F43F333784F8.jpeg',
    title: 'Precision Fade Transformation'
  },
  {
    before: '/images/D9AAA8C2-71B7-463F-9D9F-A2BC9D82EA32.png',
    after: '/images/68B6D779-3A85-4156-8FA0-9E20E9F21FF5_4_5005_c.jpeg',
    title: 'Classic Gentleman\'s Cut'
  }
]

interface SliderProps {
  beforeImage: string
  afterImage: string
  title: string
}

const BeforeAfterSlider: React.FC<SliderProps> = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState({ before: false, after: false })
  const [imageErrors, setImageErrors] = useState({ before: false, after: false })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleImageLoad = (type: 'before' | 'after') => {
    setImagesLoaded(prev => ({ ...prev, [type]: true }))
  }

  const handleImageError = (type: 'before' | 'after') => {
    setImageErrors(prev => ({ ...prev, [type]: true }))
    console.error(`Failed to load ${type} image:`, type === 'before' ? beforeImage : afterImage)
  }

  const allImagesLoaded = imagesLoaded.before && imagesLoaded.after

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100

    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  const handleStart = () => {
    setIsDragging(true)
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleEnd)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleEnd)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleEnd)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging])

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-center text-gold">{title}</h3>

      <div
        ref={containerRef}
        className="relative w-full aspect-[4/5] overflow-hidden rounded-lg cursor-ew-resize select-none border-4 border-gold/30 bg-zinc-900"
      >
        {!allImagesLoaded && !imageErrors.before && !imageErrors.after && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold mb-4"></div>
              <p className="text-gray-400 text-sm">Loading transformation...</p>
            </div>
          </div>
        )}

        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt="After"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${allImagesLoaded ? 'opacity-100' : 'opacity-0'}`}
            draggable={false}
            loading="eager"
            decoding="async"
            onLoad={() => handleImageLoad('after')}
            onError={() => handleImageError('after')}
          />
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Before"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${allImagesLoaded ? 'opacity-100' : 'opacity-0'}`}
            draggable={false}
            loading="eager"
            decoding="async"
            onLoad={() => handleImageLoad('before')}
            onError={() => handleImageError('before')}
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-gold cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-2xl">
            <GripVertical className="w-6 h-6 text-black" />
          </div>
        </div>

        <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-semibold border-2 border-gold/50">
          BEFORE
        </div>

        <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-semibold border-2 border-gold/50">
          AFTER
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm">
        Drag the slider to see the transformation
      </p>
    </div>
  )
}

const BeforeAfter: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black fade-on-scroll opacity-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-8 text-gold">Transformations</h2>

        <p className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
          See the difference precision and expertise make. Every cut is a transformation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {beforeAfterImages.map((image, index) => (
            <BeforeAfterSlider
              key={index}
              beforeImage={image.before}
              afterImage={image.after}
              title={image.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
