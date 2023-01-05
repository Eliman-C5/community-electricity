import React from 'react'
import { MediaCard } from './MediaCard'

export const MediaRow = ({cards}) => {
  return (
    <div className="hidden sm:flex flex-wrap gap-4 my-[10px] justify-start sm:justify-center md:justify-start xl:justify-center">
        {
          cards.map( img => (
            <MediaCard src={img.src} alt={img.alt} key={img.id} text={img.text} pageLink={img.link} />
          ))
        }
    </div>
  )
}
