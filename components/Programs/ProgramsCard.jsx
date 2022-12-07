import React from 'react'

export const ProgramsCard = ({title, src}) => {
  return (
    <div className='h-[255px] w-full min-[1420px]:w-[368px] bg-[#262626]/50 p-4 relative shrink-0 flex flex-col items-center justify-center gap-6 rounded-lg mb-8'>
      <img src={src} alt={title} className='w-fit h-fit' />
      <h4 className='font-bold text-[22px] text-center'>{title}</h4>
      <button className='absolute -bottom-[5%] w-[40px] h-[35px] bg-white text-[#9885F7]'>+</button>
    </div>
  )
}
