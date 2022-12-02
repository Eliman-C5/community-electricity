import React from 'react'

export const HeaderWrapper = ({styles, children}) => {
  return (
    <div className={`${styles} bg-no-repeat flex items-center mx-auto`}>
      {children}
    </div>
  )
}
