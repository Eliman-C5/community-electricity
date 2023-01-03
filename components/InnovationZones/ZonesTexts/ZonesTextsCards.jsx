import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageProvider'
import { zonesTexts } from '../../../data/text'

export const ZonesTextsCards = () => {

  const {spanishIsActive} = useContext(LanguageContext)

  return (
    <ul className='list-disc'>
        {
          zonesTexts.map(item => (
            <li key={item.id} className='ml-4'>
              {
                spanishIsActive ?
                item.text.esp :
                item.text.eng
              }
            </li>
          ))
        }
    </ul>
  )
}
