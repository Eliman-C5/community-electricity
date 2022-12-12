import React from 'react'

const icons = [
  {id: 1, name: 'Twitter', src: '/images/social/twitter.svg', link: 'https://twitter.com/commenergyinc?lang=en'},
  {id: 2, name: 'Linkedin', src: '/images/social/linkedin.svg', link: 'https://www.linkedin.com/company/communityelectricity'},
  {id: 3, name: 'Instagram', src: '/images/social/instagram.svg', link: 'https://instagram.com/communityelectricity?igshid=YmMyMTA2M2Y='},
  {id: 4, name: 'Youtube', src: '/images/social/youtube.svg', link: 'https://youtube.com/@communityelectricity3687'},
]

export const FooterIcons = () => {
  return (
    <div className='flex gap-4 md:w-[507px] justify-end'>
      
        {
          icons.map( icon => (
            <a className="flex flex-col items-center" key={icon.id} href={icon.link} target='_blank' rel="noreferrer">
              <img className='h-[24px] w-[24px]' src={icon.src} alt={icon.name} />
              <span>{icon.name}</span>
            </a>
          ))
        }
      
    </div>
  )
}
