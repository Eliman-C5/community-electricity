import React from 'react'
import { useState } from 'react'

export const GifToggle = ({spanishIsActive, style}) => {

  const [isGifActive, setIsGifActive] = useState(true)

  return (
    <div className={`${style}`}>
      <img 
        className='w-full max-h-[810px] mt-[40px] md:mt-[80px]'
        src={
          isGifActive ?
          "https://res.cloudinary.com/datsipxkz/image/upload/v1669952723/Community/glu-community-min_rfwktf.gif":
          "/images/gif-image.png"
        } 
        alt="Header gif"
      />
      <div className="flex justify-center gap-4 mt-[40px]">
        <img 
          src="/images/watch.svg" 
          className='w-fit h-fit cursor-pointer' 
          alt="Play-button-gif" 
          onClick={() => setIsGifActive(!isGifActive)}
        />
        <p className='font-bold flex items-center'>
          {
            spanishIsActive ?
            'Mirar video' :
            'Watch video'
          }
        </p>
      </div>
    </div>
  )
}
