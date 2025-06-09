import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import chess from '../../public/assets/chess.jpg'
import { useInView } from 'framer-motion'
import {gsap} from 'gsap'

import LottieIcons from './lottie'
const brand = ({img,text1,text2,amenities,className,iconsize,className2,className3}) => {

const {ref,inView}=useInView({
  triggerOnce:true,
  threshold:0.5
})
const ref3=useRef()
useEffect(()=>{


if(inView){

 gsap.fromTo(
  ref3.current,
  { y:200, opacity: 0, },   // start from translateX(-430px)
  { y: 0, opacity: 1, duration: 2, delay: 2 }
)     



tl.fromTo(
  ".element",
  { opacity: 0, y: 200 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: {
      each: 1,
      ease: "power1.out"
    }
  }
);
}
},[inView])

  return (
    <div className='flex flex-col md:h-[700px] h-[300px] ' ref={ref}>
        <div className='relative w-full h-[80%]'>
          <Image src={img} height={700} width={600} className='!h-full !w-full object-cover'/>
        </div>
        <div className='bg-[linear-gradient(90deg,_#CCAB64_0%,_#FAECC9_100%)] flex items-center justify-center h-[20%] w-full'>
      <div className='w-[90%] flex  items-center justify-between gap-[10px]'>
        <div className='flex flex-col'><h4 className='md:text-[30px] text-[13px] font-bold '>{text1}</h4> <span className=' text-[10px] md:text-[15px]'>{text2}</span></div>
        <div className='flex items-center justify-center'>
          <LottieIcons  className={` element ${className3}`} amenities={amenities} ref={ref3} className2={className2} className1={className} iconsize={iconsize}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default brand
