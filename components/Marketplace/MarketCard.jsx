import React, { useContext, useState } from 'react'
import { CardsBtn } from './CardsBtn';
import { LanguageContext } from '../../context/LanguageProvider'

export const MarketCard = ({children, name, text, src, style = 'xl:ml-auto'}) => {

  const {spanishIsActive} = useContext( LanguageContext )

  const [counter, setCounter] = useState(1)
  
  const increment = () => setCounter(counter + 1);
  
  const decrement = () => setCounter(counter - 1);

  //Reducir estilos tailwind
  //Componetizar
  return (
    <div className={`${style} market-card sm:w-full min-[1440px]:w-[572px] xl:place-self-center xl:h-[380px] sm:flex-row md:mx-0 bg-[#262626]/50 rounded-2xl md:p-8 lg:justify-around`}>
      
      
      <img src={src} alt={name} className='relative z-20 max-w-[161px] h-fit' />
      
      <div className="flex flex-col">
        <h4 className='text-[22px] font-bold'>{name}</h4>
        <p className='text-[16px]'>{text}</p>
        {children}
        <div className="flex w-full mt-4 justify-between">
          <CardsBtn onClick={decrement} symbol='-' />
          <span className='text-[16px]'>{counter}</span>
          <CardsBtn onClick={increment} symbol='+' /> 
          <button className='bg-white text-[#9885F7] w-[130px] md:w-[149px] h-[30px] md:h-[45px]'>
          {
            spanishIsActive ?
            'Contáctanos' :
            'Contact us'
          }
          </button>
        </div>
      </div>
      
    </div>
  )
}
