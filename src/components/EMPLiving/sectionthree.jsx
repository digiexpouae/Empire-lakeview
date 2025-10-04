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
import empire18 from '../../../public/assets/living16.webp'
import empire19 from '../../../public/assets/ep.jpg'

const SectionThree = () => {
  const container = useRef()
  const scrollRef = useRef()

  useLayoutEffect(() => {
    if (!scrollRef.current || !container.current) return;
  
    let ctx;
    let mm;
  
    import("gsap").then((gsapModule) => {
      import("gsap/ScrollTrigger").then((scrollTriggerModule) => {
        const gsap = gsapModule.default;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
  
        mm = gsap.matchMedia();
        ctx = gsap.context(() => {
          const scrollEl = scrollRef.current;
          const scrollHeight = scrollEl.scrollHeight;
          const containerHeight = container.current.offsetHeight;
          const scrollDistance = scrollHeight - containerHeight;
          const ending = scrollDistance + 500;
  
          mm.add("(min-width: 1024px)", () => {
            // Reset scrollTop initially
            scrollEl.scrollTop = 0;
  
            gsap.to(scrollEl, {
              scrollTop: ending,
              ease: "none",
              scrollTrigger: {
                trigger: container.current,
                start: "center center",
                end: `+=${scrollDistance}`,
                scrub: 2,
                pin: true,
                pinType: "transform",
                pinSpacing: true,
                anticipatePin: 1,
                onLeave: () => {
                  container.current.style.position = "relative";
                },
              },
            });
          });
        });
      });
    });
  
    return () => {
      if (ctx?.kill) ctx.kill();
      if (mm?.revert) mm.revert();
    };
  }, [container]);
  

  return (
    <div className='flex flex-col items-center justify-center w-full text-center h-auto lg:h-[100vh] z-[10] relative' ref={container} style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}>
      <h1 className='text-[45px] lg:text-[100px] my-heading text-white font-bold' style={{ transform: 'translate3d(0,0,0)' }}>Envision Your Legacy
      </h1>
      <div className='w-full h-auto lg:h-screen overflow-hidden scrollbar-hide flex flex-col items-center justify-center' ref={scrollRef} style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}>
        <div className='w-[90%] md:w-[80%] h-full flex items-center justify-center' style={{ transform: 'translate3d(0,0,0)' }}>
          <div className='columns-4 flex flex-wrap h-full m-auto items-center justify-center gap-3' style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', perspective: '1000px' }}>
            <div className={'mt-20 w-[22%] loading="lazy" h-[110px] md:h-[190px] lg:h-[290px]'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire1} className='!h-full !w-full rounded-3xl object-cover object-center' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy" h-[120px] md:h-[200px] lg:h-[280px]'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire18} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy" h-[90px] md:h-[170px] lg:h-[250px] mt-16'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire3} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy" h-[120px] md:h-[200px] lg:h-[290px]'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire4} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy" h-[100px] md:h-[180px] lg:h-[260px] -mt-2 md:-mt-10'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire5} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy" h-[140px] md:h-[270px] lg:h-[350px] -mt-10 md:-mt-10 lg:-mt-12'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire6} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy"   h-[80px] md:h-[160px] lg:h-[240px] -mt-12 md:-mt-30'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire7} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy"  h-[120px] md:h-[200px] lg:h-[290px] -mt-16 md:-mt-24'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire8} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy"  h-[140px] md:h-[270px] lg:h-[350px] -mt-2 md:-mt-12 lg:-mt-10'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire9} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy"  h-[100px] md:-[180px] lg:h-[260px] md:-mt-28 lg:-mt-12'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire10} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy"  h-[60px] md:h-[140px] lg:h-[320px] -mt-32 md:-mt-70 lg:-mt-42'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire2} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy"  h-[100px] md:h-[180px] lg:h-[260px] -mt-16 md:-mt-38'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire12} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy"  h-[140px] md:h-[270px] lg:h-[350px]'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empireliv} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy"  h-[90px] md:h-[170px] lg:h-[250px] -mt-20 md:-mt-84 lg:-mt-46'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire14} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy"  h-[140px] md:h-[270px] lg:h-[350px] lg:-mt-38 md:-mt-90 -mt-40'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire15} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy"  h-[140px] md:h-[270px] lg:h-[350px] -mt-20 md:-mt-52'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire16} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy"  h-[90px] md:h-[170px] lg:h-[250px] -mt-4 md:-mt-2'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire3} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy" h-[140px] md:h-[270px] lg:h-[350px] -mt-16 md:-mt-84 lg:-mt-54'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire2} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy" h-[140px] md:h-[270px] lg:h-[350px] -mt-26 md:-mt-65 lg:-mt-18'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire8} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy" h-[140px] md:h-[270px] lg:h-[350px] -mt-8 md:-mt-24'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire13} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className={'w-[22%] loading="lazy" h-[120px] md:h-[200px] lg:h-[290px]'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
            <div className='flex flex-col items-center w-[45%]' style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}>
              <div className={'w-[90%] h-[120px] md:h-[150px] -mt-8'} style={{ transform: 'translate3d(0,0,0)' }}><Image src={empirelivin} className='!h-full !w-full rounded-3xl object-contain' style={{ transform: 'translate3d(0,0,0)' }} />
              </div>
              <a
                href="/files/Empire Livings - Floor Plan (3).pdf"
                download
                className="h-[30px] md:h-auto cursor-pointer flex items-center justify-center bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[120px] md:w-[180px] lg:px-2 py-1 rounded-full transition-colors duration-300 transform text-[9px] md:text-sm lg:text-base whitespace-nowrap" style={{ transform: 'translate3d(0,0,0)' }}>Download Floor Plans</a>
            </div>
            <div className={'w-[22%] loading="lazy" h-[120px] md:h-[180px] lg:h-[260px]'} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}><Image src={empire19} className='!h-full !w-full rounded-3xl object-cover' style={{ transform: 'translate3d(0,0,0)' }} /></div>
          </div>
        </div>
      </div>
      <div className='absolute left-0 right-0 bottom-0 w-full md:h-[50px] lg:h-[50px]' style={{ background: 'linear-gradient(180deg, rgba(0, 46, 60, 0) 50%, #0E1527 97%)', transform: 'translate3d(0,0,0)' }}></div>
    </div>
  ) 
}

export default SectionThree