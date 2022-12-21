import React from 'react'

export const ServiceTitle = ({ spanishIsActive, style }) => {
  return (
    <div className={`${style}`}>
      <h2 className='title-mobile md:text-[35px] text-center my-[30px]'>
      {
        spanishIsActive ?
        'Servicio innovador multijugador' :
        'Innovative multi-play service'
      }
      </h2>
      
      <div className="flex my-[30px] md:my-[60px] relative justify-center">
        <img src="/images/innovative-1.png" alt="" className='w-1/2 min-h-[175px]' />
        <img src="/images/innovative-2.png" alt="" className='w-1/2 min-h-[175px]'/>
        <img src="/images/glu logo.png" alt="" className='w-[70px] h-[60px] xl:w-[133px] xl:h-[124px] absolute bottom-0' />
      </div>
    </div>
  )
}
