'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slidertwo from '../components/slider_Two'
import Image from 'next/image'


import { motion, useScroll, useTransform } from 'framer-motion';
import section from '@/components/about/section';
const   introducing = ({Logo,ima,logo,text1,text2,links,className,className1,introRef,btntext,viewprojects,overlay,intro,wrapper }) => {
      const containerRef = useRef(null)
  const sliderRef = useRef(null)
  useEffect(() => {
    const runGsap = async () => {
      const gsap = (await import('gsap')).default
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).default

      gsap.registerPlugin(ScrollTrigger)
      ScrollTrigger.normalizeScroll(true);

    
  const totalScrollWidth = sliderRef.current.offsetWidth;
const containerWidth = containerRef.current.offsetWidth;
console.log(sliderRef.current.offsetWidth)
console.log(containerRef.current.offsetWidth)

// Optional: add extra buffer to ensure last image is fully revealed
const scrollDistance = totalScrollWidth - containerWidth ;

const isMobile = window.innerWidth >= 590 && window.innerWidth <= 1024;
const distance = scrollDistance ;
const ending=distance + 50

gsap.fromTo(sliderRef.current, {}, {
  x: `-${ending}px`,
  ease: 'none',
  scrollTrigger: {
    trigger: overlay ? introRef.current : containerRef.current,
  start: '-=80 top',

    end: overlay ? 'bottom 80%' : `+=${distance}`,
  scrub: true,
    pin: true,
    pinSpacing: true,
        },
        
      }
    
    )
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

  <div className={`w-full overflow-hidden whitespace-nowrap  px-4 ${overlay?'h-[200px] md:!h-[300px]':'h-[90vh] md:!h-[90vh]'} ${className1}  flex items-center  container relative bg-[#0D1028]`} ref={containerRef}>
    <div className={`inline-flex ${viewprojects ? 'gap-[20px]' :'gap-[30px]'} items-center`}ref={sliderRef}>
      
      {/* Text + Logo Block */}
      <div className='shrink-0 flex flex-col items-center justify-center gap-[20px] mb-[20px] md:w-[380px]'>
        <span className='text-white'>{text1}</span>

        {logo?(<div className='md:h-[80px] md:w-[150px] h-[60px] w-[100px]'>
          <Image  src={Logo} className='!w-full !h-full' width={150} height={80} alt="Logo" />
        </div>):(<div className=''><h3 className='text-[15px] md:text-[25px] text-center my-heading leading-6  text-white font-medium'>Successfully <br /> Delivered</h3></div>)

}
      {logo?  <a 
       
          href="/files/Empire Lakeviews - 2D Typical Floor Plans (2).pdf"
                   download
        className='button  !py-[5px] !w-[170px] !text-[15px] flex items-center justify-center'>{btntext}</a>:
        <a 
          href={links}

        className='button   !py-[5px] !w-[90px] md:!w-[170px] !text-[9px] md:!text-[15px] cursor-pointer flex items-center justify-center'>{btntext}</a>
        }
      </div>

      {/* Image Blocks */}
      {ima.map((elem, index) => (
        <div
          key={index}
className={`shrink-0 inline-block xl:w-[380px] md:w-[340px] w-[220px] md:h-[450px] h-[450px] relative ${className}`}
        >
<Image
  src={elem.im}
  priority
  fill
  onClick={() => window.location.href = elem.im}
  alt={`Slide ${index}`}
  className={`!h-full !w-full cursor-pointer ${overlay && 'md:object-cover'} ${intro && 'object-cover'} rounded-2xl relative`}
/>

{viewprojects && <div className='absolute left-0 right-0 top-0 bottom-0 bg-black/40 z-10 rounded-2xl'></div>}
       {viewprojects &&
          <div className='absolute left-3 bottom-6 z-40'>
            <h2 className='text-white  text-sm md:text-[23px] font-bold my-heading'>{elem.text}</h2>
          <a className='button flex items-center justify-center !py-[3px] !w-[90px] md:!w-[120px] !text-[8px] md:!text-[15px]' href={elem.link}>View projects</a>
          </div>} 
        </div>

      ))}
    </div>
  </div>

);

}

export default introducing



