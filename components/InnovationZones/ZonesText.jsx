import React, { useContext } from 'react'
import { TextsParagraphs } from './ZonesTexts/TextsParagraphs'
import Section from '../Wrappers/NormalAndFadeInSection'

export const ZonesText = () => {

  return (
    <>
      <Section>
        <div className="flex flex-col md:flex-row justify-between max-w-[1135px] gap-4 mx-auto">
          <div className="flex flex-col gap-4 w-full md:w-1/2 pr-4">
            <TextsParagraphs />
          </div>
          <img src="/images/zones/textImage.png" alt="Zone Text img"  className='max-w-[496px] max-h-[276px] md:w-1/2 md:mt-12 '/>
        </div>
      </Section>
      <div className="max-h-[478px] flex justify-center bg-white">
        <img src="/images/zones/zoneBigImg.png" alt="" className='h-full w-fit hidden sm:block' />
        <img src="/images/zones/zoneBigImgMobile.png" alt="" className='h-full w-fit block sm:hidden' />
      </div>
      <Section>
        <img src="/images/zones/madeInLA.png" className='mx-auto w-fit h-fit hidden md:block' alt="Image in zone page" />
      </Section>
    </>
  )
}
