import React from 'react'
import Section from '../Wrappers/NormalAndFadeInSection'

const pictures = [
  {id: 1, src: '/images/Energy coalition.png', alt: 'Energy coalition'},
  {id: 2, src: '/images/Amepere energy.png', alt: 'Amepere energy'},
  {id: 3, src: '/images/energy web.png', alt: 'energy web'},
  {id: 4, src: '/images/google.png', alt: 'google'},
  {id: 5, src: '/images/pivot energy.png', alt: 'pivot energy'},
  {id: 6, src: '/images/carbon parks.png', alt: 'carbon parks'},
]

export const Partners = () => {
  return (
    <Section>
      <h2 className='title uppercase text-center mt-[100px] mb-[60px]'>Partners</h2>
      <div className='flex justify-between'>
        {
          pictures.map(pic => (
            <img 
              src={pic.src} 
              alt={pic.alt} 
              key={pic.id} 
              className='w-[150px] h-[50px]' 
            />
          ))
        }
      </div>
    </Section>
  )
}
