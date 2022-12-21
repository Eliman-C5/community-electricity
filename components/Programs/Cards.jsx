import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { ProgramsCard } from './ProgramsCard'
import { programsCards } from '../../data/text'

export const Cards = () => {
  
  const {spanishIsActive, setSpanishIsActive} = useContext( LanguageContext )

  return (
    <Section>
      <div className="flex flex-wrap gap-4 justify-center">
        {
          programsCards.map(card => (
            <ProgramsCard 
              key={card.id}
              src={card.src} 
              title={spanishIsActive ? card.title.esp : card.title.eng}
              dropdownTitle={spanishIsActive ? card.dropdownTitle.esp : card.dropdownTitle.eng}
              dropdownText={spanishIsActive ? card.dropdownText.esp : card.dropdownText.eng}
            />
          ))
        }
      </div>
      <div className="my-[40px] md:my-[80px]">
      <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1671112467/Community/community-gif_ngzyfg.mp4" autoPlay muted loop playsInline className='w-full bg-cover max-w-[1135px] mx-auto' />
      </div>
    </Section>
  )
}
