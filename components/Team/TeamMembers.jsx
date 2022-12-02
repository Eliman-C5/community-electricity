import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { TeamCard } from './TeamCard'

export const TeamMembers = ({cards}) => {
  return (
    <div className='hidden sm:grid max-w-[1135px] mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
        cards.map(card => (
          <TeamCard 
            key={card.id}
            src={card.src}
            name={card.name}
            charge={card.charge.eng}
            linkedin={card.linkedin}
          />
        ))
      }
    </div>
  )
}
