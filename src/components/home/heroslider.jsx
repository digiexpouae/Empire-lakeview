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
        gsap.fromTo(
            boxref.current,
            { x: -430, opacity: 0 },   // start from translateX(-430px)
            { x: -260, opacity: 1, duration: 2, delay: 1, ease: "power2.out" } // animate to final position
        ),   

        // Then animate it after a delay
        gsap.fromTo(
            box_Two.current,
            { x: 980, opacity: 0 },
            {
              x: 970, // Change this to control how much moves to the right
              opacity: 1,
              duration: 2,
              delay: 1,
              ease: 'power2.out',
            }),
            gsap.fromTo(
              box_three.current,
              { y: 400, opacity: 0 },   // 👈 Start 400px below
              {
                y: 220,                   // 👈 Animate to original position
                opacity: 1,
                duration: 2,
                delay: 1,
                ease: 'power2.out',
              }),  gsap.fromTo(
                im.current,
                {y:400, opacity: 0 },   // 👈 Start 400px below
                {y:0,
                               // 👈 Animate to original position
                  opacity: 1,
                  duration: 2,
                  delay: 1,
                  ease: 'power2.out',
                }
            ),gsap.fromTo(
              text1.current,
              {y:0, opacity: 0 },   // 👈 Start 400px below
              {y:0,
                             // 👈 Animate to original position
                opacity: 1,
                duration: 4,
                delay: 2,
                ease: 'power2.out',
              }
          ),
          gsap.fromTo(
            text2.current,
            {y:400, opacity: 0 },   // 👈 Start 400px below
            {y:0,
                           // 👈 Animate to original position
              opacity: 1,
              duration: 4,
              delay: 2,
              ease: 'power2.out',
            }
        ),
        gsap.fromTo(
          text3.current,
          {y:0, opacity: 0 },   // 👈 Start 400px below
          {y:0,
                         // 👈 Animate to original position
            opacity: 1,
            duration: 4,
            delay: 2,
            ease: 'power2.out',
          }
      )
      }, []);
   
    return(
<div className="relative z-20 overflow-hidden " >
<div className='absolute lg:top-11 md:top-[2%] top-0 lg:left-[16%] md:left-[15vw] left-[12%]  opacity-0 'ref={text1} >
<span className=' xl:text-[45px] lg:text-[35px] md:text-[30px] text-[4vw] bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-bold z-20'>Empire </span></div>
<div className=' absolute w-full opacity-0 'ref={text2} >
<h1 className='xl:text-[190px]  lg:text-[160px] md:text-[130px] text-[16vw] w-[100%] z-40 flex items-center justify-center bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-extrabold my-heading'>Lakeviews</h1></div>

<div className='md:right-34 right-[5%]  absolute xl:top-[38%] lg:top-[34%] md:top-[29%] top-[18vw] opacity-0 'ref={text3} >
<span  className='lg:text-[35px] md:text-[30px] xl:text-[50px]  text-[4vw] bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-bold z-20'>Liwan</span></div>
    <div className="">
        <div ref={box_Two} className="absolute top-0 z-50 opacity-0 "> {/* <<< starts offscreen */}
          <Image src={cloud} alt="Cloud" objectFit='cover' />
        </div>
      </div>


      

<div className='relative h-[500px] z-50 opacity-0 ' ref={im}>
<Image src={empire}  height={421} width={782} className='absolute lg:left-[9%] xl:left-[18%] bottom-[-120px] md:bottom-[-200px] z-40 ' /></div>
<div className='w-full '><span  className='left-50  absolute text-[26px] w-[270px] flex items-center justify-start bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-light z-20 '>a striking tower in Liwan, 
designed for lifestyle
 and luxury.</span></div>
  <div  className='absolute bottom-0 w-full opacity-0' ref={boxref}> 
 <Image  src={cloud}  id="#"className='!px-0' layout='intrinsic' objectFit='cover'/>

   
 </div>
 <div className='absolute bottom-0 z-50 left-[10%] opacity-0' ref={box_three}>
 <Image  src={cloud} width={799} height={80}  id="#"className='!px-0' layout='intrinsic' objectFit='cover'/></div>
</div>
    )

}

export default heroslider;