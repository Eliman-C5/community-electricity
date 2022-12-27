import React, { useContext, useReducer } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { ProgramBox } from './About/ProgramBox'
import { AboutTexts } from './About/AboutTexts'
import { AboutSlider } from './About/AboutSlider'
import { sliderReducer } from '../../reducers/sliderReducer'
import { AboutSliderMobile } from './About/AboutSliderMobile'
import {CommunityGif} from '../Atoms/CommunityGif'

const initialState = 0

export const AboutSection = () => {

  const [slider, sliderDispatch] = useReducer(sliderReducer, initialState);

  const {spanishIsActive} = useContext( LanguageContext );
  
  return (
  <>
    <Section>
      <ProgramBox spanishIsActive={spanishIsActive} sliderDispatch={sliderDispatch} />
      <AboutTexts spanishIsActive={spanishIsActive} />
      <h4 className='text-center text-[24px] md:text-[35px] font-medium mt-16'>{spanishIsActive ? 'Programas de prosumidores' : 'Prosumer Programs'}</h4>
      <AboutSlider spanishIsActive={spanishIsActive} slider={slider} sliderDispatch={sliderDispatch} />
      <AboutSliderMobile />
      <CommunityGif style={'hidden md:block'} width='' />
    </Section>
    <CommunityGif style={'md:hidden'} />
  </>
  )
}
