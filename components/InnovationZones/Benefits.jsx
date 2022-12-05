import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { BenefitsDesktopCarusel } from './BenefitsDesktopCarusel';
import { BenefitsMobileCarusel } from './BenefitsMobileCarusel';

const items = [1, 2, 3, 4, 5, 6];

export const Benefits = () => {

  const {spanishIsActive} = useContext( LanguageContext );

  return (
    <>
      <h4 className='text-[22px] font-bold md:text-[28px] text-center my-12'>
      {
        spanishIsActive ?
        'CTIZ: Beneficios' :
        'CTIZ: Benefits'
      }
      </h4>
      <BenefitsDesktopCarusel />
      <BenefitsMobileCarusel />
    </>
  )
}
