import React from 'react'

export const SliderCircle = ({slider, number, onClick}) => {
  return (
    <button 
      className={`${slider === number ? 'bg-customPurple' : 'bg-slate-300'} w-[12px] h-[12px] rounded-full`} 
      onClick={onClick}
    ></button>
  )
}
