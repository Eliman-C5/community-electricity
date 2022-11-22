import React from 'react'
import { mediaImg } from '../../data/text'
import { MediaCard } from '../Atoms/MediaCard'
import Section from '../Wrappers/NormalAndFadeInSection'

export const Media = () => {
  return (
    <Section>
      <h2 className='title uppercase text-center mt-[100px] mb-[60px]'>Media</h2>
      
      <div className="flex gap-4 my-[10px] justify-center">
        {
          mediaImg.first.map( img => (
            <MediaCard src={img.src} alt={img.alt} key={img.id} />
          ))
        }
      </div>
      
      <div className="flex gap-4 my-[10px] justify-center">
        {
          mediaImg.second.map( img => (
            <MediaCard src={img.src} alt={img.alt} key={img.id} />
          ))
        }
      </div>
      
      <div className="flex gap-4 my-[10px] justify-center">
        {
          mediaImg.third.map( img => (
            <MediaCard src={img.src} alt={img.alt} key={img.id} />
          ))
        }
      </div>
    </Section>
  )
}