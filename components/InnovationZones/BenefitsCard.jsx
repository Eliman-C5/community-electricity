import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'

export const BenefitsCard = ({title, cards = [], style}) => {

  const {spanishIsActive} = useContext( LanguageContext );

  return (
    <div className={`${style} w-[312px] h-[470px] md:h-[344px] sm:w-2/3 lg:w-[592px] flex flex-col justify-center bg-[#262626] rounded-lg p-4 pl-5 mx-auto`}>
      <h4 className='font-semibold'>{ spanishIsActive ? title.esp : title.eng }</h4>
      <ul className='list-disc'>
      {
        cards.map(card => (
          <li key={card.id} className='ml-4'>{ spanishIsActive ? card.esp : card.eng}</li>
        ))
      }
      </ul>
    </div>
  )
}
