import React, { useEffect, useRef } from 'react'
import empire from '../../../public/assets/empirelivin (6).jpg'
import empireliv from '../../../public/assets/empirelivin.jpg'
import empire1 from '../../../public/assets/empirelivin (1).jpg'
import empire2 from '../../../public/assets/empirelivin (2).jpg'
import empire3 from '../../../public/assets/empirelivin (17).jpg'
import empire4 from '../../../public/assets/empirelivin (2).png'
import empire5 from '../../../public/assets/empirelivin (9).jpg'
import empire6 from '../../../public/assets/empirelivin (10).jpg'
import empire7 from '../../../public/assets/empirelivin (16).jpg'
import empire8 from '../../../public/assets/empirelivin (8).jpg'
import empire9 from '../../../public/assets/empirelivin.jpg'
import empirelivin from '../../../public/assets/empireliving.png'

import empire10 from '../../../public/assets/empirelivin (15).jpg'
import empire11 from '../../../public/assets/empirelivin (11).jpg'
import empire12 from '../../../public/assets/empirelivin (12).jpg'
import empire13 from '../../../public/assets/empirelivin (13).jpg'
import empire14 from '../../../public/assets/empirelivin (5).jpg'
import empire15 from '../../../public/assets/empirelivin (3).jpg'
import empire16 from '../../../public/assets/empirelivin (16).jpg'
import empire17 from '../../../public/assets/empirelivin (17).jpg'
import empire18 from '../../../public/assets/empirelivin (18).jpg'
import empire19 from '../../../public/assets/ep.jpg'
import Image from 'next/image'
import gsap from 'gsap'


const sectionthree = () => {
const container=useRef()
const scrollRef=useRef()

useEffect(() => {
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
        const scrollDistance = (scrollHeight+100) - containerHeight;

        // Set scrollTop to 0 zinitially
        scrollEl.scrollTop = 0;

        // Create the scroll animation
  const ct= gsap.to(scrollRef.current, {
          scrollTop: scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: `+=${scrollDistance}`,
            scrub:true,
            pin: true,
            pinSpacing: true,
            anticipatePin:1, onEnter: () => {
      // if your map/slider needs to finish loading first:
      ScrollTrigger.refresh();
    },
          }
        });
      }, container);
    });
  });

  return () => ct.kill()
}, [container]);




  return (           
<div className='flex flex-col  items-center justify-center w-full text-center leading-12 md:leading-none min-h-[100vh] ' ref={container}>      
    <h1 className='text-[45px] lg:text-[100px] my-heading  text-white font-bold'>Picture Your Future</h1>

    <div className='w-full h-screen overflow-y-scroll scrollbar-hide flex flex-col  items-center justify-center'    ref={scrollRef}  >

      <div className='w-[90%] md:w-[80%] h-full flex items-center justify-center'>
    

<div className='columns-4 flex flex-wrap h-full m-auto items-center justify-center gap-3'>
    
    <div className={' mt-20 w-[22%] h-[110px] md:h-[190px] lg:h-[290px]'}><Image src={empire1}  className='!h-full !w-full   rounded-3xl object-cover object-center'/></div>
    <div className={'   w-[22%] h-[120px] md:h-[200px] lg:h-[280px] '}><Image src={empire18}  className='!h-full !w-full  rounded-3xl object-cover '/></div>
    <div className={'w-[22%] h-[90px] md:h-[170px] lg:h-[250px]  mt-16 '}><Image src={empire3}  className='!h-full !w-full  rounded-3xl object-cover '/></div>
    <div className={'w-[22%] h-[120px] md:h-[200px] lg:h-[290px]  '}><Image src={empire4}  className='!h-full !w-full   rounded-3xl object-cover '/></div>
    <div className={'w-[22%] h-[100px] md:h-[180px] lg:h-[260px] -mt-2 md:-mt-10'}><Image src={empire5}  className='!h-full !w-full   rounded-3xl object-cover '/></div>
    <div className={'w-[22%] h-[140px] md:h-[270px] lg:h-[350px] -mt-10  md:-mt-10 lg:-mt-12'}><Image src={empire6}  className='!h-full !w-full   rounded-3xl object-cover '/></div>
    <div className={'w-[22%] h-[80px] md:h-[160px] lg:h-[240px] -mt-12 md:-mt-30 '}><Image src={empire7}  className='!h-full !w-full   rounded-3xl object-cover '/></div>
    <div className={'w-[22%] h-[120px] md:h-[200px] lg:h-[290px] -mt-16 md:-mt-24'}><Image src={empire8}   className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px] -mt-2 md:-mt-12 lg:-mt-10 '}><Image src={empire9}   className='!h-full !w-full  rounded-3xl object-cover'/></div>
    <div className={'w-[22%] h-[100px] md:-[180px] lg:h-[260px] md:-mt-28 lg:-mt-12'}><Image src={empire10}  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%] h-[60px] md:h-[140px] lg:h-[320px] -mt-32 md:-mt-70 lg:-mt-42'}><Image src={empire2}  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%] h-[100px] md:h-[180px] lg:h-[260px] -mt-16 md:-mt-38'}><Image src={empire12}  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px]  '}><Image src={empireliv}  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%] h-[90px] md:h-[170px] lg:h-[250px]  -mt-20 md:-mt-84 lg:-mt-46 '}><Image src={empire14}  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px] lg:-mt-38 md:-mt-90 -mt-40'}><Image src={empire15}  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px] -mt-20 md:-mt-52'}><Image src={empire16}  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%] h-[90px] md:h-[170px] lg:h-[250px] -mt-4 md:-mt-2'}><Image src={empire3}  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px] -mt-16 md:-mt-84 lg:-mt-54'}><Image src={empire2}  className='!h-full !w-full   rounded-3xl object-cover'/></div> 
         <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px] -mt-26 md:-mt-65 lg:-mt-18'}><Image src={empire8}  className='!h-full !w-full   rounded-3xl object-cover'/></div> 

     <div className={'w-[22%]  h-[140px] md:h-[270px] lg:h-[350px] -mt-8 md:-mt-24'}><Image src={empire13}  className='!h-full !w-full   rounded-3xl object-cover'/></div> 
     <div className={'w-[22%] h-[120px] md:h-[200px] lg:h-[290px] '}><Image src={empire}  className='!h-full !w-full   rounded-3xl object-cover'/></div>
         <div className='flex flex-col items-center w-[45%]'>
          <div className={'w-[90%] h-[80px] md:h-[150px] -mt-8 '}><Image src={empirelivin}  className='!h-full !w-full   rounded-3xl object-cover'/>
          </div>
                   <button className="
  bg-gradient-to-r from-[#CCAB64] to-[#FAECC9]
    hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[120px] md:w-[180px] lg:px-2 py-1 rounded-full transition-colors duration-300  transform text-[9px] md:text-sm lg:text-base whitespace-nowrap">Download Floor Plan</button>
          </div>

    <div className={'w-[22%] h-[120px] md:h-[180px] lg:h-[260px] '}><Image src={empire19}  className='!h-full !w-full   rounded-3xl object-cover'/></div>
    {/* <div><Image src={empire}  className='!h-full !w-full   rounded-3xl object-cover'/></div> */}
    
</div>
</div>

    </div>
        <div className='absolute left-0 right-0 bottom-0 w-full  z-[999] h-[350px] 
'style={{background: 'linear-gradient(180deg, rgba(0, 46, 60, 0) 50%, #002E3C 97%)'
}}></div>
    </div>
  )
}

export default sectionthree
