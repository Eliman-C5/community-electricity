import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { TheGluTitle } from '../HomePage/Dapp/TheGluTitle'


export const GluWrapper = ({gluTitle, gluImg, subtitle}) => {

  const {spanishIsActive} = useContext(LanguageContext)

  return (
    <div className="w-full md:w-1/2">
        
      <TheGluTitle title={gluTitle} align='' />
          
      <img src={gluImg} alt={gluTitle} />
          
      <p className='my-4 font-bold'>
        {
          spanishIsActive ?
          subtitle.subtitleEsp :
          subtitle.subtitleEng
        }
      </p>

    </div>
  )
}
