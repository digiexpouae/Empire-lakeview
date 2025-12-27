'use client'
'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const introducing = ({ className, className1, text1, links, btntext, ima, overlay, introRef }) => {
  const containerRef = useRef(null)
  const sliderRef = useRef(null)
  //   useEffect(() => {
  //     const runGsap = async () => {
  //       const gsap = (await import('gsap')).default;
  //       const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
  //       gsap.registerPlugin(ScrollTrigger);

  //       // Clear any existing ScrollTriggers
  //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  //       // Set initial state for animation
  //       gsap.set('.project-card', { 
  //         y: 100,
  //         opacity: 0 
  //       });

  //       // Create the animation timeline
  //       const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: overlay && introRef?.current ? introRef.current : containerRef.current,
  //     start: 'top top',
  //     end:  `+=500`,
  //     scrub: true,
  //     pin: true,
  //     pinSpacing: true,
  //   },
  //   duration: 1
  // }
  //     )
  //     }

  //     runGsap()

  //     return () => {
  //       if (typeof window !== 'undefined') {
  //         const { ScrollTrigger } = require('gsap/ScrollTrigger')
  //         ScrollTrigger.getAll().forEach(t => t.kill())
  //       }
  //     }
  //   }, [])





  return (

    <div className={`w-full ${className1} relative `} ref={containerRef}>

      {/* Mobile Slider */}
      <div className='md:hidden w-full py-8 relative' style={{ minHeight: '300px' }}>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={15}
          centeredSlides={false}
          loop={true}
          style={{
            height: '100%',
            width: '100%',
            padding: '0 16px',
            '--swiper-navigation-color': '#CCAB64',
            '--swiper-pagination-color': '#CCAB64',
            '--swiper-pagination-bullet-inactive-color': '#FFFFFF80',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
            '--swiper-pagination-bullet-size': '8px'
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet bg-white/50',
            bulletActiveClass: '!bg-[#CCAB64]'
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          className="w-full h-full"
        >
          {ima.map((elem, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <div className="relative h-full w-full mx-1">
                <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={elem.im}
                    alt={elem.text || `Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className='absolute inset-0 bg-black/40 z-10 rounded-2xl'></div>
                  <div className='absolute left-4 bottom-6 z-40 right-4'>
                    <h2 className='text-white text-xl font-bold mb-3 drop-shadow-md'>{elem.text}</h2>
                    <a
                      className='button flex items-center justify-center py-2 px-6 w-auto text-sm bg-[#CCAB64] text-white rounded-full hover:bg-[#D4B97A] transition-colors shadow-lg'
                      href={elem.link}
                    >
                      View projects
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center space-x-4">
        <button className="swiper-button-prev w-10 h-10 rounded-full bg-[#CCAB64] flex items-center justify-center hover:bg-[#D4B97A] transition-colors shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="swiper-pagination !relative !w-auto mx-4"></div>
        
        <button className="swiper-button-next w-10 h-10 rounded-full bg-[#CCAB64] flex items-center justify-center hover:bg-[#D4B97A] transition-colors shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div> */}
      </div>

      {/* Original Desktop Layout - Completely Unchanged */}
      <div className="hidden md:block">
        <div className={`w-full whitespace-nowrap ${className1} flex flex-col items-center gap-[20px] container relative`}>
          <div className={`inline-flex gap-[20px]`} ref={sliderRef}>
            {ima.map((elem, index) => (
              <div
                key={index}
                className={`shrink-0 inline-block md:w-[180px] xl:w-[340px] w-[220px] md:h-[450px] h-[450px] relative ${className}`}
              >
                <Image
                  src={elem.im}
                  priority
                  alt={`Slide ${index}`}
                  className={`!h-full !w-full object-cover rounded-2xl relative`}
                />
                <div className='absolute left-0 right-0 top-0 bottom-0 bg-black/40 z-10 rounded-2xl'></div>
                <div className='absolute left-3 bottom-6 z-40'>
                  <h2 className='text-white text-sm md:text-[23px] font-bold my-heading'>{elem.text}</h2>
                  <a className='button flex items-center justify-center !py-[3px] !w-[90px] md:!w-[130px] !text-[8px] md:!text-[15px]' href={elem.link}>
                    View projects
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );

}

export default introducing



