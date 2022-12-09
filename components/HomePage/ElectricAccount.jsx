import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { ElectricAccountPic } from './ElectricAccount/ElectricAccountPic'
import { StartUsingItem } from './ElectricAccount/StartUsingItem'
import { ComingSoon } from './ElectricAccount/ComingSoon'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const ElectricAccount = () => {

  const { spanishIsActive } = useContext(LanguageContext);

  return (
  <>
    <Section>
      <div className="flex gap-4 flex-col md:flex-row">
      
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='hidden md:block'
        >
          <SwiperSlide>
            <StartUsingItem spanishIsActive={spanishIsActive} />
          </SwiperSlide>
          <SwiperSlide>
            <ComingSoon spanishIsActive={spanishIsActive} />
          </SwiperSlide>
        </Swiper>
        
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='block md:hidden w-full mt-[40px]'
        >
          <SwiperSlide className='my-auto'>
            <StartUsingItem spanishIsActive={spanishIsActive} />
          </SwiperSlide>
          <SwiperSlide className='my-auto'>
            <ComingSoon spanishIsActive={spanishIsActive} />
          </SwiperSlide>
        </Swiper>
        
        <img src="/images/electric-account-house.png" alt="" className='hidden md:block md:w-1/2'/>
      
      </div>
    </Section>
    <ElectricAccountPic />
  </>
  )
}
