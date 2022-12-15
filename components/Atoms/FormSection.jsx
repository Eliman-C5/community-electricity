import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { PurpleBtn } from './PurpleBtn'

export const FormSection = () => {

  const {spanishIsActive} = useContext( LanguageContext );
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Section>
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col gap-6 p-6 mt-4 rounded bg-[#F2F2F2] max-w-[1135px] mx-auto' 
        id='market-contact'
      >
        <div className="flex flex-col gap-4">
          <h4 className='text-black title md:text-[35px] '>
            {
              spanishIsActive ?
              'Interesado en saber más?' :
              'Interested in learning more?'
            }
          </h4>
          <p className='text-black'>{ spanishIsActive ? 'Contáctanos' : 'Contact us' }</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder={ spanishIsActive ? 'Nombre' : 'Name'  }
            className='outline-0 pl-3 text-black w-full h-[40px] md:w-2/3'
          />
          <input 
            type="email" 
            placeholder={ spanishIsActive ? 'Correo eléctronico' : 'Email'  }
            className='outline-0 pl-3 text-black w-full h-[40px] md:w-2/3'
          />
          <textarea name="" id="" cols="30" rows="10" 
            placeholder={ spanishIsActive ? 'Mensaje' : 'Message'  }
            className='outline-0 pl-3 text-black w-full h-[108px] md:h-[72px] md:w-2/3'></textarea>
          <PurpleBtn text={ spanishIsActive ? 'Enviar' : 'Send'  } customStyle='max-w-[120px] md:w-full h-[40px]'/>
        </div>
      </form>
    </Section>
  )
}
