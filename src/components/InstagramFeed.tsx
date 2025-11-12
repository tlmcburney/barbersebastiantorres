import React, { useState, useEffect } from 'react'
import { Instagram, ExternalLink } from 'lucide-react'
import { supabase } from '../lib/supabase'

interface InstagramPost {
  id: string
  image_url: string
  post_order: number
}

const InstagramFeed: React.FC = () => {
  const instagramHandle = 'barbersebastiantorres'
  const instagramUrl = `https://www.instagram.com/${instagramHandle}/`
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadInstagramPosts()
  }, [])

  const loadInstagramPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('instagram_posts')
        .select('*')
        .order('post_order')
        .limit(6)

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error('Error loading Instagram posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const fallbackImages = [
    '/images/1181254A-2AD7-45E1-B468-1734239BAD12_4_5005_c.jpeg',
    '/images/68B6D779-3A85-4156-8FA0-9E20E9F21FF5_4_5005_c.jpeg',
    '/images/F8735A20-DD0A-412D-BAB5-F43F333784F8.jpeg',
    '/images/D266C471-DA6C-4442-A194-F905DB37EB0A.jpeg',
    '/images/15CCF54C-B40E-472C-84E0-5508CBDAAFDC.png',
    '/images/25295758-CF93-432E-BB31-66FE5B44C743.png'
  ]

  const displayImages = posts.length > 0
    ? posts.map(post => post.image_url)
    : fallbackImages

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

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {displayImages.map((image, index) => (
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

            {posts.length === 0 && (
              <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">
                  Note: Using placeholder images. Upload custom images through the Admin Dashboard.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default InstagramFeed
