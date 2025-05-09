import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cloud from '../../../public/assets/cloud_one.png'
import { gsap } from "gsap";
import { useRef } from 'react';
import empire from '../../../public/assets/empire2.png'
import Stickyicon from '@/common/stickyicon';
const heroslider = () => {
    const boxref=useRef()
    const mm = gsap.matchMedia()
    const box_Two=useRef()
    const box_three=useRef()
    const im=useRef()
    const text1=useRef()
    const text2=useRef()
    const text3=useRef()
    useEffect(() => {
      
          
          mm.add('(min-width:760px)', ()=>{
            gsap.fromTo(
            boxref.current,
            { left: '-530px', opacity: 0 },   // start from translateX(-430px)
            { left: '-320px', opacity: 1, duration: 2, delay: 1, ease: "power2.out" } // animate to final position
        );
      })


      mm.add('(max-width:700px)', ()=>{
        gsap.fromTo(
        boxref.current,
        { left: '-250px', opacity: 0 },   // start from translateX(-430px)
        { left: '-150px', opacity: 1, duration: 2, delay: 1, ease: "power2.out" } // animate to final position
    );   
  })
    
        // Then animate it after a delay
      
        mm.add("(max-width: 768px)", () => {
          gsap.fromTo(
            box_Two.current,
            { right:'-200px', opacity: 0 }, // Shorter distance for mobile
            {
              right: '-100px',
              opacity: 1,
              duration: 2,
              delay: 1,
              ease: 'power2.out',
            }
          );
        });
      
        mm.add("(min-width: 760px)", () => {
          // Desktop animation
          gsap.fromTo(
            box_Two.current,
            { right: '-500px', opacity: 0 },
            {
              right: '-200px',
              opacity: 1,
              duration: 2,
              delay: 1,
              ease: 'power2.out',
            }
          );
        });
      
      
      
            gsap.fromTo(
              box_three.current,
              { y: 0, opacity: 0 },   // 👈 Start 400px below
              {
                y: 0,                   // 👈 Animate to original position
                opacity: 1,
                duration: 2,
                delay:2,
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
      return () => mm.revert(); // Clean up

      }, []);
   
    return(

<div className="relative z-20 overflow-hidden " >
  <Stickyicon  />
<div className='absolute lg:top-28 md:top-[2%] top-9 lg:left-[17%] md:left-[15vw] left-[12%]  opacity-0 'ref={text1} >
<span className=' xl:text-[45px] lg:text-[35px] md:text-[30px] text-[4vw] bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-white font-bold z-20 my-heading'>Empire </span></div>
<div className=' absolute w-full  md:top-auto !top-15 opacity-0' ref={text2}> 
<h1 className='xl:text-[200px]  lg:text-[160px] md:text-[130px] tracking-tight text-[16vw] w-[100%] z-40 flex items-center justify-center bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-extrabold my-heading'>Lakeviews</h1></div>

<div className='md:right-34 right-[5%]  absolute xl:top-[46%] lg:top-[34%] md:top-[29%] top-[29vw] lg:mt-[25px] xl:mt-0 opacity-0' ref={text3}>
<span  className='lg:text-[35px] md:text-[30px] xl:text-[50px]  text-[4vw] bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-white font-bold z-20 my-heading'>Liwan</span></div>
    
<div className='  lg:!right-42 right-0 absolute top-40 md:top-auto  md:bottom-20 z-[1000] w-[150px] md:w-[320px] flex items-center justify-center' ref={box_three}><span  className=' my-heading text-[10px] leading-4 md:leading-9 md:text-[26px]   tracking-tighter flex flex-col items-start justify-start  bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-light z-20 ' ><p>a striking tower in Liwan, </p>
<p>designed for lifestyle</p>
 <p>and luxury.</p></span></div>

      

<div className='relative  flex items-center justify-center h-[400px] md:h-[600px] w-full opacity-0 z-50' ref={im}>
<Image src={empire}  height={121} width={882} className='absolute  z-40 bottom-[-250px] h-[580px] w-[240px] md:!h-[782px] md:!w-[370px]' /></div>

  <div  className='absolute bottom-0 opacity-0 md:left-[-380px] left-[-180px] 'ref={boxref}  > 
<Image  src={cloud}  id="#"className='!px-0 w-[300px] h-[200px]  md:!h-[300px] md:!w-[600px]' layout='intrinsic' objectFit='cover'/>

   
 </div>
 <div  className="absolute top-20 z-50 md:right-[-230px] right-[-100px] opacity-0 " ref={box_Two}> {/* <<< starts offscreen */}
          <Image src={cloud} alt="Cloud" objectFit='cover' className='w-[280px] h-[180px] md:!w-[580px] md:!h-[320px]' />
        </div>
        <div className='bg-[linear-gradient(180deg,rgba(0,44,58,0)_0%,#002E3C_100%)] h-[100 px] left-0 right-0 z-50 absolute bottom-0 w-full'> </div>

</div>
    )

}

export default heroslider;