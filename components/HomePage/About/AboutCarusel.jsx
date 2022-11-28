import React, { useEffect, useState } from 'react'
import { AboutSectionCard } from '../../Atoms/AboutSectionCard'
import { Navigation, Pagination, Scrollbar, A11y, SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSwiper } from 'swiper/react';
import { aboutCarusel } from '../../../data/text';

export const AboutCarusel = ({spanishIsActive, swiperProp}) => {

  const [swiperInstance, setSwiperInstance] = useState(<SwiperCore />);
  
  const handleExternalChangeSlide = (newSlideIndexToShow) => {
    swiperInstance.slidesTo(newSlideIndexToShow);
  }

  useEffect(() => {
    
    console.log(swiperProp)
    // swiperInstance.slideTo(swiperProp);
  
  }, [swiperProp])
  

  return (
  <div className="">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1.1}
      //scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => {
      //   console.log(swiper, swiperProp)
      //   swiperInstance.slideNext(swiperProp)
      // }}
      onSwiper={setSwiperInstance}
      onSlideChange={(swiper) => setSwiperInstance(swiper.realIndex)}
      // onSlideChange={(swiper) => console.log(swiper, swiperProp)}
      className='mt-[60px] max-w-[1440px] mx-auto'
    >
      {/* <button className='bg-white p-6 text-black' onClick={() => swiperInstance.slideNext()}>1</button> */}
      {
        spanishIsActive ?
          aboutCarusel.esp.map(slide => (
            <SwiperSlide key={slide.id}>
              <AboutSectionCard 
                src={slide.src} 
                title={slide.title} 
                text={slide.text} 
                btn={slide.btn} />
            </SwiperSlide>
          )) :
          aboutCarusel.eng.map(slide => (
            <SwiperSlide key={slide.id}>
              <AboutSectionCard 
                src={slide.src} 
                title={slide.title} 
                text={slide.text} 
                btn={slide.btn} />
            </SwiperSlide>
          ))
      }
    </Swiper>
  </div>
  )
}
