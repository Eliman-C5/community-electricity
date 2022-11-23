import React from 'react'

export const AboutSectionCard = ({title, text, btn, src}) => {
  return (
    <div className='w-full flex items-center max-w-[1135px] mr-auto h-[470px] bg-[#F2F2F2]'>
      <div className="w-1/2 p-8 flex flex-col gap-6">
        <h2 className='title text-black'>{title}</h2>
        <p className='text-black'>{text}</p>
        <span className='text-black font-semibold'>{btn}</span>
      </div>
      <div className="w-1/2">
        <img src={src} alt="slide in about section" className='ml-auto'/>
      </div>
    </div>
  )
}
