import React, { useContext, useReducer } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { ProgramBox } from './About/ProgramBox'
import { AboutTexts } from './About/AboutTexts'
import { AboutSlider } from './About/AboutSlider'
import { sliderReducer } from '../../reducers/sliderReducer'

const initialState = 0

export const AboutSection = () => {

  const [slider, sliderDispatch] = useReducer(sliderReducer, initialState);

  const {spanishIsActive} = useContext( LanguageContext );
  
  return (
    <Section>
      <ProgramBox spanishIsActive={spanishIsActive} sliderDispatch={sliderDispatch} />
      <AboutTexts spanishIsActive={spanishIsActive} />
      <AboutSlider spanishIsActive={spanishIsActive} slider={slider} sliderDispatch={sliderDispatch} />
    </Section>
  )
}
