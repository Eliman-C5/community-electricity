import React from 'react'
import FadeInSection from '../Wrappers/FadeInSection'
import { LearnMoreBtn } from './LearnMoreBtn'

export const AboutSectionCard = ({title, text, src, style = 'h-full'}) => {
  return (
    <FadeInSection className={`${style} about-section-card md:gap-0 md:flex-row lg:mb-0 md:h-[470px]`}>
        <div className="section-card-text md:w-1/2 md:h-full md:px-8 md:pt-0 md:gap-4">
          <h2 className='title-mobile md:title text-black'>{title}</h2>
          <p className='text-black '>{text}</p>
          <LearnMoreBtn link={'/programs'} newStyles='text-black' path={false} />
        </div>
        <div className={`flex items-center justify-center md:w-1/2 md:h-full order-1 w-full mb-auto`}>
          <img src={src} alt="slide in about section" className={`h-full md:ml-auto object-cover`}/>
        </div>
    </FadeInSection>
  )
}
