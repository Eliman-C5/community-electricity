import React from 'react'

export const TheGluTitle = ({title, styles = ''}) => {
  return (
    <div className={`flex items-center ${styles} text-[28px] md:text-[40px] font-semibold mb-5`}>
    The <img src="/images/glu.png" alt="" className='h-[40px] md:h-[60px]' /> {title}
    </div>
  )
}
