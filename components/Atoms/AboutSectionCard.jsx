import React from 'react'

export const AboutSectionCard = ({title, text, btn, src}) => {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row items-center max-w-[1135px] mr-auto h-full md:h-[470px] bg-[#F2F2F2]'>
      <div className="w-full md:w-1/2 px-[1.5rem] py-[1.5rem] md:py-[3rem] flex flex-col gap-4">
        <h2 className='title-mobile md:title text-black'>{title}</h2>
        <p className='text-black'>{text}</p>
        <span className='text-black font-semibold'>{btn}</span>
      </div>
      <div className="w-full h-[150px] md:w-1/2 md:h-full order-1">
        <img src={src} alt="slide in about section" className='h-full w-full md:ml-auto'/>
      </div>
    </div>
  )
}
