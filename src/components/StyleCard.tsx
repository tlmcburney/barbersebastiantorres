import React from 'react'
import { ServiceStyle } from '../lib/supabase'

interface StyleCardProps {
  style: ServiceStyle
  onClick: () => void
}

const StyleCard: React.FC<StyleCardProps> = ({ style, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 w-full md:w-44 cursor-pointer group"
    >
      <div className="relative overflow-hidden rounded-lg border-2 border-zinc-800 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 bg-black">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={style.thumbnail_image_url}
            alt={style.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 text-center">
          <h4 className="text-sm font-semibold text-gold group-hover:text-yellow-400 transition-colors">
            {style.name}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default StyleCard
