import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cloud from '../../../public/assets/cloud_one.png'
import { gsap } from "gsap";
import { useRef } from 'react';
import empire from '../../../public/assets/b5835944bbebc7ec70998e5aeb02a371f13959a9.png'

const heroslider = () => {
    const boxref=useRef()
    const box_Two=useRef()
    useEffect(() => {
        gsap.fromTo(
            boxref.current,
            { x: -430, opacity: 0 },   // start from translateX(-430px)
            { x: -260, opacity: 1, duration: 2, delay: 1, ease: "power2.out" } // animate to final position
        ),    gsap.fromTo(
            box_Two.current,
            { x: 1300, opacity: 0 },   // start from x = +430 (right side)
            { x: 1200, opacity: 1, duration: 2, delay: 1, ease: "power2.out" } // animate to center (x = 0)
        )
      }, []);
   
    return(
<div className="relative z-20" >
<div className='relative'>
<span className='absolute top-8.5 left-50 text-[50px]  bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-bold z-20'>Empire </span></div>
<div className='relative'>
<h1 className='text-[190px] w-full absolute z-40 flex items-center justify-center bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-extrabold '>Lakeviews</h1></div>

<div className='relative'>
<span  className=' right-34 absolute top-52 text-[50px]  bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-bold z-20'>Liwan</span></div>
<div className='relative ' ref={box_Two}><Image src={cloud} className='absolute top-20 transform-none'/></div>


<div className='relative  w-full h-[300px]'>
<Image src={empire}height={421} width={782} className='absolute left-[18%] z-40'/></div>
<div className='w-full '><span  className='left-50  absolute text-[26px] w-[270px] flex items-center justify-start bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-light z-20 '>a striking tower in Liwan, 
designed for lifestyle
 and luxury.</span></div>
 <div ref={boxref} className='transform-none h-[] relative z-40'>
 <Image  src={cloud}  id="#"className='!px-0' layout='intrinsic' objectFit='cover'/></div>
   </div>
    )

}

export default heroslider;
