import React, { useState } from 'react'
import { createContext } from "react"

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {

  const [spanishIsActive, setSpanishIsActive] = useState(false)
  
  return (
    <LanguageContext.Provider value={{
      spanishIsActive,
      setSpanishIsActive,
    }}>
      {children}
    </LanguageContext.Provider>
  )
}
