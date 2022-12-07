import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { HeaderWrapper } from '../Atoms/HeaderWrapper'

export const ProgramsHeader = () => {

  const {spanishIsActive} = useContext( LanguageContext );

  return (
    <HeaderWrapper
      styles={'bg-[url("/images/programs/programsHeaderMobile.png")] sm:bg-[url("/images/programs/programsHeader.png")] h-[521px] sm:h-[578px] '}
    >
      <div className="h-full w-full flex flex-col justify-center items-center ">
      
        <h1 className='text-center title-mobile md:text-[50px] mt-8'>
          {
            spanishIsActive ?
            'Programas' :
            'Programs'
          }
        </h1>
      
        <img src="/images/programs/programsHeaderLetras.png" alt="" className='hidden md:block w-[942px] h-[226px] mx-auto mt-20 pl-8' />
      </div>
    </HeaderWrapper>
  )
}
