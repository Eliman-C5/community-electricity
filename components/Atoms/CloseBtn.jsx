import React from 'react'

export const CloseBtn = ({method, style}) => {
  return (
    <button 
      className={`text-[#9885F7] w-[22px] h-[22px] ${style}`}
      onClick={() => method(false)}
    >
        X
    </button>
  )
}
