import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import chess from '../../public/assets/chess.jpg'
import { useInView } from 'framer-motion'
import {gsap} from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import LottieIcons from './lottie'
const brand = ({img,text1,text2,amenities,className,iconsize,className2,className3}) => {

// const {ref,inView}=useInView({
//   triggerOnce:true,
//   threshold:0.5
// })
// const ref3=useRef()
// useEffect(()=>{


// if(inView){

//  gsap.fromTo(
//   ref3.current,
//   { y:200, opacity: 0, },   // start from translateX(-430px)
//   { y: 0, opacity: 1, duration: 2, delay: 2 }
// )     



// tl.fromTo(
//   ".element",
//   { opacity: 0, y: 200 },
//   {
//     opacity: 1,
//     y: 0,
//     duration: 1,
//     stagger: {
//       each: 1,
//       ease: "power1.out"
//     }
//   }
// );
// }
// },[inView])

  return (
    <div className='w-full py-10 bg-[linear-gradient(90deg,_#CCAB64_0%,_#FAECC9_100%)] flex flex-col items-center justify-center'>
      <h4 className='md:text-[48px] text-[28px] font-bold text-center text-black mb-8'>{text1}</h4>
      {/* Desktop: row of icons */}
      <div className='hidden md:flex flex-row items-end justify-center gap-6 w-full max-w-5xl'>
        <LottieIcons amenities={amenities} className1='flex flex-row items-end justify-center w-full' className2='text-black md:text-[18px] text-[12px] font-medium' iconsize='w-[60px] h-[60px] md:w-[80px] md:h-[80px]' />
      </div>
      {/* Mobile: Swiper slider for icons */}
      <div className='block md:hidden w-full relative'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          className='w-full px-4'
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {amenities.map((amenity, idx) => (
            <SwiperSlide key={idx}>
              <div className='flex flex-col items-center justify-center w-full'>
                <LottieIcons amenities={[amenity]} className1='flex flex-col items-center justify-center w-full' className2='text-black text-[14px] font-medium' iconsize='w-[60px] h-[60px]' />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </div>
          <div className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default brand
