import React from 'react'

export const MediaCard = ({src, alt}) => {
  return (
    <div className='bg-white w-[120px] h-[79px] min-[400px]:w-[150px] min-[400px]:h-[90px] md:w-[311px] md:h-[173px] flex items-center'>
      <img src={src} alt={alt} />
    </div>
  )
}
