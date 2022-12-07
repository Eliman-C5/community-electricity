import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { headerTitle, headerSubtitle } from '../../data/text'
import { LearnMoreBtn } from '../Atoms/LearnMoreBtn'
import { ArrowBtn } from '../Atoms/ArrowBtn'
import Link from 'next/link'

export const Header = () => {

  const {spanishIsActive, setSpanishIsActive} = useContext( LanguageContext )

  return (
      // Optimizar codigo de tailwind
      <div className='min-h-[90vh] md:min-h-[680px] max-h-[837px] grid place-content-center mx-auto relative px-4'>
      
        <video src="/images/header.mp4" autoPlay muted loop className='video-background'></video>
    
        <div className="w-full md:w-11/12 mx-auto z-10 relative">
      
          <h1 
            className='title-mobile md:text-[35px] text-center'
          >
            {spanishIsActive ? headerTitle.esp : headerTitle.eng}
          </h1>
      
          <p className='text-center my-4 text-[18px]'>
            {spanishIsActive ? headerSubtitle.esp : headerSubtitle.eng}
          </p>
          
          <LearnMoreBtn link='/programs' boxStyles={"flex justify-around my-5"} spanishIsActive={spanishIsActive}>
          
            <div className=''>
              {spanishIsActive ? 
                <Link href='/marketplace'>
                  <ArrowBtn text='Comprar' path={"/images/white-arrow.svg"} />
                </Link>
                 : 
                <Link href='/marketplace'>
                  <ArrowBtn text='Buy' path={"/images/white-arrow.svg"} />
                </Link>
              }
            </div>
          </LearnMoreBtn>
        
        </div>
    
      </div>
  )
}
