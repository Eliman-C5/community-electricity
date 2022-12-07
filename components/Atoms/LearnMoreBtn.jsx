import Link from 'next/link'
import React from 'react'
import { ArrowBtn } from './ArrowBtn'

export const LearnMoreBtn = ({children, boxStyles, spanishIsActive, link, newStyles, path=true}) => {
  return (
    <div className={boxStyles}>
      
      <Link href={`${link}`}>
          {spanishIsActive ? 
            <ArrowBtn customStyle={newStyles} text='Saber más' path={path ? '/images/white-arrow.svg' : '/images/black-arrow.svg'} /> : 
            <ArrowBtn customStyle={newStyles} text='Learn more' path={path ? '/images/white-arrow.svg' : '/images/black-arrow.svg'} />
          }
      </Link>
      
      {children}
    </div>
  )
}
