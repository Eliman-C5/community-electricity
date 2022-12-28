import React from 'react'
import { comingSoonItems } from '../../../data/text'

export const ComingSoon = ({spanishIsActive}) => {
  return (
    <div className='w-full flex flex-col justify-center gap-8'>
    
      <h2 className='title-mobile md:text-[30px] md:text-center'>
        {
          spanishIsActive ?
          'El servicio de internet de energía para el hogar' :
          'The energy internet home service'
        }
      </h2>
      
      <div className="flex justify-between flex-wrap gap-4">
      {
        comingSoonItems.map(item => (
          <div className="" key={item.id}>
            <div className="h-[50px]">
              <img src={item.src} className='' alt={spanishIsActive ? item.text.esp : item.text.eng} />
            </div>
            <p className='text-[12px]'>
            {
              spanishIsActive ?
              item.text.esp :
              item.text.eng
            }
            </p>
          </div>
        ))
      }
      </div>
      
      <p className='text-[#764AF1] title-mobile text-center w-full'>
      {
        spanishIsActive ?
        'Proximamente!' :
        'Coming Soon!'
      }
      </p>
      
    </div>
  )
}
