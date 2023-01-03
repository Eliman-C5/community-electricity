import React from 'react'
import { AboutSectionCard } from '../../Atoms/AboutSectionCard'
import { aboutCarusel } from '../../../data/text';
import { TYPES } from '../../../data/TYPES';
import { SliderCircle } from './SliderCircle'

export const AboutSlider = ({spanishIsActive, slider, sliderDispatch}) => {
  
  return (
    <>
      <div className='w-full hidden lg:flex overflow-hidden my-8'>
      {
        spanishIsActive ?
          aboutCarusel.esp.map(slide => slide.id === slider  && (
              <AboutSectionCard 
                key={slide.id} 
                src={slide.src} 
                title={slide.title} 
                text={slide.text} 
              />
          )) :
          aboutCarusel.eng.map(slide => slide.id === slider && (
              <AboutSectionCard 
                key={slide.id} 
                src={slide.src} 
                title={slide.title} 
                text={slide.text}
              />
          ))
      }
      </div>
      <div className="hidden lg:flex justify-center gap-4">
        <SliderCircle slider={slider} number={0} onClick={() => sliderDispatch({type: TYPES.FIRST })} />
        <SliderCircle slider={slider} number={1} onClick={() => sliderDispatch({type: TYPES.SECOND })} />
        <SliderCircle slider={slider} number={2} onClick={() => sliderDispatch({type: TYPES.THIRD })} />
        <SliderCircle slider={slider} number={3} onClick={() => sliderDispatch({type: TYPES.FOURTH })} />
        <SliderCircle slider={slider} number={4} onClick={() => sliderDispatch({type: TYPES.FIFTH })} />
        <SliderCircle slider={slider} number={5} onClick={() => sliderDispatch({type: TYPES.SIXTH })} />
      </div>
    </>
    
  )
}
