import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'

const icons = [
  {id: 1, src: '/images/services/services-1.svg'},
  {id: 2, src: '/images/services/services-2.svg'},
  {id: 3, src: '/images/services/services-3.svg'},
  {id: 4, src: '/images/services/services-4.svg'},
  {id: 5, src: '/images/services/services-5.svg'},
  {id: 6, src: '/images/services/services-6.svg'},
  {id: 7, src: '/images/services/services-7.svg'},
  {id: 8, src: '/images/services/services-8.svg'},
  {id: 9, src: '/images/services/services-9.svg'},
];

export const ServicesSection = () => {

  const {spanishIsActive} = useContext(LanguageContext);
  
  return (
  <>
    <Section>
      <h2 className='font-semibold text-[28px] md:text-[48px] md:text-center leading-[40px] my-[30px]'>
      {
        spanishIsActive ?
        'Servicio innovador multijugador' :
        'innovative multi-play service'
      }
      </h2>
      
      <div className="flex my-[30px] md:my-[60px] relative justify-center">
      {/* w-full h-full max-w-[568px] */}
        <img src="/images/innovative-1.png" alt="" className='w-[140px] md:w-[350px] h-full xl:w-full xl:max-w-[568px]' />
        <img src="/images/innovative-2.png" alt="" className='w-[140px] md:w-[350px] h-full xl:w-full xl:max-w-[568px]'/>
        <img src="/images/glu logo.png" alt="" className='w-[70px] h-[60px] xl:w-[133px] xl:h-[124px] absolute bottom-0' />
      </div>
      
      <div className="flex justify-between w-full pb-4 items-center overflow-hidden overflow-x-auto scrollbar">
        {
          icons.map(icon => (
          <div key={icon.id} className='bg-customPurple shrink-0 w-[57px] h-[57px] mx-2 md:mx-0 md:w-[76px] md:h-[76px] grid place-content-center rounded'>
            <img src={icon.src} alt={icon.id} className='w-[36px] h-[36px]' />
          </div>
          ))
        }
      </div>
      
      <div className="hidden md:flex justify-between mt-[10px]">
        <h2 className=''>INTERNET</h2>
        <h2 className=''>{spanishIsActive? 'ENERGÍA' : 'ENERGY'}</h2>
        <h2 className=''>{spanishIsActive? 'SERVICIOS DE RED' : 'GRID SERVICES'}</h2>
      </div>
    </Section>
    <img 
      className='w-full max-h-[810px]'
      src="https://res.cloudinary.com/datsipxkz/image/upload/v1669952723/Community/glu-community-min_rfwktf.gif" 
      alt="Header gif"
    />
  </>
  )
}
