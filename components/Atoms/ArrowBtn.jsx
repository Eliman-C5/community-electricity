import React from 'react'

export const ArrowBtn = ({text, path}) => {
  return (
    <div className="flex gap-3 font-semibold">
      {text} <img src={path} alt="flecha" />
    </div>
  )
}
