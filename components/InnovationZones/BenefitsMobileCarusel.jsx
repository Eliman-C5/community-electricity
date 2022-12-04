import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BenefitsCard } from './BenefitsCard';
import { benefitsCards } from '../../data/text';
import { SwiperNavButtons } from '../Atoms/SwiperNavButtons';

const items = [1, 2, 3, 4, 5, 6];

export const BenefitsMobileCarusel = () => {
  return (
    <div className="lg:hidden relative">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          scrollbar={{ draggable: true }}
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          className="mySwiper h-[420px]"
          navigation={{
            nextEl: '.next-benefits',
            prevEl: '.prev-benefits',
          }}
        >
          {items.map((item) => (
          <SwiperSlide key={item} className='mx-auto flex'>
            <BenefitsCard 
              title={'Drive Technology Innovation:'}
              cards={benefitsCards.text}
              style='mx-auto'
            />
          </SwiperSlide>
        ))}
        </Swiper>
        <SwiperNavButtons prev={'prev-benefits'} next={'next-benefits'} />
    </div>
  )
}
