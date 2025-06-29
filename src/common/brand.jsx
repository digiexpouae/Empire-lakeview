import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import chess from '../../public/assets/chess.jpg'
import { useInView } from 'framer-motion'
import {gsap} from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import LottieIcons from './lottie'
const brand = ({img,text1,text2,amenities,className,iconsize,className2,className3,brand}) => {

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
    <div className='w-full  flex flex-col items-center  justify-center'>
         <div className='relative w-full '>
          
       <Image
  src={img || chess} // fallback to chess.jpg if img is undefined/null
  height={700}
  width={600}
  className='!h-full !w-full object-cover'
  alt="Brand Image"
/>
        </div>
      <div className=' w-full py-10  flex flex-col items-center justify-center bg-[linear-gradient(90deg,_#CCAB64_0%,_#FAECC9_100%)]'>
      <h4 className='md:text-[48px] text-[28px] font-bold text-center text-black mb-8'>{text1}</h4>
      {/* Desktop: row of icons */}
      <div className='hidden md:flex flex-row items-end justify-center gap-6 w-full max-w-5xl'>
        <LottieIcons amenities={amenities} className1={`flex flex-row items-end justify-center w-full ${brand && 'md:gap-[32px]'}`} className2='text-black md:text-[18px] text-[12px] font-medium' iconsize='w-[60px] h-[60px] md:w-[80px] md:h-[80px]' />
      </div>
      {/* Mobile: Swiper slider for icons */}
      <div className='block md:hidden w-full relative'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          className={`w-full px-4`}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          {amenities.map((amenity, idx) => (
            <SwiperSlide key={idx}>
              <div className={`flex flex-col items-center justify-center  w-full`}>
                <LottieIcons amenities={[amenity]} className1='flex flex-col items-center justify-center w-full' className2='text-black text-[14px] font-medium' iconsize='w-[60px] h-[60px]' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </div>
  )
}

export default brand
