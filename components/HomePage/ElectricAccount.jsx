import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'

export const ElectricAccount = () => {
  return (
    <Section>
      <div className="flex">
      
        <div className="w-1/2 flex flex-col justify-center gap-8">
          <h2 className='title'>Click here to start using your electric bank account</h2>
          <div className="flex">
            <img src="/images/purple-icon.png" alt="" className='w-[80px] h-[136px]' />
            <span className='mt-auto'>IRA incentives calculator</span>
          </div>
        </div>
        
        <img src="/images/electric-account-house.png" alt="" className='w-1/2'/>
      
      </div>
    </Section>
  )
}
