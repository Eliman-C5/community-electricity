import React, { useEffect, useState } from 'react'
import { createContext } from "react"

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {

  const [spanishIsActive, setSpanishIsActive] = useState(false)
  
  const handleSpanish = () => {
    localStorage.setItem('isTranslated', JSON.stringify(true))
    setSpanishIsActive(true)
    console.log(JSON.parse(localStorage.getItem('isTranslated')))
  }
  
  const handleEnglish = () => {
    localStorage.setItem('isTranslated', JSON.stringify(false))
    setSpanishIsActive(false)
    console.log(JSON.parse(localStorage.getItem('isTranslated')))
  }
  
  useEffect(() => {
  
    spanishIsActive ?
    handleSpanish() :
    handleEnglish()
  
  }, [spanishIsActive])
  
  return (
    <LanguageContext.Provider value={{
      spanishIsActive,
      setSpanishIsActive,
    }}>
      {children}
    </LanguageContext.Provider>
  )
}
