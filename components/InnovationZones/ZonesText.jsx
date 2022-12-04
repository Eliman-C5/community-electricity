import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { zonesTexts } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'

export const ZonesText = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col md:flex-row justify-between max-w-[1135px] mx-auto">
          <div className="w-full md:w-1/2">
            <h4 className='title-mobile'>The starting point</h4>
            <img src="/images/zones/textTitle.png" alt="Zone text img" className='mb-6' />
            <p className='font-bold'>Our innovation zones are:</p>
            <ul className='list-disc mb-6'>
              {
                zonesTexts.map(item => (
                  <li key={item.id} className='ml-4'>
                    {item.text.eng}
                  </li>
                ))
              }
            </ul>
            <p className='font-bold'>ClimateTech Innovation Zones showcase cutting-edge innovation through an open-source living lab model igniting other zones across cities to follow.</p>
          </div>
          <img src="/images/zones/textImage.png" alt="Zone Text img"  className='max-h-[350px] md:w-1/2 lg:w-[496px] mt-6 md:mt-auto'/>
        </div>
      </Section>
      <div className="max-h-[478px] flex justify-center bg-white">
        <img src="/images/zones/zoneBigImg.png" alt="" className='h-full w-fit hidden sm:block' />
        <img src="/images/zones/zoneBigImgMobile.png" alt="" className='h-full w-fit block sm:hidden' />
      </div>
      <Section>
        <img src="/images/zones/middleimg.png" className='mx-auto w-fit h-fit hidden md:block' alt="Image in zone page" />
      </Section>
    </>
  )
}
