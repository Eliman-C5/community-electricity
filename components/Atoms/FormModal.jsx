import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { PurpleBtn } from './PurpleBtn'
import { CloseBtn } from './CloseBtn'

//MEJORAR
export const FormModal = () => {

  const {spanishIsActive, setSpanishIsActive, isModalActive, setIsModalActive} = useContext( LanguageContext ) 
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className={`${isModalActive ? 'flex ' : 'hidden'} w-full h-screen fixed left-0 top-0 bg-black/50 z-50 items-center justify-center`}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-around relative p-5 sm:p-8 lg:p-12 mx-4 sm:mx-6 md:mx-auto rounded bg-[#FFFF] max-w-[656px] max-h-[460px] lg:h-full"
      >
        <CloseBtn method={setIsModalActive} style='absolute right-0 top-0 mt-2 mr-2 md:mt-4 md:mr-4' />
        
        <h4 className='text-black font-semibold text-[22px] md:leading-10 md:text-[35px] mt-2'>
          {
            spanishIsActive ?
            'Completa el formulario para comenzar a utilizar tu cuenta de banco eléctrico' :
            'Complete the form to start using your electric bank account'
          }
        </h4>
        
        <div className="h-[1px] w-1/2 bg-black my-4"></div>
        
        <div className="flex flex-col gap-4">
          <div className="flex relative">
            <input 
              type="text" 
              placeholder={ spanishIsActive ? 'Nombre' : 'Name'  }
              className='outline-0 pl-12 text-black bg-[#F5F5F5] w-full h-[40px]'
            />
            <img src="/images/user.svg" alt="" className='absolute left-3 top-[19%]' />
          </div>
          
          <div className="flex relative">
            <input 
              type="email" 
              placeholder={ spanishIsActive ? 'Correo eléctronico' : 'Email'  }
              className='outline-0 pl-12 text-black bg-[#F5F5F5] w-full h-[40px]'
            />
            <img src="/images/mail.svg" alt="" className='absolute left-3 top-[19%]' />
          </div>
          
          <PurpleBtn text={ spanishIsActive ? 'Enviar' : 'Submit'  } customStyle='max-w-[120px] md:w-full h-[40px]'/>
        </div>
        
      </form>
    </div>
  )
}
