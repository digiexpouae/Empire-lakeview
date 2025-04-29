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
    const box_three=useRef()
    const im=useRef()
    const text1=useRef()
    const text2=useRef()
    const text3=useRef()
    useEffect(() => {
      const tl = gsap.timeline({ delay: 1 });
    
      tl.fromTo(boxref.current, { x: -430, opacity: 0 }, { x: -260, opacity: 1, duration: 2, ease: "power2.out" })
        .fromTo(box_Two.current, { x: 980, opacity: 0 }, { x: 970, opacity: 1, duration: 2, ease: "power2.out" }, "<") // "<" means start at same time
        .fromTo(box_three.current, { y: 400, opacity: 0 }, { y: 220, opacity: 1, duration: 2, ease: "power2.out" }, "<")
        .fromTo(im.current, { y: 400, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "<")
        .fromTo(text1.current, { y: 0, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "power2.out" }, ">") // ">" means after previous finishes
        .fromTo(text2.current, { y: 400, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "power2.out" })
        .fromTo(text3.current, { y: 0, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "power2.out" });
    }, []);
    ;
   
    return(
<div className="relative z-20 overflow-hidden" >
<div className='relative opacity-0' ref={text1}>
<span className='absolute top-11 xl:left-56 lg:left-24 text-[45px]  bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-bold z-20'>Empire </span></div>
<div className='relative opacity-0' ref={text2}>
<h1 className='text-[190px] w-full absolute z-40 flex items-center justify-center bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-extrabold my-heading'>Lakeviews</h1></div>

<div className='relative opacity-0' ref={text3}>
<span  className=' right-34 absolute top-52 text-[50px]  bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-bold z-20'>Liwan</span></div>
    <div className="">
        <div ref={box_Two} className="absolute top-0 z-50 opacity-0"> {/* <<< starts offscreen */}
          <Image src={cloud} alt="Cloud" objectFit='cover' />
        </div>
      </div>


      

<div className='relative h-[500px] z-50 opacity-0' ref={im}>
<Image src={empire}height={421} width={782} className='absolute lg:left-[9%] xl:left-[18%] bottom-[-200px] z-40' objectFit='cover'/></div>
<div className='w-full '><span  className='left-50  absolute text-[26px] w-[270px] flex items-center justify-start bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-light z-20 '>a striking tower in Liwan, 
designed for lifestyle
 and luxury.</span></div>
  <div ref={boxref} className='absolute bottom-0 w-full opacity-0'> 
 <Image  src={cloud}  id="#"className='!px-0' layout='intrinsic' objectFit='cover'/>

   
 </div>
 <div ref={box_three} className='absolute bottom-0 z-50 left-[10%] opacity-0' >
 <Image  src={cloud} width={799} height={80}  id="#"className='!px-0' layout='intrinsic' objectFit='cover'/></div>
</div>
    )

}

export default heroslider;