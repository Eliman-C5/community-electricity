import React from 'react'

const items = [
  {
    id: 1, 
    text: {
      esp: 'INTERNET',
      eng: 'INTERNET'
    }
  },
  {
    id: 2, 
    text: {
      esp: 'ELECTRICIDAD',
      eng: 'ELECTRICITY'
    }
  },
  {
    id: 3, 
    text: {
      esp: 'RESILIENCIA',
      eng: 'RESILIENCY'
    }
  },
  {
    id: 4, 
    text: {
      esp: 'RECOMPENSADO',
      eng: 'GET REWARDED'
    }
  }
]

export const ComingSoon = ({spanishIsActive}) => {
  return (
    <div className='w-full flex flex-col justify-center gap-8'>
      <h2 className='title-mobile text-center uppercase'>
        {
          spanishIsActive ?
          'El servicio de internet de energía para el hogar' :
          'The energy internet home service'
        }
      </h2>
      <div className="flex justify-between gap-2 md:gap-4">
      {
        items.map(item => (
          <div className="" key={item.id}>
            <img src="/images/services/services-1.svg" alt="" />
            <p className='text-[12px]'>
            {
              spanishIsActive ?
              item.text.esp :
              item.text.eng
            }
            </p>
          </div>
        ))
      }
      </div>
      <p className='text-[#764AF1] title-mobile text-center w-full'>
      {
        spanishIsActive ?
        'Proximamente!' :
        'Comming Soon!'
      }
      </p>
    </div>
  )
}