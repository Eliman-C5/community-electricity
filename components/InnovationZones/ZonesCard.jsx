import React, { useContext } from 'react'
import { ArrowBtn } from '../Atoms/ArrowBtn'
import { LanguageContext } from '../../context/LanguageProvider'

export const ZonesCard = ({mainImg, title, firstText, secondText , specialText, path, style = ''}) => {

  const {spanishIsActive, setIsModalActive} = useContext( LanguageContext );

  return (
    <div className={`${style} w-[316px] md:w-full xl:w-[500px] 2xl:w-[560px] h-[480px] md:h-[405px] bg-[#262626] shrink flex flex-col rounded-2xl mb-2`}>
      <div className="bg-white w-[316px] md:w-full h-[216px] rounded-2xl flex">
        <img src={mainImg} alt={title} className='w-[313] h-[142px] rounded-2xl mx-auto my-auto' />
      </div>
      <div className="flex flex-col gap-2 p-8 2xl:p-6">
        <h4 className='text-[18px] font-semibold uppercase'>{title}</h4>
        <p className='text-[#BCAEFF]'>{firstText}</p>
        <p className='font-medium text-[16px]'>{secondText}</p>
        {
          specialText && <p className='font-medium text-[16px]'>{specialText}</p>
        }
        <ArrowBtn 
          text={
            spanishIsActive ?
            'Saber más' :
            'Learn more'
          }
          path={path}
          customStyle='text-[#BCAEFF] font-semibold w-full cursor-pointer'
          onClick={() => setIsModalActive(true)}
        />
      </div>
    </div>
  )
}
