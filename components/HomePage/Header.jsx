import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { headerTitle, headerSubtitle } from '../../data/text'
import { LearnMoreBtn } from '../Atoms/LearnMoreBtn'
import { ArrowBtn } from '../Atoms/ArrowBtn'

export const Header = () => {

  const {spanishIsActive, setSpanishIsActive} = useContext( LanguageContext )

  return (
      // Optimizar codigo de tailwind
      <div className='min-h-[90vh] md:min-h-[680px] max-h-[837px] grid place-content-center mx-auto relative'>
      
        <video src="/images/header.mp4" autoPlay muted loop className='video-background'></video>
    
        <div className="w-full md:w-11/12 mx-auto z-10 relative">
      
          <h1 
            className='title-mobile md:title text-center'
            onClick={() => setSpanishIsActive(!spanishIsActive)}
          >
            {spanishIsActive ? headerTitle.esp : headerTitle.eng}
          </h1>
      
          <p className='text-center my-4'>
            {spanishIsActive ? headerSubtitle.esp : headerSubtitle.eng}
          </p>
          
          <LearnMoreBtn boxStyles={"flex justify-around my-5"} spanishIsActive={spanishIsActive}>
            <div className=''>
              {spanishIsActive ? 
                <ArrowBtn text='Comprar' path={"/images/white-arrow.svg"} /> : 
                <ArrowBtn text='Buy' path={"/images/white-arrow.svg"} />
              }
            </div>
          </LearnMoreBtn>
        
        </div>
    
      </div>
  )
}
