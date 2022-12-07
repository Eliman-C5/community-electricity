import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { programsText } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'

export const ProgramsText = () => {

  const {spanishIsActive} = useContext( LanguageContext )

  return (
    <Section>
      <div className="max-w-[1135px] mx-auto flex flex-col lg:flex-row gap-4">
        
        <div className="xl:pr-16">
          <h4 className='title-mobile md:title'>
            {
              spanishIsActive ?
              programsText.title.esp :
              programsText.title.eng
            }
          </h4>
          <p className='text-[16px] mt-4'>
            {
              spanishIsActive ?
              programsText.text.esp :
              programsText.text.eng
            }
          </p>
        </div>
        
        <img src="/images/programs/programsTextImg.png" alt="" className='hidden lg:block w-fit h-fit my-auto mx-auto' />
        
        <img src="/images/programs/programsTextImgMobile.png" alt="" className='block lg:hidden w-full h-fit mx-auto' />
        
      </div>
    </Section>
  )
}
