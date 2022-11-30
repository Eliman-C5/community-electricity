import React, { useContext} from 'react'
import { LanguageContext } from '../../../context/LanguageProvider'
import { footer } from '../../../data/text'
import Section from '../../Wrappers/NormalAndFadeInSection'
import { FooterIcons } from './FooterIcons'
import FadeInSection from '../../Wrappers/FadeInSection'
import { useForm } from '../../../hooks/useForm'

export const Footer = () => {

  const {spanishIsActive} = useContext(LanguageContext);
  
  const {email, setEmail, formConfirmation, setFormConfirmation, handleSubmit} = useForm();

  return (
    <Section>
      <div className="flex gap-0 md:gap-28 py-16 justify-center">
      
        <div className="">
          <img src="/images/cubos-footer.png" alt="" className='w-[236px] mr-auto md:mr-0' />
          <h2 className='text-[18px]'>Community Electricity</h2>
          <p className='text-[14px] md:text-[16px]'>
            {
              spanishIsActive ?
              footer.join_prosumer_network.esp :
              footer.join_prosumer_network.eng
            }
          </p>
          <form 
            className='flex flex-col md:flex-row gap-6 mt-4'
            onSubmit={handleSubmit}
          >
            {/* Reducir codigo tailwind */}
            <input 
              type="email"
              placeholder='Email'
              className='outline-0 pl-3 text-black w-full h-[40px] md:w-2/3 '
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className='bg-[#9885F7] hover:opacity-80 rounded w-full md:w-[120px] h-[40px]'>
              {
                spanishIsActive ?
                'Suscríbete' :
                'Suscribe'
              }
            </button>
          </form>
          {formConfirmation && (
          <FadeInSection>
            <p className="mt-4">
              Thanks for your subsrciption, you will receive the latest info
              about Community.io!
            </p>
          </FadeInSection>
          )}
        </div>
        
        <div className="hidden md:block">
          <img src="/images/footerpuzzle.png" alt="" />
        </div>
      </div>
      
      <div className="flex justify-center gap-0 md:gap-28">
      
        <p className='hidden md:block w-[488px]'>
        {
          spanishIsActive ?
          footer.we_are_creating.esp :
          footer.we_are_creating.eng
        }
        </p>
        
        <FooterIcons />

      </div>
    </Section>
  )
}
