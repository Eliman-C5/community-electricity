import { HeaderWrapper } from "../Atoms/HeaderWrapper";
import React, { useContext } from 'react'
import { LanguageContext } from "../../context/LanguageProvider";

export const ZonesHeader = () => {

  const {spanishIsActive} = useContext( LanguageContext )

  return (
    <HeaderWrapper
      styles={'bg-[url("/images/zones/solar-energy-mobile.png")] sm:bg-[url("/images/zones/solar-energy.png")] h-[578px] justify-center'}
    >
      <div className="flex w-full justify-around md:justify-center md:gap-16">
        <h4 className="font-bold text-[20px] md:text-[22px]" >
          {
            spanishIsActive ?
            'Proyectos' :
            'Projects'
          }
        </h4>
        <a className="" href="https://www.climatetechinnovationzone.io/" rel="noreferrer" target='_blank'>
          <img src="/images/zones/headerbtn.svg" alt="" />
        </a>
      </div>
    </HeaderWrapper>
  )
}
