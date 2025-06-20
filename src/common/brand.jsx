import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import chess from '../../public/assets/chess.jpg'
import { useInView } from 'framer-motion'
import {gsap} from 'gsap'

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
    <div className='w-full  md:py-10 py-2 bg-[linear-gradient(90deg,_#CCAB64_0%,_#FAECC9_100%)] flex flex-col items-center justify-center'>
      <h4 className='md:text-[48px] text-[28px] font-bold text-center text-black mb-8'>{text1}</h4>
      {/* Desktop: row of icons */}
      <div className='md:flex hidden flex-row items-end justify-center gap-6 w-full max-w-5xl'>
        <LottieIcons amenities={amenities} className1='flex flex-row items-end justify-center w-full' className2='text-black md:text-[18px] text-[12px] font-medium' iconsize='w-[60px] h-[60px] md:w-[80px] md:h-[80px]' />
      </div>
      {/* Mobile: 2-column grid of icons */}
      <div className='grid grid-cols-2 md:hidden w-full gap-4 px-4 py-2'>
        {amenities.map((amenity, idx) => (
          <div key={idx} className='flex flex-col items-center justify-center w-full'>
            <LottieIcons amenities={[amenity]} className1='flex flex-col items-center justify-center w-full' className2='text-black text-[14px] font-medium' iconsize='w-[60px] h-[60px]' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default brand
