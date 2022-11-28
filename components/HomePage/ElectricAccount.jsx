import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { electricAccount } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'
import { ElectricAccountPic } from './ElectricAccount/ElectricAccountPic'

export const ElectricAccount = () => {

  const { spanishIsActive } = useContext(LanguageContext);

  return (
  <>
    <Section>
      <div className="flex gap-4 flex-col md:flex-row">
      
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
          <h2 className='title-mobile md:title'>
            {
              spanishIsActive ?
              electricAccount.title.esp :
              electricAccount.title.eng
            }
          </h2>
          <div className="flex justify-between md:justify-start">
            <img src="/images/purple-icon.png" alt="" className='w-[60px] h-[102px] md:w-[80px] md:h-[136px]' />
            <span className='mt-auto text-[16px] font-semibold'>
              {
                spanishIsActive ?
                  electricAccount.calculator.esp :
                  electricAccount.calculator.eng
              }
            </span>
          </div>
        </div>
        
        <img src="/images/electric-account-house.png" alt="" className='hidden md:block md:w-1/2'/>
      
      </div>
    </Section>
    <ElectricAccountPic />
  </>
  )
}
