import React from 'react'
import { Paths } from './Paths'
import { CloseBtn } from '../CloseBtn'
import { TranslateBtn } from '../TranslateBtn'

export const MobileNavbar = ({setIsMenuActive, isMenuActive}) => {
  return (
    <div className={`${isMenuActive ? 'flex' : 'hidden'} w-full h-screen md:hidden fixed left-0 top-0 bg-black z-50`}>
    
      <Paths 
        styles={"flex flex-col w-full md:hidden rounded items-center py-4 mt-12"}
        linkStyles={' w-full pb-4 pt-12 pl-10 border-b text-white text-[16px]'}
      >
        <div className="flex justify-between w-full">
          
          <TranslateBtn style='ml-4' />
          
          <CloseBtn method={setIsMenuActive} style='font-bold mr-4' />
        </div>
        
      </Paths>
    
    </div>
  )
}
