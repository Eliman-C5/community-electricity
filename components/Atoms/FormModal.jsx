import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { PurpleBtn } from './PurpleBtn'

//MEJORAR
export const FormModal = () => {

  const {spanishIsActive, setSpanishIsActive, isModalActive, setIsModalActive} = useContext( LanguageContext ) 
  
  return (
    <div className={`${isModalActive ? 'flex ' : 'hidden'} w-full h-screen fixed left-0 top-0 bg-black/50 z-50 items-center justify-center`}>
      <form
        className="flex flex-col justify-center gap-4 lg:gap-12 py-4 px-12 mx-8 md:mx-auto rounded bg-[#F2F2F2] max-w-[656px] max-h-[460px] lg:h-full"
        onClick={() => setIsModalActive(false)}
      >
        <h4 className='text-black title md:text-[35px]'>
          {
            spanishIsActive ?
            'Completa el formulario para comenzar a utilizar tu cuenta de banco eléctrico' :
            'Complete the form to start using your electric bank account'
          }
        </h4>
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder={ spanishIsActive ? 'Nombre' : 'Name'  }
            className='outline-0 pl-3 text-black w-full h-[40px]'
          />
          <input 
            type="email" 
            placeholder={ spanishIsActive ? 'Correo eléctronico' : 'Email'  }
            className='outline-0 pl-3 text-black w-full h-[40px]'
          />
          <PurpleBtn text={ spanishIsActive ? 'Enviar' : 'Submit'  } customStyle='max-w-[120px] md:w-full h-[40px]'/>
        </div>
      </form>
    </div>
  )
}
