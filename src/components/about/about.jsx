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
import craft from '../../../public/assets/animation/reload-arrow.json'
import land from '../../../public/assets/animation/landmark-tower.json'
import star from '../../../public/assets/animation/star.json'
import Fadein from '../../common/fadein'







const about = () => {
  const [main, setmain] = useState(false)
  const [cloud, setcloud] = useState(false)


   const amenities = [
    {
      icon:craft,
      title: "Craftsmanship",
      h:50,
      w:50
    },
    {
      icon:land,
      title: "Thoughtful Design ",
      h:50,
w:50
    },
    {
      icon:star,
      title: "Signature Quality",
      h:50,
w:50
    }
  ];
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

const head='Who We Are'
const para="Empire Development stands out among the new-age real estate developers in UAE. We create modern, smart, long-lasting spaces. Based in Dubai, we not only build apartments, we shape modern living. Empire Development's every project is for those who value comfort, design, and long-term living."
const head2='Our Purpose'
const para2="Empire Development believes that houses should reflect the fast-paced world around you. We create smart, sustainable, futuristic, and reasonably priced homes. We aim to provide investors and residents with a place that feels like home from day one."
const head3='Our Approach'
const para3="Empire Development strategically situated each project in rapidly growing communities. We focus on smart layouts and luxury finishes. Empire Development offers built-in smart technology like lighting, temperature control, and safe access. We create living spaces that feature rooftop pools, gyms, green areas, and shops."
const head4='A Name You Can Trust on'
const para4="Empire Development is the leading UAE property developer. We guide clients through each step and every step. From selecting the right investment to post-handover help. Whether it's a new launch studio apartment or a personal residence, Empire Development is here to help you."


  return (
    <>
    <div className={`relative w-full md:!h-[600px] !h-[400px] z-20 ${count ===1 && 'bg-[#002E3C]'}` }  ref={ref}>

      <Header />
      

    <Heroslider texttwo={'About'}            className2={'!top-[23%] '}
 overlay={overlay} main={count ===1 ?false:true} cloud={cloud}  bottom={'hidden '}/>
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
    animate={{ opacity: count === 1 ? 1 : 0 }}
    transition={{ duration: 1.5, ease: 'easeInOut' }}
    className="absolute inset-0 h-[400px] opacity-0 flex items-end justify-end mx-4"
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
         
 

     <Fadein>    <Sectiontext classNamemain={ 'h-[500px] md:!h-[350px]'} classNameH={'!text-[65px] '} className={'md:!text-[20px] !text-[13px] !leading-5'} heading={true}  text1={head} text={para}/>  
     

  </Fadein>   




    <Fadein>   <Section />    </Fadein>   
        <Fadein>     <Sectiontext className main={'h-[500px] md:!h-[350px]'} classNameH={'!text-[65px] '} className={'md:!text-[20px] !text-[17px] !leading-8'} heading={true}  text1={head2} text={para2}/>    </Fadein>   

    <Fadein>   <Brand text1={'The Brand Pillars'} text2={'Built on 3 Key Pillars'} className2={'!text-black'} img={'/assets/chess.jpg'}   amenities={amenities} className={'grid grid-cols-3 gap-8 '} iconsize={'w-[30px] h-[30px] md:w-[50px] md:h-[50px]'}/>    </Fadein>   
     <Sectionthree /> 
    <Fadein>   <Sectionfour images={images}/>    </Fadein>   
</div>
          <Footer footertext={true} text1={head3} text={para3} text2={head4} textpara={para4}/>  
</>
  )
} 

export default about
