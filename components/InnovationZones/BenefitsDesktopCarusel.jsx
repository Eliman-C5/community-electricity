import React from 'react'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { benefitsCards } from '../../data/text'
import { BenefitsCard } from './BenefitsCard'
import Section from '../Wrappers/NormalAndFadeInSection'

const items = [1, 2, 3, 4, 5, 6];

export const BenefitsDesktopCarusel = () => {
  return (
    <Section>
      <div className='hidden lg:block'>
        <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={1.5}
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='h-[380px]'
          >
            {items.map((item) => (
              <SwiperSlide key={item}>
                <BenefitsCard 
                title={'Drive Technology Innovation:'}
                cards={benefitsCards.text}
              />
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  )
}
