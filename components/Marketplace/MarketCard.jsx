import React, { useState } from 'react'

export const MarketCard = ({children, name, text, src, cardHeight}) => {

  const [counter, setCounter] = useState(1)
  
  const increment = () => setCounter(counter + 1);
  
  const decrement = () => setCounter(counter - 1);

  //Reducir estilos tailwind
  //Componetizar
  return (
    <div className={`w-[312px] md:w-[368px] ${cardHeight} flex flex-col gap-6 mx-auto md:mx-0 bg-[#262626]/50 rounded-2xl justify-center items-center p-4`}>
      
      
      <div className="relative flex justify-center w-full h-[260px]">
        <img src={src} alt={name} className='relative z-20' />
        <div className="absolute bg-gradient-to-r from-[#CBC7E0] to-[#7869C2] blur-md h-[121px] w-[80%] top-[45%] -rotate-[20deg] rounded-full opacity-10"></div>
      </div>
      
      <div className="flex flex-col">
        <h4 className='text-[22px] font-bold'>{name}</h4>
        <p className='text-[16px]'>{text}</p>
        {children}
      </div>
      
      <div className="flex w-full gap-4 justify-between">
      
        <button onClick={decrement} className='bg-white text-[#9885F7] w-[40px] h-[35px]'>
          -
        </button>
        
        <span>{counter}</span>
        
        <button onClick={increment} className='bg-white text-[#9885F7] w-[40px] h-[35px]'>
          +
        </button>
        
        <button className='bg-white text-[#9885F7] w-[149px] h-[45px]'>Contact us</button>
      </div>
      
    </div>
  )
}
