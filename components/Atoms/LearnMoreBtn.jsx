import React from 'react'
import { ArrowBtn } from './ArrowBtn'

export const LearnMoreBtn = ({children, boxStyles, spanishIsActive}) => {
  return (
    <div className={boxStyles}>
    
      <div className=''>
          {spanishIsActive ? 
            <ArrowBtn text='Saber más' path={"/images/white-arrow.svg"} /> : 
            <ArrowBtn text='Learn more' path={"/images/white-arrow.svg"} />
          }
      </div>
      
      {children}
    </div>
  )
}
