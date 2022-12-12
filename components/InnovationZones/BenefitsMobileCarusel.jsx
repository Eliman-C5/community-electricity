import React from 'react'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BenefitsCard } from './BenefitsCard';
import { benefitsCards } from '../../data/text';
import { SwiperNavButtons } from '../Atoms/SwiperNavButtons';

export const BenefitsMobileCarusel = () => {
  return (
    <div className="lg:hidden relative">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          scrollbar={{ draggable: true }}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          className="mySwiper h-[540px]"
          navigation={{
            nextEl: '.next-benefits',
            prevEl: '.prev-benefits',
          }}
        >
          {benefitsCards.map((item) => (
          <SwiperSlide key={item.id} className='mx-auto flex'>
            <BenefitsCard 
              title={item.title}
              cards={item.texts}
              style='mx-auto'
            />
          </SwiperSlide>
        ))}
        </Swiper>
        <SwiperNavButtons prev={'prev-benefits'} next={'next-benefits'} />
    </div>
  )
}
