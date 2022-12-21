import React, { useEffect, useState } from 'react'
import { AboutSectionCard } from '../../Atoms/AboutSectionCard'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y, SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSwiper } from 'swiper/react';
import { aboutCarusel } from '../../../data/text';

export const AboutSliderMobile = ({spanishIsActive}) => {

  return (
  <div className="lg:hidden">
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='mt-[60px]'
    >
      {
        spanishIsActive ?
          aboutCarusel.esp.map(slide => (
            <SwiperSlide key={slide.id}>
              <AboutSectionCard 
                src={slide.src} 
                title={slide.title} 
                text={slide.text}
                imgStyle={slide.id === 3 && 'w-2/3 pt-5'}
              />
            </SwiperSlide>
          )) :
          aboutCarusel.eng.map(slide => (
            <SwiperSlide key={slide.id}>
              <AboutSectionCard 
                src={slide.src} 
                title={slide.title} 
                text={slide.text} 
                imgStyle={slide.id === 3 && 'w-2/3 pt-5'}
              />
            </SwiperSlide>
          ))
      }
    </Swiper>
  </div>
  )
}
