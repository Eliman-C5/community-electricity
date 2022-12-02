import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { teamTexts } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'
import { TextWrapper } from './TextWrapper'

//Reducir estilos tailwind
export const TeamText = () => {
  return (
    <Section>
      <div className='flex flex-col md:flex-row bg-[#262626] max-w-[1135px] mx-auto rounded p-6 md:p-8'>
      
        <TextWrapper 
          src={teamTexts.src1}
          title={teamTexts.title1.eng}
          text={teamTexts.text1.eng}
          text2={teamTexts.text1Part2.eng}
        />
        
        <TextWrapper 
          src={teamTexts.src2}
          title={teamTexts.title2.eng}
          text={teamTexts.text2.eng}
        />
        
      </div>
    </Section>
  )
}
