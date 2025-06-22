'use client'
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import empire from '../../../public/assets/living12.webp'
import empireliv from '../../../public/assets/living2.webp'
import empire1 from '../../../public/assets/living1.webp'
import empire2 from '../../../public/assets/living17.webp'
import empire3 from '../../../public/assets/living4.webp'
import empire4 from '../../../public/assets/living5.webp'
import empire5 from '../../../public/assets/living6.webp'
import empire6 from '../../../public/assets/living7.webp'
import empire7 from '../../../public/assets/living9.webp'
import empire8 from '../../../public/assets/living10.webp'
import empire9 from '../../../public/assets/living11.webp'
import empirelivin from '../../../public/assets/027c45cd5e3cbdca981eddff217b55b3ddc776c2.webp'
import empire10 from '../../../public/assets/living13.webp'
import empire11 from '../../../public/assets/living14.webp'
import empire12 from '../../../public/assets/living15.webp'
import empire13 from '../../../public/assets/living16.webp'
import empire14 from '../../../public/assets/livng3.webp'
import empire15 from '../../../public/assets/living.jpg'
import empire16 from '../../../public/assets/empirelivin (16).jpg'
import empire17 from '../../../public/assets/empirelivin (17).jpg'
import empire18 from '../../../public/assets/living16.webp'
import empire19 from '../../../public/assets/ep.jpg'

const SectionThree = () => {
  const container = useRef()
  const scrollRef = useRef()

  useLayoutEffect(() => {
    let ctx;

  import('gsap').then(gsapModule => {
    import('gsap/ScrollTrigger').then(scrollTriggerModule => {
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (!scrollRef.current || !container.current) return;

      ctx = gsap.context(() => {
        const scrollEl = scrollRef.current;
        const scrollHeight = scrollEl.scrollHeight ;
        const containerHeight = container.current.offsetHeight;
        const scrollDistance = (scrollHeight + 100) - containerHeight;
      const ending=scrollDistance + 500
        // Set scrollTop to 0 zinitially
        scrollEl.scrollTop = 0;

        // Create the scroll animation
  const ct= gsap.to(scrollRef.current, {
          scrollTop: ending,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "center center",
            end: `+=${scrollDistance}`,
            scrub:true,
            pin: true,
            pinType:'transform',
            pinSpacing: true,
            anticipatePin: 1,
            onEnter: () => ScrollTrigger.refresh(),
            onLeave: () => {
    document.querySelector('.container').style.position = 'relative';
  },
      
            anticipatePin:1, onEnter: () => {
      // if your map/slider needs to finish loading first:
      ScrollTrigger.refresh();
            },
          }
        });
      }, container);
    });
  });

  return () => ctx.kill()
}, [container]);




  return (
  <div className=' flex flex-col  items-center justify-center w-full text-center h-[100vh] z-[10] relative' ref={container}>
  
    <h1 className='text-[45px] lg:text-[100px] my-heading  text-white font-bold'>Picture Your Future</h1>
    <div className='w-full h-screen overflow-hidden scrollbar-hide flex flex-col  items-center justify-center'    ref={scrollRef}  >

          <div className='w-[90%] md:w-[80%] h-full flex items-center justify-center'>
    

            <div className='columns-4 flex flex-wrap h-full m-auto items-center justify-center gap-3'>
    
    <div className={' mt-20 w-[22%] h-[110px] md:h-[190px] lg:h-[290px]'}><Image src={empire1} priority className='!h-full !w-full   rounded-3xl object-cover object-center'/></div>
    <div className={'   w-[22%] h-[120px] md:h-[200px] lg:h-[280px] '}><Image src={empire18}  priority  className='!h-full !w-full  rounded-3xl object-cover '/></div>
    <div className={'w-[22%] h-[90px] md:h-[170px] lg:h-[250px]  mt-16 '}><Image src={empire3} priority  className='!h-full !w-full  rounded-3xl object-cover '/></div>
    <div className={'w-[22%] h-[120px] md:h-[200px] lg:h-[290px]  '}><Image src={empire4} priority  className='!h-full !w-full   rounded-3xl object-cover '/></div>
    <div className={'w-[22%] h-[100px] md:h-[180px] lg:h-[260px] -mt-2 md:-mt-10'}><Image src={empire5} priority  className='!h-full !w-full   rounded-3xl object-cover '/></div>
    <div className={'w-[22%] h-[140px] md:h-[270px] lg:h-[350px] -mt-10  md:-mt-10 lg:-mt-12'}><Image src={empire6} priority   className='!h-full !w-full   rounded-3xl object-cover '/></div>
    <div className={'w-[22%] h-[80px] md:h-[160px] lg:h-[240px] -mt-12 md:-mt-30 '}><Image src={empire7} priority  className='!h-full !w-full   rounded-3xl object-cover '/></div>
    <div className={'w-[22%] h-[120px] md:h-[200px] lg:h-[290px] -mt-16 md:-mt-24'}><Image src={empire8}  priority  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px] -mt-2 md:-mt-12 lg:-mt-10 '}><Image src={empire9} priority   className='!h-full !w-full  rounded-3xl object-cover'/></div>
    <div className={'w-[22%] h-[100px] md:-[180px] lg:h-[260px] md:-mt-28 lg:-mt-12'}><Image src={empire10} priority  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%] h-[60px] md:h-[140px] lg:h-[320px] -mt-32 md:-mt-70 lg:-mt-42'}><Image src={empire2} priority   className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%] h-[100px] md:h-[180px] lg:h-[260px] -mt-16 md:-mt-38'}><Image src={empire12}  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px]  '}><Image src={empireliv} priority   className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%] h-[90px] md:h-[170px] lg:h-[250px]  -mt-20 md:-mt-84 lg:-mt-46 '}><Image src={empire14} priority  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px] lg:-mt-38 md:-mt-90 -mt-40'}><Image src={empire15} priority  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px] -mt-20 md:-mt-52'}><Image src={empire16} priority  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%] h-[90px] md:h-[170px] lg:h-[250px] -mt-4 md:-mt-2'}><Image src={empire3}  priority  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px] -mt-16 md:-mt-84 lg:-mt-54'}><Image src={empire2}priority  className='!h-full !w-full   rounded-3xl object-cover'/></div> 
         <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px] -mt-26 md:-mt-65 lg:-mt-18'}><Image src={empire8} priority  className='!h-full !w-full   rounded-3xl object-cover'/></div> 

     <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px] -mt-8 md:-mt-24'}><Image priority  src={empire13}  className='!h-full !w-full   rounded-3xl object-cover'/></div> 
     <div className={'w-[22%] h-[120px] md:h-[200px] lg:h-[290px] '}><Image src={empire} priority  className='!h-full !w-full   rounded-3xl object-cover'/></div>
         <div className='flex flex-col items-center  w-[45%]'>
          <div className={'w-[90%] h-[120px] md:h-[150px] -mt-8 '}><Image src={empirelivin} priority  className='!h-full !w-full   rounded-3xl object-contain'/>
            </div>
                   <a 
                  href="/files/02 - Individual Floor Plans Book - Empire Livings.pdf"
                  download
                   className=" h-[30px] md:h-auto cursor-pointer flex items-center justify-center
  bg-gradient-to-r from-[#CCAB64] to-[#FAECC9]
    hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[120px] md:w-[180px] lg:px-2 py-1 rounded-full transition-colors duration-300  transform text-[9px] md:text-sm lg:text-base whitespace-nowrap">Download Floor Plan</a>
          </div>

    <div className={'w-[22%] h-[120px] md:h-[180px] lg:h-[260px] '}><Image src={empire19} priority  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    {/* <div><Image src={empire}  className='!h-full !w-full   rounded-3xl object-cover'/></div> */}
    
          </div>
        </div>

    </div>
        <div className='absolute left-0 right-0 bottom-0 w-full md:h-[50px] lg:h-[50px]'style={{background: 'linear-gradient(180deg, rgba(0, 46, 60, 0) 50%, #0E1527 97%)'
}}></div>
      </div>
  )
}

export default SectionThree
