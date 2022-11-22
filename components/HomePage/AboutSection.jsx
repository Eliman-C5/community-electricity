import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { aboutSection } from '../../data/text'
import { AboutSectionCard } from '../Atoms/AboutSectionCard'
import Section from '../Wrappers/NormalAndFadeInSection'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const AboutSection = () => {

  const {spanishIsActive} = useContext( LanguageContext )
  
  return (
    <Section>
      {/* Aun faltar compoenizar bien. Se esta haciendo rapido para mostrar al cliente */}
      <div className="w-4/6 mx-auto relative top-[-150px] px-2 bg-black">
        <h2 className='text-center text-[16px] font-semibold py-4'>Choose the decarbonization program that fits your profile</h2>
        <div className="flex justify-around items-center">
          <button className='bg-customPurple grid place-content-center rounded p-3 px-4'>Multi-family</button>
          <button className='bg-customPurple grid place-content-center rounded p-3 px-4'>Single family</button>
          <button className='bg-customPurple grid place-content-center rounded p-3 px-4'>Community solar</button>
          <button className='bg-customPurple grid place-content-center rounded py-3 px-4'>Community micro-hydro</button>
        </div>
      </div>
    
      <div className="flex gap-28 h-[469px]">
        
        <img src="/images/aboutHome.png" alt="About Home" className='w-[560px] h-[435px]' />
        
        <div className="flex flex-col gap-4 ml-auto">
        
          <h2 className='uppercase title'>
          {
            spanishIsActive ?
            'Acerca' :
            'About'
          }
          </h2>
        
          {
            spanishIsActive ?
            aboutSection.esp.map(info => <p key={info.id}>{info.text}</p>) :
            aboutSection.eng.map(info => <p key={info.id}>{info.text}</p>)
          }
        
          <span className='font-semibold'>Learn more</span>
        
        </div>
        
      </div>
      
      {/* Parte del carusel //navigation */}
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1.1}
      //scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='mt-[60px]'
    >
      <SwiperSlide>
        <AboutSectionCard />
      </SwiperSlide>
      <SwiperSlide>
        <AboutSectionCard />
      </SwiperSlide>
      <SwiperSlide>
        <AboutSectionCard />
      </SwiperSlide>
      <SwiperSlide>
        <AboutSectionCard />
      </SwiperSlide>
    </Swiper>
    </Section>
  )
}
