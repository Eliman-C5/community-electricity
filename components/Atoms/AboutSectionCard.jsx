import React from 'react'

export const AboutSectionCard = () => {
  return (
    <div className='w-full flex h-[470px] bg-[#F2F2F2]'>
      <div className="w-1/2 p-8 flex flex-col gap-6">
        <h2 className='title text-black'>Multi-family Housing Program</h2>
        <p className='text-black'>We partner with Multi-Family real estate owners and developers to finance and transform their portfolios into 100% electric Prosumer Communities. Using our AI-powered software, glu surplus electricity storage in the batteries is sold back to the grid creating new sources of revenues. We eliminate demand charges for building electricity loads by including batteries, resulting in lower to net electricity bills. </p>
        <span className='text-black font-semibold'>Learn more</span>
      </div>
      <div className="w-1/2">
        <img src="/images/slider/slider-1.png" alt="" className='ml-auto'/>
      </div>
    </div>
  )
}
