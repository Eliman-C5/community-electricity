import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { PurpleBtn } from '../Atoms/PurpleBtn'
import { marketplaceSubtitle, marketplaceWelcome } from '../../data/text'

//Componetizar para las demás pages
export const HeaderMarket = () => {

  const {spanishIsActive} = useContext( LanguageContext )

  return (
      <div 
      className='h-[90vh] max-h-[578px] max-w-[1440px] bg-no-repeat flex items-center mx-auto relative 
      bg-[url("/images/marketplace/marketHeader.png")]'>
      
        <Section>
          <div className="flex flex-col w-full gap-4">
            <p>
              {
                spanishIsActive ?
                marketplaceWelcome.esp :
                marketplaceWelcome.eng
              }
            </p>
            <h1 className='title-mobile md:title-mobile'>Marketplace</h1>
            <p>
              {
                spanishIsActive ?
                marketplaceSubtitle.esp :
                marketplaceSubtitle.eng
              }
            </p>
            <PurpleBtn text={ spanishIsActive ? 'Unete' : 'Join up'} customStyle={'w-1/3 max-w-[140px] h-[35px]'} />
          </div>
        </Section> 
      
      </div>
  )
}
