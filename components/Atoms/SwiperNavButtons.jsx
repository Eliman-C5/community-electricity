import React from 'react'

export const SwiperNavButtons = ({prev, next}) => {
  return (
    <>
      <button className={`${prev} swiper-button-prev bg-[#764AF1]`}>
          <img src="/images/white-arrow.svg" alt="left" className='rotate-180'/>
      </button>
      <button className={`${next} swiper-button-next bg-[#764AF1]`}>
        <img src="/images/white-arrow.svg" alt="right" />
      </button>
    </>
  )
}
