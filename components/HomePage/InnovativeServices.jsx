import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'

const icons = [
  {id: 1, src: '/images/services-1.svg'},
  {id: 2, src: '/images/services-2.svg'},
  {id: 3, src: '/images/services-3.svg'},
  {id: 4, src: '/images/services-4.svg'},
  {id: 5, src: '/images/services-5.svg'},
  {id: 6, src: '/images/services-6.svg'},
  {id: 7, src: '/images/services-7.svg'},
  {id: 8, src: '/images/services-8.svg'},
  {id: 9, src: '/images/services-9.svg'},
];

export const InnovativeServices = () => {

  const {spanishIsActive} = useContext(LanguageContext);
  
  return (
    <Section>
      <h2 className='font-semibold text-[48px] text-center leading-[40px] my-[30px]'>
      {
        spanishIsActive ?
        'Servicio innovador multijugador' :
        'innovative multi-play service'
      }
      </h2>
      
      <div className="flex my-[60px] relative justify-center">
        <img src="/images/innovative-1.png" alt="" className='w-full h-full max-w-[568px]' />
        <img src="/images/innovative-2.png" alt="" className='w-full h-full max-w-[568px]'/>
        <img src="/images/glu logo.png" alt="" className='w-[133px] h-[124px] absolute bottom-0' />
      </div>
      
      <div className="flex justify-between">
        {
          icons.map(icon => (
          <span key={icon.id} className='bg-customPurple w-[76px] h-[76px] grid place-content-center rounded'>
            <img src={icon.src} alt={icon.id} />
          </span>
          ))
        }
      </div>
      
      <div className="flex justify-between mt-[40px]">
        <h2 className='title'>Internet</h2>
        <h2 className='title'>{spanishIsActive? 'energía' : 'energy'}</h2>
        <h2 className='title'>{spanishIsActive? 'servicios de red' : 'grid services'}</h2>
      </div>
    </Section>
  )
}
