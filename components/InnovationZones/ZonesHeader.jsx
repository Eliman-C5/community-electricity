import { HeaderWrapper } from "../Atoms/HeaderWrapper";
import React, { useContext } from 'react'
import { LanguageContext } from "../../context/LanguageProvider";

export const ZonesHeader = () => {

  const {spanishIsActive} = useContext( LanguageContext )

  return (
    <HeaderWrapper
      styles={'bg-[url("/images/zones/zonesHeader.png")] h-[578px] justify-center'}
    >
      <div className="flex px-8 md:px-6 gap-4">
        <h4 className="font-bold text-[20px] md:text-[22px]" >
          {
            spanishIsActive ?
            'Zona de innovación Climatetech' :
            'Climatetech Innovation Zone'
          }
        </h4>
        <a className="" href="https://www.climatetechinnovationzone.io/" rel="noreferrer" target='_blank'>
          <img src="/images/zones/headerbtn.svg" alt="" />
        </a>
      </div>
    </HeaderWrapper>
  )
}
