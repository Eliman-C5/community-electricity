import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { TheGluTitle } from '../HomePage/Dapp/TheGluTitle'
import { ArrowBtn } from './ArrowBtn'

export const GluWrapper = ({gluTitle, gluImg, subtitle}) => {

  const {spanishIsActive, setIsModalActive} = useContext(LanguageContext)

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
      
      {
        spanishIsActive ?
        <ArrowBtn text='Saber más' path={'/images/white-arrow.svg'} customStyle='cursor-pointer' onClick={() => setIsModalActive(true)} /> :
        <ArrowBtn text='Learn more' path={'/images/white-arrow.svg'} customStyle='cursor-pointer' onClick={() => setIsModalActive(true)} />
      }

    </div>
  )
}
