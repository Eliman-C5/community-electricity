import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { headerTitle, headerSubtitle } from '../../data/text'

export const Header = () => {

  const {spanishIsActive, setSpanishIsActive} = useContext( LanguageContext )

  return (
      // Optimizar codigo de tailwind
      <div className='min-h-[90vh] md:min-h-[680px] max-h-[837px] grid place-content-center mx-auto relative'>
      
        <video src="/images/header.mp4" autoPlay muted loop className='video-background'></video>
    
        <div className="w-full md:w-11/12 mx-auto z-10 relative">
      
          <h1 className='title-mobile md:title text-center'>
            {spanishIsActive ? headerTitle.esp : headerTitle.eng}
          </h1>
      
          <p className='text-center my-4'>
            {spanishIsActive ? headerSubtitle.esp : headerSubtitle.eng}
          </p>
          
          <div className="flex justify-around my-5">
            <span 
              className='font-semibold'
              onClick={() => setSpanishIsActive(!spanishIsActive)}
            >
              {spanishIsActive ? 'Saber más >' : 'Learn more >'}
            </span>
            <span className='font-semibold'>{spanishIsActive ? 'Comprar' : 'Buy'}</span>
          </div>
        
        </div>
    
      </div>
  )
}
