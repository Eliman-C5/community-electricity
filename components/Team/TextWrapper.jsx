import React from 'react'

export const TextWrapper = ({src, title, text, text2 = null}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-6 md:mt-0">
        <div className="flex gap-4 md:hidden">
          <img src={src} alt={title} className='w-fit h-fit' />
          <h4 className='text-[18px] font-bold mb-5'>{title}</h4>
        </div>
        <img src={src} alt="" className='w-fit h-fit hidden md:block' />
        <div className="w-full md:w-11/12 md:pl-4">
          <h4 className='hidden md:block text-[18px] font-bold mb-5'>{title}</h4>
          <p className='md:font-bold'>{text}</p>
          {
            text2 && <p className='md:font-bold mt-[20px]'>{text2}</p>
          }
        </div>
    </div>
  )
}
