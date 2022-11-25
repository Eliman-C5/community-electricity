import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageProvider'
import Section from './Wrappers/NormalAndFadeInSection'

export const Footer = () => {

  const {spanishIsActive} = useContext(LanguageContext);

  return (
    <Section>
      <div className="flex gap-0 md:gap-28 py-16 justify-center">
      
        <div className="">
          <img src="/images/cubos-footer.png" alt="" className='w-[236px] mr-auto md:mr-0' />
          <h2 className='text-[18px]'>Community Electricity</h2>
          <p className='text-[14px] md:text-[16px]'>
            {
              spanishIsActive ?
              'Únase a la red de prosumidores y monetice mientras descarboniza' :
              'Join the prosumer network and monetize as you decarbonize'
            }
          </p>
          <form className='flex flex-col md:flex-row gap-6 mt-4'>
            <input type="text" className='outline-0 text-black w-full h-[40px] md:w-2/3 '/>
            <button className='bg-[#9885F7] rounded w-full md:w-[120px] h-[40px]'>
              {
                spanishIsActive ?
                'Suscríbete' :
                'Suscribe'
              }
            </button>
          </form>
        </div>
        
        <div className="hidden md:block">
          <img src="/images/footerpuzzle.png" alt="" />
        </div>
      </div>
      
      <p className="hidden md:block">
      {
        spanishIsActive ?
        'Estamos creando la infraestructura y los mecanismos para lograr un impacto sexy, personal y material.' :
        'We are creating the infrastructure and mechanisms to make impact sexy, personal, and material.'
      }
      </p>
    </Section>
  )
}
