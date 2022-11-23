import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'

export const ElectricAccount = () => {

  const { spanishIsActive } = useContext(LanguageContext);

  return (
    <Section>
      <div className="flex">
      
        <div className="w-1/2 flex flex-col justify-center gap-8">
          <h2 className='title'>
            {
              spanishIsActive ?
              'Hacer click aquí para empezar a usar tu cuenta bancaria eléctrica' :
              'Click here to start using your electric bank account'
            }
          </h2>
          <div className="flex">
            <img src="/images/purple-icon.png" alt="" className='w-[80px] h-[136px]' />
            <span className='mt-auto'>
              {
                spanishIsActive ?
                'Calculadora de incentivos IRA' :
                'IRA incentives calculator'
              }
            </span>
          </div>
        </div>
        
        <img src="/images/electric-account-house.png" alt="" className='w-1/2'/>
      
      </div>
    </Section>
  )
}
