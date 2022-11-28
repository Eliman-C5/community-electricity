import React, { useReducer } from 'react'
import { AboutSectionCard } from '../../Atoms/AboutSectionCard'
import { aboutCarusel } from '../../../data/text';
import { sliderReducer } from '../../../reducers/sliderReducer'
import { TYPES } from '../../../data/TYPES';

const initialState = 'translate-x-0'

export const AboutSlider = ({spanishIsActive}) => {

  const [slider, sliderDispatch] = useReducer(sliderReducer, initialState);
  
  return (
    <>
      <div className='w-full flex overflow-hidden my-5'>
      {
        spanishIsActive ?
          aboutCarusel.esp.map(slide => (
              <AboutSectionCard 
                key={slide.id} 
                src={slide.src} 
                title={slide.title} 
                text={slide.text} 
                btn={slide.btn} 
                customStyle={slider}
              />
          )) :
          aboutCarusel.eng.map(slide => (
              <AboutSectionCard 
                key={slide.id} 
                src={slide.src} 
                title={slide.title} 
                text={slide.text} 
                btn={slide.btn}
                customStyle={slider}
              />
          ))
      }
      </div>
      <div className="flex justify-center gap-4">
        <button 
          className={`${slider === 'translate-x-0' ? 'bg-customPurple' : 'bg-slate-300'} animate-firstMove w-3 h-3 rounded-full`} 
          onClick={() => sliderDispatch({type: TYPES.FIRST })}
        ></button>
        <button 
          className={`${slider === '-translate-x-[100%]' ? 'bg-customPurple' : 'bg-slate-300'} animate-firstMove w-3 h-3 rounded-full`} 
          onClick={() => sliderDispatch({type: TYPES.SECOND })}
        ></button>
        <button 
          className={`${slider === '-translate-x-[200%]' ? 'bg-customPurple' : 'bg-slate-300'} animate-firstMove w-3 h-3 rounded-full`} 
          onClick={() => sliderDispatch({type: TYPES.THIRD })}
        ></button>
        <button 
          className={`${slider === '-translate-x-[300%]' ? 'bg-customPurple' : 'bg-slate-300'} animate-firstMove w-3 h-3 rounded-full`} 
          onClick={() => sliderDispatch({type: TYPES.FOURTH })}
        ></button>
      </div>
    </>
    
  )
}
