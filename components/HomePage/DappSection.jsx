import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { dappSection } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'

export const DappSection = () => {

  const {spanishIsActive} = useContext(LanguageContext);

  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center gap-28 h-[612px]">
      
        <div className="w-1/2">
          <img src="/images/glu dapp.png" alt="About Home" className='w-[252px] h-[56px]' />
          <img src="/images/glu movil.png" alt="About Home" className='w-[415px] h-[299px]' />
          <p className='my-4'>
          {
            spanishIsActive ?
            dappSection.subtitleEsp :
            dappSection.subtitleEng
          }
          </p>
          <span className='font-semibold'>
          {
            spanishIsActive ?
            'Saber más' :
            'Learn more'
          }
          </span>
          
        </div>
        
        
        
        <div className="flex flex-col gap-4 w-1/2">
        
          <ul className=''>
          {
            spanishIsActive ?
            dappSection.esp.map(info => (
              <li 
                key={info.id} 
                className={`mt-4 p-4 ${info.id === 3 ? 'border-0' : 'border-b-2 border-white'}`}
              > 
                <span className='text-[24px] font-bold mr-4'>{info.id}</span> {info.text}
              </li>)) :
            dappSection.eng.map(info => (
              <li 
                key={info.id} 
                className={`mt-4 p-4 ${info.id === 3 ? 'border-0' : 'border-b-2 border-white'}`}
              >
                <span className='text-[24px] font-bold mr-4'>{info.id}</span> {info.text}
              </li>))
          }
          </ul>
        
        </div>
        
      </div>
    </Section>
  )
}
