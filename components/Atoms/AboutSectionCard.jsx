import React from 'react'
import FadeInSection from '../Wrappers/FadeInSection'

export const AboutSectionCard = ({title, text, btn, src}) => {
  return (
    <FadeInSection className={`w-full flex flex-col-reverse md:flex-row items-center pb-6 md:pb-0 max-w-[1135px] mx-auto h-full md:h-[470px] bg-[#F2F2F2]`}>
        <div className="w-full h-1/2 md:w-1/2 md:h-full px-[2rem] pt-6 md:pt-0 flex flex-col justify-center gap-4">
          <h2 className='title-mobile md:title text-black'>{title}</h2>
          <p className='text-black '>{text}</p>
          <span className='text-black font-semibold'>{btn}</span>
        </div>
        <div className="w-full h-1/2 flex items-center justify-center md:w-1/2 md:h-full order-1">
          <img src={src} alt="slide in about section" className={`h-full md:ml-auto object-cover md:object-contain`}/>
        </div>
    </FadeInSection>
  )
}
