import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'

export const ProgramsHeader = () => {
  return (
    <div className='h-[90vh] bg-[#FFF] bg-[url("/images/programs/programsHeader.png")] max-h-[578px] bg-contain bg-center bg-no-repeat fle mx-auto'>
      <div className="h-full flex flex-col justify-center">
      
        <h1 className='text-center title-mobile md:text-[50px]'>Programs</h1>
      
        <img src="/images/programs/programsHeaderLetras.png" alt="" className='max-w-[913px] mx-auto pl-6' />
      </div>
    </div>
  )
}
