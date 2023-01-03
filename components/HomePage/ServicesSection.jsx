import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { GifToggle } from './servicesHome/GifToggle'
import { ServiceTitle } from './servicesHome/ServiceTitle'
import { ServicesCards } from './servicesHome/ServicesCards'

export const ServicesSection = () => {

  const {spanishIsActive} = useContext(LanguageContext);
  
  return (
  <>
  
    <GifToggle spanishIsActive={spanishIsActive} style='block md:hidden' />
  
    <ServiceTitle spanishIsActive={spanishIsActive} style='block md:hidden' />
  
    <Section>
    
      <GifToggle spanishIsActive={spanishIsActive} style='hidden md:block' />
      
      <ServiceTitle spanishIsActive={spanishIsActive} style='hidden md:block' />
      
      <ServicesCards />
      
    </Section>

  </>
  )
}
