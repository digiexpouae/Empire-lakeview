import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import About1 from '../../../public/assets/about1.jpg'
import About2 from '../../../public/assets/about2.jpg'
import {gsap} from 'gsap'
const section = () => {
const ref1=useRef(null);
const ref2=useRef(null);
useEffect(()=>{
 if (ref1.current && ref2.current) {
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
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-[800px] w-full overflow-hidden'>
        <div className='flex  md:flex-row flex-col items-center justify-evenly w-[80%] gap-16 '>
            <div className='relative md:h-[300px] w-full md:w-[40%] z-20'>
                <Image  src={About1} className='!h-full !w-full !object-cover rounded-2xl'/>
            </div>
            <div className='text-white w-full md:w-[40%]' ref={ref1}><h2 className='md:text-[80px] text-[25px]'>Vision</h2><span className='md:text-[20px] leading-6'>To be a leading force in redefining real estate excellence by creating iconic, sustainable communities that inspire modern living.</span></div>
        </div>
        <div className='flex md:flex-row flex-col items-center justify-evenly w-[80%]'>
                     <div className='md:w-[40%] w-full text-white' ref={ref2}>< h2 className='md:text-[80px] text-[25px]'>Mision</h2><span className='md:text-[20px] leading-6'>To deliver innovative, high-quality developments that exceed expectations, enrich lifestyles, and build long-term value for our clients, partners, and communities.</span></div>
               <div className='relative md:h-[300px] md:w-[40%] w-full  z-20'>
                <Image src={About2} className='!h-full !w-full !object-cover rounded-2xl'/>

            </div>

        </div>
      
    </div>
  )
}

export default section



