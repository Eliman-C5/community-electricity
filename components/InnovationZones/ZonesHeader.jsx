import { HeaderWrapper } from "../Atoms/HeaderWrapper";
import React, { useContext } from 'react'
import { LanguageContext } from "../../context/LanguageProvider";

export const ZonesHeader = () => {

  const {spanishIsActive} = useContext( LanguageContext )

  return (
    <HeaderWrapper
      styles={'bg-[url("/images/zones/zonesHeader.png")] max-w-[1440px] w-full h-[578px] bg-center bg-cover justify-center'}
    >
      <div className="flex px-8 md:px-6 gap-4">
        <h1 className="font-bold text-[22px]">
          {
            spanishIsActive ?
            'Zona de innovación de tecnología climática' :
            'Climate Tech Innovation Zone'
          }
        </h1>
        <button className="" >
          <img src="/images/zones/headerbtn.svg" alt="" />
        </button>
      </div>
    </HeaderWrapper>
  )
}
