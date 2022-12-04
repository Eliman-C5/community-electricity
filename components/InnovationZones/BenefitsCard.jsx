import React from 'react'

export const BenefitsCard = ({title, cards, style}) => {
  return (
    <div className={`${style} w-[312px] h-[344px] sm:w-2/3 lg:w-[592px] md:h-[300px] flex flex-col justify-center bg-[#262626] rounded-lg p-6 pl-8`}>
      <h4 className='font-semibold'>{title}</h4>
      <ul className='list-disc'>
      {
        cards.map(card => (
          <li key={card.id} className='ml-2'>{card.eng}</li>
        ))
      }
      </ul>
    </div>
  )
}
