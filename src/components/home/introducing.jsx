'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slidertwo from '../slider_Two'
import Image from 'next/image'
import im from '../../../public/assets/30d78149086356db6714cb255feffcc79821e24e.jpg'
import im2 from '../../../public/assets/177a627b91d6de16e29ba8660fcd169ba1f9a4c5.jpg'
import im3 from '../../../public/assets/739ea3c773a46619eba42628089123900ecd20c4 (1).jpg'
import im4 from '../../../public/assets/387749bd9ca4fbe4dd353d42b78a6dfab9958888.jpg'
import im5 from '../../../public/assets/af7d67e8d77d1990d76ddfd4236ee64f67f80553.jpg'
import im6 from '../../../public/assets/e628b29ba03a5d3c87b167691336aaaa56e062cb.jpg'
import { motion, useScroll, useTransform } from 'framer-motion';
const introducing = () => {
    const ima=[im3,im,im6,im4,im2,im5]
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

      gsap.to(sliderRef.current, {
        x: `-${scrollDistance}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${totalScrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
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
  <div className='w-full overflow-hidden whitespace-nowrap px-4 h-[700px]  flex items-center' ref={containerRef}>
    <div className='inline-flex gap-[30px] items-center'ref={sliderRef}>
      
      {/* Text + Logo Block */}
      <div className='shrink-0 flex flex-col items-center justify-center gap-[20px] mb-[20px] md:w-[380px]'>
        <span className='text-white'>Introducing</span>
        <div className='md:h-[80px] md:w-[150px] h-[60px] w-[100px]'>
          <Image src='/assets/a7c7c7715ce8f5e3ea0b1cea5a135d0970ec0d6a.png' className='!w-full !h-full' width={150} height={80} alt="Logo" />
        </div>
        <button className='button !py-[5px] !w-[150px] !text-[15px]'>Download Brochure</button>
      </div>

      {/* Image Blocks */}
      {ima.map((elem, index) => (
        <div
          key={index}
          className='shrink-0 inline-block xl:w-[340px] lg:w-[450px] md:w-[350px] w-[270px] h-[404px] lg:h-[550px]'
        >
          <Image
            src={elem}
            alt={`Slide ${index}`}
            className='!h-full !w-full object-cover rounded-4xl'
          />
        </div>
      ))}
    </div>
  </div>

);

}

export default introducing



