import React from 'react'

export const TheGluTitle = ({title}) => {
  return (
    <div className={`flex items-center justify-center text-[28px] md:text-[40px] font-semibold mb-5`}>
      <img src="/images/glu.png" alt="" className='h-[40px] md:h-[60px]' /> {title}
    </div>
  )
}
