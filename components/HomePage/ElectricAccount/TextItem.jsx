import React from 'react'

export const TextItem = ({id, text}) => {
  return (
    <li className={`mt-4 p-4 ${id === 3 ? 'border-0' : 'border-b-2 border-white'}`}> 
      <span className='text-[24px] font-bold mr-4'>{id}</span> {text}
    </li>
  )
}
