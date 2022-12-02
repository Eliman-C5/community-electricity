import React, { useState } from 'react'
import { CardsBtn } from './CardsBtn';

export const MarketCard = ({children, name, text, src, cardHeight}) => {

  const [counter, setCounter] = useState(1)
  
  const increment = () => setCounter(counter + 1);
  
  const decrement = () => setCounter(counter - 1);

  //Reducir estilos tailwind
  //Componetizar
  return (
    <div className={`w-full sm:w-[312px] md:w-[572px] md:h-[330px] flex flex-col md:flex-row gap-4 mx-auto md:mx-0 bg-[#262626]/50 rounded-2xl justify-center items-center p-4 md:p-8`}>
      
      
      <img src={src} alt={name} className='relative z-20 max-w-[161px] h-fit' />
        {/* <div className="absolute bg-gradient-to-r from-[#CBC7E0] to-[#7869C2] blur-md h-[121px] w-[80%] top-[45%] -rotate-[20deg] rounded-full opacity-10"></div> */}
      
      <div className="flex flex-col">
        <h4 className='text-[22px] font-bold'>{name}</h4>
        <p className='text-[16px]'>{text}</p>
        {children}
        <div className="flex w-full mt-4 justify-between">
          <CardsBtn onClick={decrement} symbol='-' />
          <span className='text-[16px]'>{counter}</span>
          <CardsBtn onClick={increment} symbol='+' /> 
          <button className='bg-white text-[#9885F7] w-[130px] md:w-[149px] h-[30px] md:h-[45px]'>Contact us</button>
        </div>
      </div>
      
    </div>
  )
}
