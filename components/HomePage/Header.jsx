import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { headerTitle, headerSubtitle } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'

export const Header = () => {

  const {spanishIsActive} = useContext( LanguageContext )

  return (
      // Optimizar codigo de tailwind
      <div className='bg-[url("/images/header.png")] bg-center bg-no-repeat bg-cover h-[90vh] grid place-content-center max-w-[1441px] mx-auto'>
    
        <div className="w-4/5 mx-auto">
      
          <h1 className='title text-center'>
            {spanishIsActive ? headerTitle.esp : headerTitle.eng}
          </h1>
      
          <p className='text-center'>
            {spanishIsActive ? headerSubtitle.esp : headerSubtitle.eng}
          </p>
          
          <div className="flex justify-around my-5">
            <span className='font-semibold'>{spanishIsActive ? 'Aprender más' : 'Learn more'}</span>
            <span className='font-semibold'>{spanishIsActive ? 'Comprar' : 'Buy'}</span>
          </div>
        
        </div>
    
      </div>
  )
}
