import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { ProgramBox } from '../HomePage/ProgramBox'
import { AboutTexts } from '../HomePage/AboutTexts'
import { AboutCarusel } from '../HomePage/AboutCarusel'

export const AboutSection = () => {

  const {spanishIsActive} = useContext( LanguageContext );
  
  return (
    <Section>
      <ProgramBox spanishIsActive={spanishIsActive} />
      <AboutTexts spanishIsActive={spanishIsActive} />
      <AboutCarusel spanishIsActive={spanishIsActive} />
    </Section>
  )
}
