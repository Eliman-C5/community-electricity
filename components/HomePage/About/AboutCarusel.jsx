import React from 'react'
import { AboutSectionCard } from '../../Atoms/AboutSectionCard'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { aboutCarusel } from '../../../data/text';

export const AboutCarusel = ({spanishIsActive}) => {
  return (
  <div className="">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1.1}
      //scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='mt-[60px] max-w-[1440px] mx-auto'
    >
      {
        spanishIsActive ?
          aboutCarusel.esp.map(slide => (
            <SwiperSlide key={slide.id}>
              <AboutSectionCard src={slide.src} title={slide.title} text={slide.text} btn={slide.btn} />
            </SwiperSlide>
          )) :
          aboutCarusel.eng.map(slide => (
            <SwiperSlide key={slide.id}>
              <AboutSectionCard src={slide.src} title={slide.title} text={slide.text} btn={slide.btn} />
            </SwiperSlide>
          ))
      }
    </Swiper>
  </div>
  )
}
