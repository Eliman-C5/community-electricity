import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { dappSection } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'
// import { LearnMoreBtn } from '../Atoms/LearnMoreBtn'
import { TextItem } from './ElectricAccount/TextItem'

export const DappSection = () => {

  const {spanishIsActive} = useContext(LanguageContext);

  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-28">
      
        <div className="w-full md:w-1/2">
        
          <div className="flex items-center text-[28px] md:text-[40px] font-semibold mb-5">
          The <img src="/images/glu.png" alt="" className='h-[40px] md:h-[60px]' /> dapp
          </div>
          
          <img src="/images/glu movil.png" alt="" />
          
          <p className='my-4 font-bold'>
          {
            spanishIsActive ?
            dappSection.subtitleEsp :
            dappSection.subtitleEng
          }
          </p>
          
          {/* <LearnMoreBtn boxStyles='' spanishIsActive={spanishIsActive} /> */}
          
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
