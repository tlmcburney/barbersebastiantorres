import React from 'react'
import { Play } from 'lucide-react'

const VideoShowcase: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black fade-on-scroll opacity-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12 text-gold">The Craft In Action</h2>

        <p className="text-center text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
          Watch Sebastian transform clients with precision cuts, expert fades, and meticulous attention to detail.
          This is mastery in motion.
        </p>

        <div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden shadow-2xl border-2 border-gold/20">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold/20 border-4 border-gold mb-6 hover:bg-gold hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Play className="w-10 h-10 text-gold group-hover:text-black ml-1" />
              </div>
              <p className="text-gold text-xl font-semibold">Sebastian Torres Showcase</p>
              <p className="text-sm text-gray-400 mt-3 max-w-md mx-auto">
                Add your video here: Showcase transformations, techniques, and the premium experience clients receive in your chair
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
