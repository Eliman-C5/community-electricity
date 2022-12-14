import React, { useContext} from 'react'
import { TranslateBtn } from '../TranslateBtn'
import { LanguageContext } from '../../../context/LanguageProvider'

export const NavbarBtns = () => {

  const {spanishIsActive, setIsModalActive} = useContext( LanguageContext ) 

  return (
    <div className="my-auto hidden md:flex gap-4">
        <button 
          className='text-white bg-black my-auto h-[33px] w-[130px] px-[10px]'
          onClick={() => setIsModalActive(true)}
        >
          {
            spanishIsActive ?
            'Contáctanos' :
            'Contact us'
          }
        </button>
        
        
        <TranslateBtn />
    </div>
  )
}
