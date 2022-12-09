import React from 'react'

export const ArrowBtn = ({text, path, customStyle, onClick}) => {
  return (
    <div className={`flex gap-3 font-semibold ${customStyle}`} onClick={onClick}>
      {text} <img src={path} alt="Arrow" />
    </div>
  )
}
