import React from 'react'
import { zonesCardsTexts } from '../../data/text'
import { ZonesCard } from './ZonesCard'
import Section from '../Wrappers/NormalAndFadeInSection'

export const ZonesProgress = () => {
  return (
    <Section>
      <h4 className="text-[22px] font-bold md:text-[28px] text-center mt-4 mb-12">
      CTIZ: In progresss
      </h4>
      <div className='hidden md:flex flex-wrap justify-center gap-4'>
      {
        zonesCardsTexts.map(card => (
          <ZonesCard 
            key={card.id}
            mainImg={card.mainImg}
            title={card.title.eng}
            firstText={card.firstText.eng}
            secondText={card.secondText.eng}
            path={card.arrowPath}
            specialText={card.specialText}
          />
        ))
      }
      </div>
    </Section>
  )
}
