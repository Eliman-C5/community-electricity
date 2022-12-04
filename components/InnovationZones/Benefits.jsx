import React from 'react'
import { BenefitsDesktopCarusel } from './BenefitsDesktopCarusel';
import { BenefitsMobileCarusel } from './BenefitsMobileCarusel';

const items = [1, 2, 3, 4, 5, 6];

export const Benefits = () => {
  return (
    <>
      <h4 className='text-[22px] font-bold md:text-[28px] text-center my-12'>CTIZ: Benefits</h4>
      <BenefitsDesktopCarusel />
      <BenefitsMobileCarusel />
    </>
  )
}
