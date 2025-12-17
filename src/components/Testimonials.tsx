import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react'

const GOOGLE_REVIEW_COUNT = 70
const GOOGLE_RATING = 4.9
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Barber+Sebastian+Torres+West+Hollywood'

interface Testimonial {
  name: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Marcus J.',
    text: 'Sebastian doesn\'t just cut hair—he transforms how you see yourself. I walked out feeling like a completely different person. Sharp, confident, ready for anything.',
    rating: 5
  },
  {
    name: 'David R.',
    text: 'Best barber in West Hollywood, hands down. The attention to detail is unmatched. Every line is perfect. I won\'t go anywhere else.',
    rating: 5
  },
  {
    name: 'James K.',
    text: 'The hot lather shave was an experience. It\'s not just grooming—it\'s self-care. Sebastian makes you feel like you\'re worth the investment.',
    rating: 5
  },
  {
    name: 'Alex M.',
    text: 'I\'ve been going to Sebastian for two years now. Consistent quality, great conversation, and I always leave looking my absolute best.',
    rating: 5
  },
  {
    name: 'Ryan T.',
    text: 'Finally found a barber who gets it. Modern style, classic technique. Sebastian is the real deal.',
    rating: 5
  }
]

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="reviews" className="py-24 px-4 bg-zinc-950 fade-on-scroll opacity-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title mb-8 text-gold">Reviews</h2>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 bg-black border-2 border-gold/30 rounded-lg px-8 py-6 mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-8 h-8 fill-gold text-gold" />
              <span className="text-4xl md:text-5xl font-bold text-gold">{GOOGLE_RATING}</span>
            </div>
            <div className="h-12 w-px bg-gold/30"></div>
            <div className="text-left">
              <p className="text-2xl md:text-3xl font-bold text-white">{GOOGLE_REVIEW_COUNT} Reviews</p>
              <p className="text-sm text-gray-400">on Google</p>
            </div>
          </div>

          <button
            onClick={() => window.open(GOOGLE_REVIEWS_URL, '_blank')}
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-lg font-semibold"
          >
            See All Google Reviews
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center text-gray-300 text-lg mb-12">
          What clients are saying:
        </p>

        <div className="relative">
          {/* Testimonial card */}
          <div className="bg-black border-2 border-gold/30 rounded-lg p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-white text-center mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <p className="text-gold text-center font-semibold text-xl">
              — {testimonials[currentIndex].name}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-zinc-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            Experience the transformation yourself
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

export default Testimonials
