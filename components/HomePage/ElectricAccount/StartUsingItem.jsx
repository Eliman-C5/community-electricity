import React from 'react'
import { electricAccount } from '../../../data/text'
import { ArrowBtn } from '../../Atoms/ArrowBtn'

export const StartUsingItem = ({spanishIsActive}) => {
  return (
    <div className="w-full flex flex-col justify-center gap-8 pr-4 my-auto">
      <h2 className='title-mobile md:text-[35px]'>
        {
          spanishIsActive ?
          electricAccount.title.esp :
          electricAccount.title.eng
        }
      </h2>
      <div className="flex justify-between md:justify-start mt-[40px]">
          <img src="/images/purple-icon.png" alt="" className='w-[60px] h-[102px] md:w-[80px] md:h-[136px]' />
          <ArrowBtn 
            text=
            {
              spanishIsActive ? 
              electricAccount.calculator.esp :
              electricAccount.calculator.eng
            }
            path={'/images/white-arrow.svg'}
            customStyle={'mt-auto text-[16px] pl-4 md:pl-0'}
          />
      </div>
    </div>
  )
}
