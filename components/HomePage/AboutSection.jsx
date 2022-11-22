import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { aboutSection } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'

export const AboutSection = () => {

  const {spanishIsActive} = useContext( LanguageContext )
  
  return (
    <Section>
      <div className="flex gap-28 h-[469px]">
        
        <img src="/images/aboutHome.png" alt="About Home" className='w-[560px] h-[435px]' />
        
        <div className="flex flex-col gap-4 ml-auto">
        
          <h2 className='uppercase title'>
          {
            spanishIsActive ?
            'Acerca' :
            'About'
          }
          </h2>
        
          {
            spanishIsActive ?
            aboutSection.esp.map(info => <p key={info.id}>{info.text}</p>) :
            aboutSection.eng.map(info => <p key={info.id}>{info.text}</p>)
          }
        
          <span className='font-semibold'>Learn more</span>
        
        </div>
        
      </div>
    </Section>
  )
}
