import React, { useEffect, useRef, useState } from 'react'
import Heroslider from '@/common/heroslider'
import Hero from '../../../public/assets/heroim.jpg'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import Image from 'next/image'
import Sectiontext from '../../common/section_text'
import Section from '../about/section'
import Sectionthree from '../about/sectionthree'
import Brand from '@/common/brand'
import Sectionfour from '../../common/section_four'
import BackImage from  '../../../public/assets/heroim2.jpg'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer';
import {AnimatePresence, motion } from 'framer-motion';







const about = () => {
  const [main, setmain] = useState(false)
  const [cloud, setcloud] = useState(false)
  const images = [
  {
    src: '/assets/about cta.jpg',
       title: '',
    subtitle: '',
  }
];

  const { ref, inView } = useInView({
    triggerOnce: true,  // Triggers only once
    threshold: 0.2,     // 50% of the element should be in view
  });

    const [overlay, setoverlay] = useState(false)
const [back, setback] = useState(false)
      const [prevIndex, setPrevIndex] = useState(0);
      const [isTransitioning, setIsTransitioning] = useState(false);
      const [count, setCount] = useState(0);
const [Index, setIndex] = useState(0)
  // const frontImageRef = useRef(null);
  // const backImageRef = useRef(null);
  const imag = [
  {
    src:'/assets/heroim.jpg',
       title: '',
    subtitle: '',
  }
];


const handleClick = () => {
  if (isTransitioning) return;

  setCount(prevCount => {
    if (prevCount >= 2) return prevCount;

    const nextCount = prevCount + 1;

    if (nextCount === 1) {
      const nextIndex = (Index + 1) % imag.length;
      setPrevIndex(Index);
      setback(true)
      setIndex(nextIndex);
    }

    return nextCount;
  });
};



useEffect(() => {
  if (inView && count === 0) {
    const timeout = setTimeout(() => {
      handleClick();
    }, 3000);

    return () => clearTimeout(timeout); // prevent memory leaks
  }
}, [inView, count]);







  return (
    <>
    <div className={`relative w-full md:!h-[600px] !h-[400px] z-20 ${count ===1 && 'bg-[#002E3C]'}` }  ref={ref}>
                
      <Header />
      <Heroslider texttwo={'About'} overlay={overlay} main={count ===1 ?false:true} cloud={cloud}  bottom={'hidden '}/>
      {/* Previous image */}
        <AnimatePresence  mode="wait">
      <motion.div
        key={imag[Index].src + '-prev'}
             initial={{ opacity: 1,scaleX:1,scaleY:1}}
             animate={{opacity:[1,0] ,scaleX:0.5 , scaleY:0.8,duration:1.7}}
          transition={{ duration:3,ease: 'easeInOut',    delay: 3, // 👈 delays start of animation
}}
        className="absolute inset-0 z-10 "
      >
        
        <Image
          src={imag[Index].src}
          alt="Previous"
          height={700}
          width={1200}
          className={`object-cover !h-[100%] absolute object-center !w-[100%] `}
          priority
        />
      </motion.div>
</AnimatePresence>
   {console.log(count)}

 
        <div className={` absolute left-0 right-0 bottom-0 top-0 flex  items-center justify-evenly h-full  w-full px-2 md:px-4 z-0 '`}  >
        <div className='flex flex-col justify-end w-[20%] h-[400px] text-white '><span className='text-[35px] font-bold md:text-[85px] my-heading'>25+</span><span className=' text-[10px] md:text-[20px]'>Years of Unwavering Excellence</span></div>
     <div className="h-[400px] w-[40%] md:w-[25%] relative flex">
  <motion.div
    initial={false}
    animate={{ opacity: count === 1 ? 1 : 0 }}
    transition={{ duration: 1.5, ease: 'easeInOut' }}
    className="absolute inset-0 h-[400px]  flex items-end justify-end mx-4"
  >
    <Image
      src={BackImage}
      alt="Back"
      className="object-cover !h-[80%] bottom-0  md:!h-full rounded"
      priority
    />
  </motion.div>
</div>

         <div className= 'w-[30%] flex items-start justify-start text-white'><span className='my-heading text-[10px] md:text-[20px]'>Empire Developments is redefining urban living with innovative, high-quality projects across Dubai. Trusted, visionary, and committed to building vibrant communities</span></div>
        </div>


     
    </div>
 <div className='bg-[#002E3C]'>
<Sectiontext  text={'Empire Developments is a Dubai-based real estate company known for delivering innovative, high-quality residential projects. With a focus on design excellence, smart features, and lifestyle amenities, Empire is redefining urban living across prime Dubai locations.'}/>
<Section />
<Brand text1={'The Brand Pillars'} text2={'Built on 3 Key Pillars'} img={'/assets/chess.jpg'}/>
<Sectionthree />
<Sectionfour images={images}/>
</div>
        <Footer /> 
</>
  )
}

export default about
