import React from 'react'
import { purpleButtons } from '../../../data/text'
import { PurpleBtn } from '../../Atoms/PurpleBtn'

export const ProgramBox = ({spanishIsActive, sliderDispatch}) => {
  return (
    <div className="w-5/6 xl:w-4/6 2xl:w-[60%] hidden lg:block mx-auto relative top-[-150px] px-2 bg-black">
        <h2 className='text-center text-[16px] font-semibold py-4'>
        {
          spanishIsActive ?
            'Elige el programa de descarbonización que se ajuste a tu perfil' :
            'Choose the decarbonization program that fits your profile'
        }
        </h2>
        <div className="flex justify-around items-center">
          {
            purpleButtons.map(text => 
              <PurpleBtn 
                key={text.id} 
                text={spanishIsActive ? text.esp : text.eng}
                onClick={() => sliderDispatch({type: text.type })}
              />
            )
          }
        </div>
    </div>
  )
}
