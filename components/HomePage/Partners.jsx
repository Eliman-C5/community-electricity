import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageProvider'
import Section from '../Wrappers/NormalAndFadeInSection'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const pictures = [
  {id: 1, src: '/images/partners/Energy coalition.svg', alt: 'Energy coalition'},
  {id: 2, src: '/images/partners/California energy.svg', alt: 'California energy'},
  {id: 3, src: '/images/partners/Ucla.svg', alt: 'Ucla'},
  {id: 4, src: '/images/partners/CPA.svg', alt: 'CPA'},
  {id: 5, src: '/images/partners/pivot energy.svg', alt: 'pivot energy'},
  {id: 6, src: '/images/partners/Aclima.svg', alt: 'Aclima'},
  {id: 7, src: '/images/partners/Greencommuter.svg', alt: 'Greencommuter'},
  {id: 8, src: '/images/partners/google.svg', alt: 'google'},
  {id: 9, src: '/images/partners/splight.svg', alt: 'splight'},
  {id: 10, src: '/images/partners/grid.svg', alt: 'grid'},
  {id: 11, src: '/images/partners/arup.svg', alt: 'arup'},
  {id: 12, src: '/images/partners/bluesky energy.svg', alt: 'bluesky energy'},
]

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
      <div className='flex justify-between'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={7}
          //scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='h-[120px]'
        >
        {
            pictures.map(pic => (
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
      
    </Section>
  )
}
