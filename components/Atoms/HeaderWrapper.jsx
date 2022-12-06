import React from 'react'

export const HeaderWrapper = ({styles, children}) => {
  return (
    <div className={`${styles} bg-no-repeat bg-center bg-cover w-full flex items-center mx-auto`}>
      {children}
    </div>
  )
}
