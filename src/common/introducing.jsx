'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slidertwo from '../components/slider_Two'
import Image from 'next/image'

import { motion, useScroll, useTransform } from 'framer-motion';
import section from '@/components/about/section';
const introducing = ({Logo,ima,logo,text1,text2,className,className1,btntext,viewprojects,overlay,intro }) => {
      const containerRef = useRef(null)
  const sliderRef = useRef(null)
  useEffect(() => {
    const runGsap = async () => {
      const gsap = (await import('gsap')).default
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).default

      gsap.registerPlugin(ScrollTrigger)

      const totalScrollWidth = sliderRef.current.scrollWidth
      const viewportWidth = window.innerWidth
      const scrollDistance = totalScrollWidth - viewportWidth
      const distance=scrollDistance

      gsap.to(sliderRef.current, {
        x: `-${distance}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
  end: () => `+=${distance}`,
// ✅ Match scroll distance exactly
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 3,
            pinSpacing: true, 
       

        },
      })
    }

    runGsap()

    return () => {
      if (typeof window !== 'undefined') {
        const { ScrollTrigger } = require('gsap/ScrollTrigger')
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }
  }, [])




   
return (
  
  <div className={`w-full overflow-hidden whitespace-nowrap  px-4 ${overlay?'!h-[300px]':'h-[700px]'} ${className1}  flex items-center  my-16`} ref={containerRef}>
    <div className='inline-flex gap-[30px] items-center'ref={sliderRef}>
      
      {/* Text + Logo Block */}
      <div className='shrink-0 flex flex-col items-center justify-center gap-[20px] mb-[20px] md:w-[380px]'>
        <span className='text-white'>{text1}</span>

        {logo?(<div className='md:h-[80px] md:w-[150px] h-[60px] w-[100px]'>
          <Image src={Logo} className='!w-full !h-full' width={150} height={80} alt="Logo" />
        </div>):(<div className=''><h3 className=' text-[25px] text-center my-heading leading-6  text-white font-medium'>Successfully <br /> Delivered</h3></div>)

}
        <button className='button !py-[5px] !w-[150px] !text-[15px] flex items-center justify-center'>{btntext}</button>
      </div>

      {/* Image Blocks */}
      {ima.map((elem, index) => (
        <div
          key={index}
          className={`shrink-0 inline-block xl:w-[340px] lg:w-[450px] md:w-[350px] w-[270px] h-[404px] lg:h-[550px] ${className}`}
        >
          <Image
            src={elem}
            priority
            alt={`Slide ${index}`}
            className={`!h-full !w-full  ${overlay && 'md:object-cover'} ${intro && 'object-cover'} rounded-4xl relative  `}
          />
{overlay &&
     <div className='absolute left-0 right-0 bottom-0 w-full  z-[999] h-[150px] 
'style={{background: 'linear-gradient(180deg, rgba(0, 46, 60, 0) 75%, #002E3C 97%)'
}}></div>
         }         {viewprojects &&
          <div className='absolute left-3 bottom-6'>
            <h2 className='text-white text-[23px] font-bold my-heading'>Plazzo heights</h2>
            <button className='button flex items-center justify-center !py-[3px] !w-[120px] !text-[15px]'>View projects</button>
          </div>} 
        </div>

      ))}
    </div>
  </div>
);

}

export default introducing



