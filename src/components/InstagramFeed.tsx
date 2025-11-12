import React from 'react'
import { Instagram, ExternalLink } from 'lucide-react'

const InstagramFeed: React.FC = () => {
  const instagramHandle = 'thetorresbarbershop'
  const instagramUrl = `https://www.instagram.com/${instagramHandle}/`

  const instagramPosts = [
    '/images/F8735A20-DD0A-412D-BAB5-F43F333784F8.jpeg',
    '/images/68B6D779-3A85-4156-8FA0-9E20E9F21FF5_4_5005_c.jpeg',
    '/images/7BD988CF-55D5-4704-8F4D-3B25B791A79F.png',
    '/images/89A47E19-EC82-4BFB-A151-CECB175683C1.png',
    '/images/E53C2E5E-BEAD-4824-8ECF-7DBA7E2A3927.png',
    '/images/1181254A-2AD7-45E1-B468-1734239BAD12_4_5005_c.jpeg'
  ]

  return (
    <section className="py-24 px-4 bg-black fade-on-scroll opacity-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-gold" />
            <h2 className="text-4xl font-bold text-gold">Follow The Journey</h2>
          </div>

          <p className="text-gray-300 text-lg mb-6">
            Daily transformations, grooming tips, and behind-the-scenes content
          </p>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            <Instagram className="w-5 h-5" />
            @{instagramHandle}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((image, index) => (
            <a
              key={index}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg border-2 border-zinc-800 hover:border-gold transition-all duration-300"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Stay updated with the latest cuts, styles, and grooming tips
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            View Full Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed
