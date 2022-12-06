import React from 'react'

export const MediaCard = ({src, alt, style = ''}) => {
  return (
    <div className={`${style} bg-white m-2 md:w-[311px] md:h-[173px] flex items-center`}>
      <img src={src} alt={alt} />
    </div>
  )
}
