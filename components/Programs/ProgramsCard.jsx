import React from 'react'
import { useState } from 'react'

export const ProgramsCard = ({title, src, dropdownTitle, dropdownText }) => {

  const [isCardActive, setIsCardActive] = useState(false)

  return (
  <div className='w-full min-[1420px]:w-[368px]'>
    <div className='programs-card relative flex shrink-0 items-center'>
      <img src={src} alt={title} className='w-fit h-fit z-20' />
      <h4 className='font-bold text-[22px] text-center z-20'>{title}</h4>
      <button 
        className='absolute -bottom-[5%] z-20 w-[40px] h-[35px] bg-white text-[#9885F7]'
        onClick={() => setIsCardActive(!isCardActive)}
      >
        {
          isCardActive ?
          '-':
          '+'
        }
      </button>
    </div>
    <div 
      className={`programs-card-dropdown ${isCardActive ? 'flex' : 'hidden'} min-[1420px]:w-[368px] md:px-12`}
    >
      <h4 className='text-[#BCAEFF]'>{dropdownTitle}</h4>
      <p>{dropdownText}</p>
    </div>
  </div>
  )
}
