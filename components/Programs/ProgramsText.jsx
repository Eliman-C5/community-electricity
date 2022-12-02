import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { programsText } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'

export const ProgramsText = () => {

  const {spanishIsActive} = useContext( LanguageContext )

  return (
    <Section>
      <div className="max-w-[1135px] mx-auto">
        <h4 className='title-mobile md:title'>
          {
            spanishIsActive ?
            programsText.title.esp :
            programsText.title.eng
          }
        </h4>
        <p className='text-[16px] lg:w-1/2 mt-4'>
          {
            spanishIsActive ?
            programsText.text.esp :
            programsText.text.eng
          }
        </p>
      </div>
    </Section>
  )
}
