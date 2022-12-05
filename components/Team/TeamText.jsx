import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { teamTexts } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'
import { TextWrapper } from './TextWrapper'

//Reducir estilos tailwind
export const TeamText = () => {

  const {spanishIsActive} = useContext( LanguageContext );

  return (
    <Section>
      <div className='flex flex-col md:flex-row bg-[#262626] max-w-[1135px] mx-auto rounded p-6 md:p-8'>
      
        <TextWrapper 
          src={teamTexts.src1}
          title={ spanishIsActive ? teamTexts.title1.esp : teamTexts.title1.eng}
          text={ spanishIsActive ? teamTexts.text1.esp : teamTexts.text1.eng}
          text2={ spanishIsActive ? teamTexts.text1Part2.esp : teamTexts.text1Part2.eng}
        />
        
        <TextWrapper 
          src={teamTexts.src2}
          title={ spanishIsActive ? teamTexts.title2.esp : teamTexts.title2.eng}
          text={ spanishIsActive ? teamTexts.text2.eng : teamTexts.text2.eng}
        />
        
      </div>
    </Section>
  )
}
