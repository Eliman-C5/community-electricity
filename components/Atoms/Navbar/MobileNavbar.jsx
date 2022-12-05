import React from 'react'
import { Paths } from './Paths'

export const MobileNavbar = ({setIsMenuActive, isMenuActive}) => {
  return (
    <div className={`${isMenuActive ? 'grid' : 'hidden'} w-full h-screen md:hidden fixed left-0 top-0 bg-black/75 z-50 place-content-center`}>
    
      <Paths 
        styles={"flex flex-col md:hidden w-[250px] mx-auto bg-white rounded justify-center items-center py-4"}
        linkStyles={'border w-full text-center py-4'}
      >
        <button 
          className='text-black ml-auto mr-6 mb-4'
          onClick={() => setIsMenuActive(false)}
        >
          X
        </button>
      </Paths>
    
    </div>
  )
}
