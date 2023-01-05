import React from 'react'

export const TextItem = ({id, text, reference = 4}) => {
  return (
    <li className={`mt-4 p-4 ${id === reference ? 'border-0' : 'border-b border-white'} flex`}> 
      <div className='text-[24px] font-bold mr-8 relative -top-[5px]'>{id}</div>
      <span>{text}</span>
    </li>
  )
}
