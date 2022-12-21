import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { ProgramsCard } from './ProgramsCard'
import { programsCards } from '../../data/text'
import {CommunityGif} from '../Atoms/CommunityGif'

export const Cards = () => {
  
  const {spanishIsActive, setSpanishIsActive} = useContext( LanguageContext )

  return (
  <>
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
      <CommunityGif style={'hidden md:block'} />
    </Section>
    <CommunityGif style={'md:hidden'} />
  </>
  )
}
