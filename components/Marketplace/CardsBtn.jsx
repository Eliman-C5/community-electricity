import React from 'react'

export const CardsBtn = ({symbol, onClick}) => {
  return (
    <button onClick={onClick} className='bg-white text-[#9885F7] w-[25px] h-[25px] md:w-[40px] md:h-[35px]'>
      {symbol}
    </button>
  )
}
