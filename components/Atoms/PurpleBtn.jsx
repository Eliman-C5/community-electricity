import React from 'react'

export const PurpleBtn = ({text, onClick}) => {
  return (
    <button 
      className='bg-customPurple grid place-content-center rounded p-3 px-4'
      onClick={onClick}
    >
      {text}
    </button>
  )
}
