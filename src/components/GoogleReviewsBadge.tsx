import React from 'react'
import { Star, ExternalLink } from 'lucide-react'

const GOOGLE_REVIEW_COUNT = 70
const GOOGLE_RATING = 4.9
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Barber+Sebastian+Torres+West+Hollywood'

const GoogleReviewsBadge: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex flex-col items-center justify-center gap-4 bg-black border-2 border-gold/30 rounded-lg px-6 md:px-10 py-6">
          <div className="flex items-center justify-center">
            <img
              src="/images/sq-google-g-logo-update_dezeen_2364_col_0.jpg"
              alt="Google Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-3">
            <Star className="w-8 h-8 md:w-10 md:h-10 fill-gold text-gold" />
            <span className="text-4xl md:text-5xl font-bold text-gold">{GOOGLE_RATING}</span>
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">{GOOGLE_REVIEW_COUNT} Reviews</p>
          </div>
        </div>

        <button
          onClick={() => window.open(GOOGLE_REVIEWS_URL, '_blank')}
          className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-base md:text-lg font-semibold group mt-6"
        >
          See All Google Reviews
          <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  )
}

export default GoogleReviewsBadge
