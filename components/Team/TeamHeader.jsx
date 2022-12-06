import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { HeaderWrapper } from "../Atoms/HeaderWrapper";

export const TeamHeader = () => {

  const {spanishIsActive} = useContext( LanguageContext );

  return (
    <HeaderWrapper
      styles={'bg-[url("/images/team/teamHeaderMobile.png")] sm:bg-[url("/images/team/teamHeader.png")] h-[486px] sm:h-[648px]'}
    >
      <h1 className="font-semibold text-[40px] text-center w-full mt-auto mb-12">
      {
        spanishIsActive ?
        'Nuestro equipo' :
        'Our Team'
      }
      </h1>
    </HeaderWrapper>
  )
}
