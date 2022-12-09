import React, { useState, useContext} from 'react'
import Link from 'next/link';
import { Paths } from './Paths'
import { MobileNavbar } from './MobileNavbar'
import { LanguageContext } from '../../../context/LanguageProvider'
import { FormModal } from '../FormModal'

//Crear estado global Reducer + Context para manejar bien el mobileNavbar
//Crear tambien una forma de que el cambio de idioma persista
export const Navbar = () => {

  const [isMenuActive, setIsMenuActive] = useState(false);
  
  const {spanishIsActive, setSpanishIsActive, isModalActive, setIsModalActive} = useContext( LanguageContext )  

  return (
    <nav className='bg-white relative z-50'>
    
      <div className="max-w-[1441px] h-[76px] mx-auto flex justify-between px-4">
        
        <Link 
          href={'/'} 
          className='flex items-center'
        >
          <img
            src="/images/logo.png"
            alt="Community logo"
            className="cursor-pointer w-[138px] h-[48px] bg-contain"
          />
        </Link>
        
        <Paths styles={"hidden md:flex items-center gap-10 pl-12"} />
        
        {/* Volverlo un componente */}
        <button 
          className='hidden md:block text-white bg-black my-auto h-[33px] px-[20px]'
          onClick={() => setIsModalActive(true)}
        >
          Contact us
        </button>
        
        <img 
          src="/images/hamburger-menu.svg" 
          alt="Menú hamburguesa" 
          className='w-[26px] h-[18px] my-auto md:hidden' 
          onClick={() => setIsMenuActive(true)}
        />
        
        <MobileNavbar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        
        <FormModal />
        
      </div>
      
    </nav>
  )
}
