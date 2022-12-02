import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { TeamCard } from "./TeamCard"

export const TeamMembersMobile = ({cards}) => {
  return (
    <div className="block sm:hidden">
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='h-[420px] mt-20'
        >
          {
            cards.map(card => (
              <SwiperSlide key={card.id}>
                <TeamCard 
                  key={card.id}
                  src={card.src}
                  name={card.name}
                  charge={card.charge.eng}
                  linkedin={card.linkedin}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
  )
}
