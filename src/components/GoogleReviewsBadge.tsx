import React from 'react'
import { Star, ExternalLink } from 'lucide-react'

const GOOGLE_REVIEW_COUNT = 70
const GOOGLE_RATING = 4.9
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Barber+Sebastian+Torres+West+Hollywood'

const GoogleReviewsBadge: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 bg-black border-2 border-gold/30 rounded-lg px-6 md:px-10 py-6 mb-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/CleanShot_2026-02-27_at_07.02.47.jpg"
              alt="Google"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          <div className="hidden md:block h-12 w-px bg-gold/30"></div>

          <div className="flex items-center gap-3">
            <Star className="w-8 h-8 md:w-10 md:h-10 fill-gold text-gold" />
            <span className="text-4xl md:text-5xl font-bold text-gold">{GOOGLE_RATING}</span>
          </div>

          <div className="hidden md:block h-12 w-px bg-gold/30"></div>

          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold text-white">{GOOGLE_REVIEW_COUNT} Reviews</p>
            <p className="text-sm text-gray-400">on Google</p>
          </div>
        </div>

        <button
          onClick={() => window.open(GOOGLE_REVIEWS_URL, '_blank')}
          className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-base md:text-lg font-semibold group"
        >
          See All Google Reviews
          <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  )
}

export default GoogleReviewsBadge
