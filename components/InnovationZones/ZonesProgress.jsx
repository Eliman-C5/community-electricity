import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { zonesCardsTexts } from '../../data/text'
import { ZonesCard } from './ZonesCard'
import Section from '../Wrappers/NormalAndFadeInSection'

export const ZonesProgress = () => {

  const {spanishIsActive} = useContext( LanguageContext )

  return (
    <Section>
      <h4 className="text-[22px] font-bold md:text-[28px] text-center mt-4 mb-12">
      {
        spanishIsActive ?
        'CTIZ: En progreso' :
        'CTIZ: In progresss'
      }
      </h4>
      <div className='hidden md:flex flex-wrap justify-center gap-4'>
      {
        zonesCardsTexts.map(card => (
          <ZonesCard 
            key={card.id}
            mainImg={card.mainImg}
            title={ spanishIsActive ? card.title.esp : card.title.eng}
            firstText={ spanishIsActive ? card.firstText.esp : card.firstText.eng}
            secondText={ spanishIsActive ? card.secondText.esp : card.secondText.eng}
            path={card.arrowPath}
            specialText={card.specialText}
          />
        ))
      }
      </div>
    </Section>
  )
}
