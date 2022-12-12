import React from 'react'

export const TextItem = ({id, text}) => {
  return (
    <li className={`mt-4 p-4 ${id === 4 ? 'border-0' : 'border-b border-white'} flex`}> 
      <div className='text-[24px] font-bold mr-8'>{id}</div>
      <span>{text}</span>
    </li>
  )
}
