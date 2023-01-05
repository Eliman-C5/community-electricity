import React, { useContext } from 'react'
import { mediaImg } from '../../data/text'
import { MediaRow } from './Media/MediaRow'
import Section from '../Wrappers/NormalAndFadeInSection'
import { LanguageContext } from '../../context/LanguageProvider'
import { MediaCard } from './Media/MediaCard'

export const Media = () => {

  const {spanishIsActive} = useContext(LanguageContext);
  
  return (
    <Section>
    
      <h2 className='title-mobile md:title uppercase text-center mb-[20px]'>
        {
          spanishIsActive ?
          'Medios' :
          'Media'
        }
      </h2>
      
      <MediaRow cards={mediaImg.first} />
      <MediaRow cards={mediaImg.second} />
      <MediaRow cards={mediaImg.third} />
      
      <div className="grid grid-cols-2 sm:hidden">
      {
        mediaImg.first.map(img => (
          <MediaCard src={img.src} alt={img.alt} key={img.id} pageLink={img.link} text={img.text} style='shrink' />
        ))
      }
      {
        mediaImg.second.map(img => (
          <MediaCard src={img.src} alt={img.alt} key={img.id} pageLink={img.link} text={img.text} style='shrink' />
        ))
      }
      {
        mediaImg.third.map(img => (
          <MediaCard src={img.src} alt={img.alt} key={img.id} pageLink={img.link} text={img.text} style='shrink' />
        ))
      }
      </div>

    </Section>
  )
}
