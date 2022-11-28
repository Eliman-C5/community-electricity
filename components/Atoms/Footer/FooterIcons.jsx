import React from 'react'

const icons = [
  {id: 1, name: 'Twitter', src: '/images/social/twitter.svg'},
  {id: 2, name: 'Linkedin', src: '/images/social/linkedin.svg'},
  {id: 3, name: 'Medium', src: '/images/social/medium.svg'},
  {id: 4, name: 'Youtube', src: '/images/social/youtube.svg'},
]

export const FooterIcons = () => {
  return (
    <div className='flex gap-4 md:w-[507px] justify-end'>
      
        {
          icons.map( icon => (
            <div className="flex flex-col items-center" key={icon.id}>
              <img className='h-[24px] w-[24px]' src={icon.src} alt={icon.name} />
              <span>{icon.name}</span>
            </div>
          ))
        }
      
    </div>
  )
}
