import React from 'react'

export const CommunityGif = ({style, width = 'max-w-[1135px]'}) => {
  return (
    <div className={`my-[40px] md:my-[80px] ${style}`}>
      <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1671112467/Community/community-gif_ngzyfg.mp4" autoPlay muted loop playsInline className={`w-full bg-cover ${width} mx-auto`} />
    </div>
  )
}
