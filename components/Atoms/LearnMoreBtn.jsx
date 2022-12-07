import Link from 'next/link'
import React from 'react'
import { ArrowBtn } from './ArrowBtn'

export const LearnMoreBtn = ({children, boxStyles, spanishIsActive, link}) => {
  return (
    <div className={boxStyles}>
      
      <Link href={`${link}`}>
          {spanishIsActive ? 
            <ArrowBtn text='Saber más' path={"/images/white-arrow.svg"} /> : 
            <ArrowBtn text='Learn more' path={"/images/white-arrow.svg"} />
          }
      </Link>
      
      {children}
    </div>
  )
}
