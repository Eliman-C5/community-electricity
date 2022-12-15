import React, { useContext, useReducer } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { ProgramBox } from './About/ProgramBox'
import { AboutTexts } from './About/AboutTexts'
import { AboutSlider } from './About/AboutSlider'
import { sliderReducer } from '../../reducers/sliderReducer'
import { AboutSliderMobile } from './About/AboutSliderMobile'

const initialState = 0

export const AboutSection = () => {

  const [slider, sliderDispatch] = useReducer(sliderReducer, initialState);

  const {spanishIsActive} = useContext( LanguageContext );
  
  return (
  <>
    <Section>
      <ProgramBox spanishIsActive={spanishIsActive} sliderDispatch={sliderDispatch} />
      <AboutTexts spanishIsActive={spanishIsActive} />
      <AboutSlider spanishIsActive={spanishIsActive} slider={slider} sliderDispatch={sliderDispatch} />
      <AboutSliderMobile />
    </Section>
    <div className="relative">
      <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1671112467/Community/community-gif_ngzyfg.mp4" autoPlay muted loop playsInline className='w-full bg-cover' />
    </div>
  </>
  )
}
