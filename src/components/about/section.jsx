import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import About1 from '../../../public/assets/about1.jpg'
import About2 from '../../../public/assets/about2.jpg'
import { useInView } from 'react-intersection-observer'
import {gsap} from 'gsap'
const section = () => {
const ref1=useRef(null);
const ref2=useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,  // Triggers only once
    threshold: 0.2,     // 50% of the element should be in view
  });


useEffect(()=>{
 if (inView && ref1.current && ref2.current) {
      gsap.fromTo(
        ref1.current,
        { x: '-80%', opacity: 0.4,zIndex:10 },
        { x: '0%', opacity: 1, duration: 3}
      )

      gsap.fromTo(
        ref2.current,
        { x: '80%', opacity: 0.4,zIndex:10 },
        { x: '0%', opacity: 1, duration: 3 }
      )
    }
  }, [inView])

  return (
    <div className='flex flex-col items-center justify-center h-screen md:h-[800px] h-[auto] gap-[20px] md:gap-[20px] gap-[10px] w-full overflow-hidden' ref={ref}>
        <div className='flex  md:flex-row flex-col items-center justify-evenly w-[80%] gap-16 md:gap-16 gap-6 '>
            <div className='relative h-[220px] md:h-[300px] w-full md:w-[50%] lg:w-[40%] z-20'>
                <Image  src={About1} className='!h-full !w-full !object-cover rounded-2xl'/>
            </div>
            <div className='text-white w-full md:w-[40%] lg:w-[40%] mt-4 md:mt-0' ref={ref1}>
              <h2 className='lg:text-[80px] text-[28px] md:text-[35px]'>Vision</h2>
              <span className='lg:text-[20px] text-[14px] md:text-[15px] leading-6'>To be a leading force in redefining real estate excellence by creating iconic, sustainable communities that inspire modern living.</span>
            </div>
        </div>
        <div className='flex md:flex-row flex-col gap-[20px] md:gap-[20px] gap-[10px] items-center justify-evenly w-[80%]'>
            <div className='md:w-[40%] lg:w-[40%] w-full text-white order-2 md:order-1 mt-4 md:mt-0' ref={ref2}>
              <h2 className='lg:text-[80px] text-[28px] md:text-[35px]'>Mision</h2>
              <span className='lg:text-[20px] text-[14px] md:text-[15px] leading-6'>To deliver innovative, high-quality developments that exceed expectations, enrich lifestyles, and build long-term value for our clients, partners, and communities.</span>
            </div>
            <div className='relative h-[220px] md:h-[300px] md:w-[50%] lg:w-[40%] w-full z-20 order-1 md:order-2'>
                <Image src={About2} className='!h-full !w-full !object-cover rounded-2xl'/>
            </div>
        </div>
      
    </div>
  )
}

export default section



