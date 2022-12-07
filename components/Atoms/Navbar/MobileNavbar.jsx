import React from 'react'
import { Paths } from './Paths'

export const MobileNavbar = ({setIsMenuActive, isMenuActive}) => {
  return (
    <div className={`${isMenuActive ? 'flex' : 'hidden'} w-full h-screen md:hidden fixed left-0 top-0 bg-black z-50`}>
    
      <Paths 
        styles={"flex flex-col w-full md:hidden rounded items-center py-4 mt-12"}
        linkStyles={' w-full pb-4 pt-12 pl-10 border-b text-white text-[16px]'}
      >
        <button 
          className='text-[#9885F7] w-[22px] h-[22px] font-bold ml-auto mr-6 mb-4'
          onClick={() => setIsMenuActive(false)}
        >
          X
        </button>
      </Paths>
    
    </div>
  )
}
