import React, { use, useRef } from 'react'
import map from '../../public/assets/map.png';
import Image from 'next/image';
import Slider from '.././components/slider_Two'
import car from '../../public/assets/car.png'
import map1 from '../../public/assets/map1.png'
import map2 from '../../public/assets/map2.png'

import map3 from '../../public/assets/map3.png'

import map4 from '../../public/assets/map4.png'
const places = () => {

const movingRef=useRef()
const resetTimeoutRef = useRef(); // Put this at the top of your component
const handleSlideChange = (swiper) => {
    const index = swiper.realIndex; // Use realIndex for loop-safe index
    console.log('Slide changed to:', index +index * 180);
  
    if (movingRef.current) {
      // Clear any existing timeout to avoid stacking
      clearTimeout(resetTimeoutRef.current);
  
    //   if (index === 3) {
    //     // Delay reset by 4 seconds if on last slide
    //     resetTimeoutRef.current = setTimeout(() => {
    //       movingRef.current.style.transform = 'translateY(0)';
    //     }, 4000);
    //   }
       if(movingRef) {
        // Move immediately on all other slides
        movingRef.current.style.transform = `translateY(-${index * 20}vw)`;
      }
    }
  };
    const im=[map1,map2,map3,map4]
 return(
    <div>
      <div className=' bg-[#002E3C] w-full text-white' >
      <div className='flex flex-col items-center justify-center gap-[100px] mt-[20px]'>
        <div className='flex flex-col items-center justify-center'>
        <h2 className='my-heading text-[80px]  font-bold'>In The Heart Of It All</h2>
        <p className='mb-[50px]'>Perfectly Positioned in Liwan, Dubailand</p>  <div className="flex items-center justify-center w-full">
        <hr className="border border-white w-[80vw] relative " />
        
        <span className='w-[15px] h-[15px] absolute left-[20%] z-20 bg-white rounded-2xl'></span>
         <span className='w-[15px] h-[15px] absolute left-[40%] z-20 bg-white rounded-2xl'></span>
          <span className='w-[15px] h-[15px] absolute left-[60%]  z-20 bg-white rounded-2xl'></span>
          <span className='w-[15px] h-[15px] absolute left-[80%] z-20 bg-white rounded-2xl'></span>
          <div className='!w-[127px] !h-[72px] absolute left-[20%] rotate-90 z-30'><Image src={car} objectFit='cover' ref={movingRef} className='transition-transform duration-700 ease-in-out'/></div>
          </div> </div>
       
        <div className='w-[80vw] h-[500px]'>
            <Slider images={im} delay={4000} slidesize={'!h-[600px] !w-[800px]'} handleSlideChange={handleSlideChange} slide={'w-[800px] !h-[400px]'} num={1}/>
        </div>
      </div>
    </div>

    </div>
  )
}

export default places
