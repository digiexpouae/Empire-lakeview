'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {gsap} from 'gsap';
import { easeInOut } from 'framer-motion';
import Section_text from './section_text';
const sectionthree = ({wrapper}) => {
    const ima=[{logo:'/assets/45b89b0587f5c1c86e87d388ef5194978323e6db.png',text:'Empire Lakeviews by Empire Developments is a luxury residential project located in Liwan, Dubailand, Dubai. This 29-storey development offers 604 units, including studios, 1- and 2-bedroom apartments, & 3-bedroom duplexes, with many units featuring private pools.',btn:'View Project',im:'/assets/lakeview.jpg',className:'z-[40]'},{logo:'/assets/45b89b0587f5c1c86e87d388ef5194978323e6db.png',text:'Empire Livings is a 15-storey residential tower in Dubai Science Park, offering 202 units including studios, 1-bedroom apartments, and duplexes. Select homes feature private pools, with premium amenities such as a rooftop solar park, yoga deck, gym, and outdoor cinema.',btn:'View Project',im:'/assets/aca90d068f6adc319f0ca21c6af07538d9cb4322.png',className:'z-[30]'}
        ,{logo:'/assets/f8853b075a30feff95b8afa0ca7fcc4f979c8c1d.png',text:'Empire Estates is an 11-storey luxury development in Arjan, Dubai, featuring 325 units comprising studios, 1-, 2-, & 3-bedroom apartments. With private pool options,the project offers lagoon-style pool, sky gym, paddle court, rooftop lounge, & smart home.',btn:'View Project',im:'/assets/cbc303860f704bb9c770f6d5dc83b533c324b9f5.png',className:'z-[20]'}]
 
useEffect(() => {
      if (!wrapper?.current) return; // ✅ Safety check
    const child = document.querySelectorAll('.card-wrapper .cards');
  import('gsap/ScrollTrigger').then((module) => {
    const ScrollTrigger = module.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

     const timeline = gsap.timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      start:'top top',
    end: "+=1500",
      trigger: wrapper.current, 
    } 
  });
    const stagger = 3;
  const duration = 0.5;


timeline.from(child,{
      opacity:0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
  y:40,

}).to(child, {  
       opacity:1,
      duration: duration,

        rotationX: 20,
        stagger: stagger,
        y: -50, ease: "power2.inOut"
})


}

)  
  }, []);

    return (<div className='w-full' >
               <h2 className='my-heading heading py-5'>Latest Projects</h2>

    <section className=' w-full flex  flex-col items-center justify-center card-wrapper relative h-[450px] md:mt-8' >


  {ima.map((elem, index) => {
  return (
    <div
      key={index}
      className={`cards flex items-center justify-center h-[60%] md:h-[100%] absolute w-[90%] md:w-[85%] gap-3 lg:w-[75%] bg-white rounded-3xl duration-150` }   
    >
      <div className='flex flex-col w-[55%]'>
        <div className='h-[60px] w-[120px] md:w-[210px] md:h-[120px]'>
          <Image width={280} height={280} className='!h-full !w-full object-cover' src={elem.logo} alt='' />
        </div>
        <div className='leading-4 md:leading-7'>
          <span className='text-[9px] leading-0 md:text-[15px] lg:text-[20px] my-heading'>{elem.text}</span>
        </div>
        <div>
          <button className='  mt-3 bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[120px] lg:px-2 py-1 rounded-full transition-colors duration-300 transform text-[7px] md:text-sm lg:text-base whitespace-nowrap'>
            {elem.btn}
          </button>
        </div>
      </div>
      <div className='h-[120px] md:h-[230px] lg:h-[320px] w-[35%]'>
        <Image src={elem.im} width={250} height={400} alt='' className='!h-full !w-full object-cover rounded-2xl' />
      </div>
    </div>
  );
})}
    </section>
    </div>
  )
}

export default sectionthree;
