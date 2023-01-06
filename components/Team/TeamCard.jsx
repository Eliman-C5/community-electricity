import React from 'react'

export const TeamCard = ({src, name, charge, linkedin}) => {
  return (
    <div className='flex flex-col items-center h-[287px] max-w-[272px] mx-auto mt-12 gap-4'>
      <img src={src} alt={name} className='w-[177px] h-[177px] rounded-full' />
      <h4 className='text-[16px] uppercase text-[#9885F7] font-bold'>{name}</h4>
      <p className='text-center'>{charge}</p>
      {
        linkedin && (
          <a href={linkedin} target='_blank' rel="noreferrer">
            <img src='/images/team/linkedin.svg' alt={name} />
          </a>
        )
      }
    </div>
  )
}
