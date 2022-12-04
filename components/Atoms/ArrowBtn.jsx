import React from 'react'

export const ArrowBtn = ({text, path, customStyle}) => {
  return (
    <div className={`flex gap-3 font-semibold ${customStyle}`}>
      {text} <img src={path} alt="Arrow" />
    </div>
  )
}
