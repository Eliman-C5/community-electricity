import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { HeaderWrapper } from '../Atoms/HeaderWrapper'

export const ProgramsHeader = () => {
  return (
    <HeaderWrapper
      styles={'bg-[url("/images/programs/programsHeaderMobile.png")] sm:bg-[url("/images/programs/programsHeader.png")] h-[521px] sm:h-[578px] md:max-w-[1440px] bg-cover sm:bg-auto'}
    >
      <div className="h-full w-full flex flex-col justify-center items-center gap-8">
      
        <h1 className='text-center title-mobile md:text-[50px] mt-8'>Programs</h1>
      
        <img src="/images/programs/programsHeaderLetras.png" alt="" className='hidden md:block w-full max-w-[913px] mx-auto pl-8' />
      </div>
    </HeaderWrapper>
  )
}
