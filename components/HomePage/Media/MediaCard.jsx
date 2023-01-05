import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageProvider';

export const MediaCard = ({src, alt, style = '', text, pageLink}) => {

  const [flip, setFlip] = useState(false);
  
  const {spanishIsActive} = useContext(LanguageContext)

  return (
    <div 
      onMouseOver={() => setFlip(true)}
      onMouseOut={() => setFlip(false)}
      className={`${style} bg-white m-2 md:w-[311px] md:h-[173px] flex items-center ${flip && 'animate-flip'}`}
    >
      <img src={src} alt={alt} className={`${flip && 'hidden'}`} />
      <div className={`${flip ? 'flex p-8' : 'hidden'} text-black flex-col`}>
        <p className=''>{spanishIsActive? text.esp : text.eng}</p>
        <a 
          href={pageLink} 
          target='_blank' 
          rel="noreferrer" 
          className='text-[#764AF1] flex items-center gap-4 text-[16px] font-medium'
        >
          Read more 
          <img 
            src='/images/zones/purpleArrow.svg' 
            alt="Arrow" 
            className='h-[10px] w-[10px]' 
          />
        </a>
      </div>
    </div>
  )
}
