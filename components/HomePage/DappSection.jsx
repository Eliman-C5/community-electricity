import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { dappSection } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'
import { LearnMoreBtn } from '../Atoms/LearnMoreBtn'
import { TextItem } from './ElectricAccount/TextItem'

export const DappSection = () => {

  const {spanishIsActive} = useContext(LanguageContext);

  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-28 lg:h-[612px]">
      
        <div className="w-full md:w-1/2">
        
          <img 
            src="/images/glu dapp.png" 
            alt="About Home" 
            className='w-[180px] h-[44px] md:w-[252px] md:h-[56px]' 
          />
          <img 
            src="/images/glu movil.png" 
            alt="About Home" 
            className='w-[312px] h-[225px] md:w-[415px] md:h-[299px]' 
          />
          
          <p className='my-4'>
          {
            spanishIsActive ?
            dappSection.subtitleEsp :
            dappSection.subtitleEng
          }
          </p>
          
          <LearnMoreBtn boxStyles='' spanishIsActive={spanishIsActive} />
          
        </div>
        
        
        
        <div className="flex flex-col gap-4 w-full md:w-1/2">
        
          <ul className=''>
          {
            spanishIsActive ?
              dappSection.esp.map(info => (
                <TextItem key={info.id} id={info.id} text={info.text} />)) :
              dappSection.eng.map(info => (
                <TextItem key={info.id} id={info.id} text={info.text} />
            ))
          }
          </ul>
        
        </div>
        
      </div>
    </Section>
  )
}
