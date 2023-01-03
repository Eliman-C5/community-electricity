import React, { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageProvider'

const icons = [
  {id: 1, src: '/images/services/services-1.svg'},
  {id: 2, src: '/images/services/services-2.svg'},
  {id: 3, src: '/images/services/services-3.svg'},
  {id: 4, src: '/images/services/services-4.svg'},
  {id: 5, src: '/images/services/services-5.svg'},
  {id: 6, src: '/images/services/services-6.svg'},
  {id: 7, src: '/images/services/services-7.svg'},
];

export const ServicesCards = () => {

  const {spanishIsActive} = useContext(LanguageContext);

  return (
    <>
      
      <div className="flex justify-between w-full pb-4 items-center overflow-hidden overflow-x-auto scrollbar">
        {
          icons.map(icon => (
          <div key={icon.id} className='bg-customPurple shrink-0 w-[57px] h-[57px] mx-2 md:mx-0 md:w-[76px] md:h-[76px] grid place-content-center rounded'>
            <img src={icon.src} alt={icon.id} className='w-[36px] h-[36px]' />
          </div>
          ))
        }
      </div>
      
      <div className="flex justify-between mt-[10px] ml-2 md:ml-0">
        <h2 className=''>INTERNET</h2>
        <h2 className=''>{spanishIsActive? 'ENERGÍA' : 'ENERGY'}</h2>
        <h2 className=''>{spanishIsActive? 'SERVICIOS DE RED' : 'GRID SERVICES'}</h2>
      </div>
      
    </>
  )
}
