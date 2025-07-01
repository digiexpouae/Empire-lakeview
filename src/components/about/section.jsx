import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import About1 from '../../../public/assets/mission.png'
import About2 from '../../../public/assets/vision.png'
import { motion } from 'framer-motion'
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
    <div className='flex flex-col items-center justify-center h-[800px] gap-8 md:gap-[20px] w-full overflow-hidden px-2' ref={ref}>
      {/* Vision Section */}
      <motion.div
        className='flex flex-col md:flex-row items-center justify-evenly w-full md:w-[80%] md:gap-16 gap-6'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className='relative h-[180px] xs:h-[200px] sm:h-[220px] md:h-[300px] w-full md:w-[50%] lg:w-[40%] z-20'>
          <Image src={About1} className='!h-full !w-full !object-cover rounded-2xl' />
        </div>
        <div className='text-white w-full md:w-[40%] lg:w-[40%] mt-2 mb-4 md:mb-5 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left' ref={ref1}>
          <h2 className='lg:text-[80px] text-[26px] xs:text-[28px] sm:text-[30px] md:text-[35px] font-bold'>Vision</h2>
          <span className='lg:text-[20px] text-[13px] xs:text-[14px] sm:text-[15px] md:text-[15px] leading-6'>To be a leading force in redefining real estate excellence by creating iconic, sustainable communities that inspire modern living.</span>
        </div>
      </motion.div>
      {/* Mission Section */}
      <motion.div
        className='flex flex-col md:flex-row gap-6 md:gap-[20px] items-center justify-evenly w-full md:w-[80%]'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className='w-full md:w-[40%] lg:w-[40%] text-white order-2 md:order-1 mt-2 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left' ref={ref2}>
          <h2 className='lg:text-[80px] text-[26px] xs:text-[28px] sm:text-[30px] md:text-[35px] font-bold'>Mision</h2>
          <span className='lg:text-[20px] text-[13px] xs:text-[14px] sm:text-[15px] md:text-[15px] leading-6'>To deliver innovative, high-quality developments that exceed expectations, enrich lifestyles, and build long-term value for our clients, partners, and communities.</span>
        </div>
        <div className='relative h-[180px] xs:h-[200px] sm:h-[220px] md:h-[300px] md:w-[50%] lg:w-[40%] w-full z-20 order-1 md:order-2'>
          <Image src={About2} className='!h-full !w-full !object-cover rounded-2xl' />
        </div>
      </motion.div>
    </div>
  )
}

export default section



