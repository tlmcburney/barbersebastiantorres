import React from 'react'

interface GalleryProps {
  onImageClick: (index: number) => void
}

// REPLACE: Add actual gallery images showcasing Sebastian's work
// Images should show: modern fades, classic gentleman's cuts, beard sculpting, hot shaves, before/afters
const galleryImages = [
  'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
]

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
  return (
    <section id="gallery" className="py-24 px-4 bg-black fade-on-scroll opacity-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-16 text-gold">The Work Speaks</h2>

        <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
          Every cut tells a story. Browse through transformations that showcase precision, style, and confidence.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item fade-on-scroll opacity-0 group cursor-pointer"
              onClick={() => onImageClick(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-zinc-800 group-hover:border-gold transition-colors duration-300">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl text-black font-bold">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
