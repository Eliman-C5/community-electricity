import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { ProgramBox } from './About/ProgramBox'
import { AboutTexts } from './About/AboutTexts'
import { AboutCarusel } from './About/AboutCarusel'
import { AboutSlider } from './About/AboutSlider'

export const AboutSection = () => {

  const {spanishIsActive} = useContext( LanguageContext );
  
  return (
    <Section>
      <ProgramBox spanishIsActive={spanishIsActive} />
      <AboutTexts spanishIsActive={spanishIsActive} />
      <AboutCarusel spanishIsActive={spanishIsActive} />
      {/* <AboutSlider spanishIsActive={spanishIsActive} /> */}
    </Section>
  )
}
