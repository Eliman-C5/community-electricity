import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { programsText } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'

export const ProgramsText = () => {

  const {spanishIsActive} = useContext( LanguageContext )

  return (
    <Section>
      <div className="max-w-[1135px] mx-auto flex flex-col lg:flex-row gap-4">
        
        <div className="xl:pr-16">
          <h4 className='title-mobile md:title'>
            {
              spanishIsActive ?
              programsText.title.esp :
              programsText.title.eng
            }
          </h4>
          <p className='text-[16px] mt-4'>
            {
              spanishIsActive ?
              <p className='text-[16px] mt-4'>
              Diseñamos, cofinanciamos, implementamos y administramos <span className='font-bold'>Programas de prosumidores para comunidades</span>, propietarios de bienes raíces, desarrolladores, corporaciones y empresas de servicios públicos. Prosumer as a Service, también conocido como PaaS, transforma a la perfección a los consumidores en prosumidores (productor, consumidor y comerciante de electricidad local limpia). El servicio incluye <span className='font-bold'>la implementación de activos de electricidad limpios y flexibles, gestión de energía e informes de impacto</span> adaptados a varios objetivos de descarbonización y energía renovable.
              </p> :
              <p className='text-[16px] mt-4'>
              We design, co-finance, implement and manage <span className='font-bold'>Prosumer Programs for communities</span>, real-estate owners, developers, corporations and utilities. Prosumer as a Service, also known as PaaS, seamlessly transforms consumers into prosumers (producer, consumer, and a trader of clean local electricity). The service includes <span className='font-bold'>implementing clean & flexible electricity assets, energy management, and impact reporting</span> tailored to various decarbonization and renewable energy goals.
              </p>
            }
          </p>
        </div>
        
        <img src="/images/programs/programsTextImg.png" alt="" className='hidden lg:block w-fit h-fit my-auto mx-auto' />
        
        <img src="/images/programs/programsTextImgMobile.png" alt="" className='block lg:hidden w-full h-fit mx-auto' />
        
      </div>
    </Section>
  )
}
