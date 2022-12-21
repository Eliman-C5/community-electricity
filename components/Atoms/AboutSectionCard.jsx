import React from 'react'
import FadeInSection from '../Wrappers/FadeInSection'
import { LearnMoreBtn } from './LearnMoreBtn'

export const AboutSectionCard = ({title, text, src, style = 'h-full', imgStyle = 'w-full'}) => {
  return (
    <FadeInSection className={`${style} flex flex-col-reverse md:flex-row items-center mb-[45px] lg:mb-0 pb-6 md:pb-0 max-w-[1135px] mx-auto h-[635px] md:h-[470px] bg-[#F2F2F2]`}>
        <div className="h-3/5 md:w-1/2 md:h-full px-3 md:px-8 py-4 md:pt-0 flex flex-col justify-center gap-4">
          <h2 className='title-mobile md:title text-black'>{title}</h2>
          <p className='text-black '>{text}</p>
          <LearnMoreBtn link={'/programs'} newStyles='text-black' path={false} />
        </div>
        <div className="flex items-center justify-center md:w-1/2 md:h-full order-1">
          <img src={src} alt="slide in about section" className={`h-full ${imgStyle} md:ml-auto object-cover`}/>
        </div>
    </FadeInSection>
  )
}
