import React, { useContext } from 'react'
import { mediaImg } from '../../data/text'
import { MediaRow } from './Media/MediaRow'
import Section from '../Wrappers/NormalAndFadeInSection'
import { LanguageContext } from '../../context/LanguageProvider'

export const Media = () => {

  const {spanishIsActive} = useContext(LanguageContext);
  
  return (
    <Section>
    
      <h2 className='title-mobile md:title uppercase text-center mt-[100px] mb-[60px]'>
        {
          spanishIsActive ?
          'Medios' :
          'Media'
        }
      </h2>
      
      <MediaRow cards={mediaImg.first} />
      <MediaRow cards={mediaImg.second} />
      <MediaRow cards={mediaImg.third} />

    </Section>
  )
}
