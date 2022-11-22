import React from 'react'

export const MediaCard = ({src, alt}) => {
  return (
    <div className='bg-white w-[311px] h-[173px]'>
      <img src={src} alt={alt} />
    </div>
  )
}
