import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ZonesCard } from './ZonesCard';
import { zonesCardsTexts } from '../../data/text';
import { SwiperNavButtons } from '../Atoms/SwiperNavButtons';

export const ZonesProgressMobile = () => {
  return (
    <div className="block md:hidden relative">
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.next-progress',
            prevEl: '.prev-progress',
          }}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='mySwiper h-[550px]'
        >
          {
            zonesCardsTexts.map(card => (
              <SwiperSlide key={card.id}>
                <ZonesCard 
                  key={card.id}
                  mainImg={card.mainImg}
                  title={card.title.eng}
                  firstText={card.firstText.eng}
                  secondText={card.secondText.eng}
                  path={card.arrowPath}
                  specialText={card.specialText}
                  style='mx-auto'
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <SwiperNavButtons prev={'prev-progress'} next={'next-progress'} />
      </div>
  )
}
