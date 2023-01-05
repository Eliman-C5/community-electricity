import React from 'react'
import { TextItem } from '../HomePage/ElectricAccount/TextItem'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'

export const GluCardsWrapper = ({arr, lastListItem}) => {

  const {spanishIsActive} = useContext(LanguageContext)

  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2">
        
        <ul className=''>
          {
            spanishIsActive ?
              arr.esp.map(info => (
                <TextItem key={info.id} id={info.id} text={info.text} reference={lastListItem} />)) :
              arr.eng.map(info => (
                <TextItem key={info.id} id={info.id} text={info.text} reference={lastListItem} />
            ))
          }
        </ul>
        
    </div>
  )
}
