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
            />
          ))
        }
      </div>
    </Section>
  )
}
