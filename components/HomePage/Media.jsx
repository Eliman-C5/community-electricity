import React, { useContext } from 'react'
import { mediaImg } from '../../data/text'
import { MediaCard } from '../Atoms/MediaCard'
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
      
      <div className="flex flex-wrap gap-4 my-[10px] justify-start sm:justify-center md:justify-start xl:justify-center">
        {
          mediaImg.first.map( img => (
            <MediaCard src={img.src} alt={img.alt} key={img.id} />
          ))
        }
      </div>
      
      <div className="flex flex-wrap gap-4 my-[10px] justify-start sm:justify-center md:justify-start xl:justify-center">
        {
          mediaImg.second.map( img => (
            <MediaCard src={img.src} alt={img.alt} key={img.id} />
          ))
        }
      </div>
      
      <div className="flex flex-wrap gap-4 my-[10px] justify-start sm:justify-center md:justify-start xl:justify-center">
        {
          mediaImg.third.map( img => (
            <MediaCard src={img.src} alt={img.alt} key={img.id} />
          ))
        }
      </div>
    </Section>
  )
}
