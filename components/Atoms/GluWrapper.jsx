import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { TheGluTitle } from '../HomePage/Dapp/TheGluTitle'
import { ArrowBtn } from './ArrowBtn'

export const GluWrapper = ({gluTitle, gluImg, subtitle, video = false}) => {

  const {spanishIsActive, setIsModalActive} = useContext(LanguageContext)

  return (
    <div className="w-full md:w-1/2">
        
      <TheGluTitle title={gluTitle} align='' />
          
      {
        video ?
        <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1671112467/Community/community-gif_ngzyfg.mp4" autoPlay muted loop playsInline className={``} /> :
        <img src={gluImg} alt={gluTitle} />
      }
          
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
