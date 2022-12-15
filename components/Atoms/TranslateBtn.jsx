import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'

export const TranslateBtn = ({style = ''}) => {

  const {spanishIsActive, setSpanishIsActive} = useContext(LanguageContext)

  return (
    <div className={`flex gap-4 ${style} items-center`}>
      <span className='text-white sm:text-black text-[12px]'>EN</span>
        <label className="switch">
          <input type="checkbox" onClick={() => setSpanishIsActive(!spanishIsActive)} />
          <span className="slider round"></span>
        </label>
      <span className='text-white sm:text-black text-[12px]'>ES</span>
    </div>
  )
}
