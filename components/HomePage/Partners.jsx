import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { partnerPictures } from '../../data/text';

export const Partners = () => {

  const {spanishIsActive} = useContext(LanguageContext);
  
  return (
    <Section>

      <h2 className='title-mobile md:title uppercase text-center mt-[100px] mb-[60px]'>
        {
          spanishIsActive ?
          'Socios' :
          'Partners'
        }
      </h2>
      <div className='hidden md:flex justify-between'>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={6}
          //scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='h-[120px]'
        >
        {
            partnerPictures.map(pic => (
              <SwiperSlide key={pic.id}>
                <img 
                  src={pic.src} 
                  alt={pic.alt} 
                  key={pic.id} 
                  className='w-[150px] h-[50px]' 
                />
              </SwiperSlide>
            ))
        }
        </Swiper>
      </div>
      
      <div className='flex md:hidden justify-between'>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={3}
          //scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='h-[120px]'
        >
        {
            partnerPictures.map(pic => (
              <SwiperSlide key={pic.id}>
                <img 
                  src={pic.src} 
                  alt={pic.alt} 
                  key={pic.id} 
                  className='w-[115px] h-[45px]' 
                />
              </SwiperSlide>
            ))
        }
        </Swiper>
      </div>
      
    </Section>
  )
}
