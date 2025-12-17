import React from 'react'

interface GalleryProps {
  onImageClick: (index: number) => void
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
                  decoding="async"
                  width="400"
                  height="400"
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

        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            Ready to get your transformation?
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

export default Gallery
