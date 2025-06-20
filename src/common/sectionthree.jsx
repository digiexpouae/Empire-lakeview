'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap';
import { easeInOut } from 'framer-motion';
import { motion, useInView } from 'framer-motion';
import Section_text from './section_text';
const sectionthree = ({ wrapper }) => {
  const ima = [{ logo: '/assets/cardlogo.jpg', text: 'Empire Lakeviews by Empire Developments is a luxury residential project located in Liwan, Dubailand, Dubai. This 29-storey development offers 604 units, including studios, 1- and 2-bedroom apartments, & 3-bedroom duplexes, with many units featuring private pools.', btn: 'View Project', im: '/assets/lakeview.jpg', className: 'z-[40]' }, { logo: '/assets/cardlogo3.png', text: 'Empire Livings is a 15-storey residential tower in Dubai Science Park, offering 202 units including studios, 1-bedroom apartments, and duplexes. Select homes feature private pools, with premium amenities such as a rooftop solar park, yoga deck, gym, and outdoor cinema.', btn: 'View Project', im: '/assets/aca90d068f6adc319f0ca21c6af07538d9cb4322.png', className: 'z-[30]' }
    , { logo: '/assets/cardlogo2.jpg', text: 'Empire Estates is an 11-storey luxury development in Arjan, Dubai, featuring 325 units comprising studios, 1-, 2-, & 3-bedroom apartments. With private pool options,the project offers lagoon-style pool, sky gym, paddle court, rooftop lounge, & smart home.', btn: 'View Project', im: '/assets/cbc303860f704bb9c770f6d5dc83b533c324b9f5.png', className: 'z-[20]' }]

  useEffect(() => {
    if (!wrapper?.current) return; // ✅ Safety check
    const child = document.querySelectorAll('.card-wrapper .cards');
    import('gsap/ScrollTrigger').then((module) => {
      const ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        // Desktop animation (original)
        const timeline = gsap.timeline({
          scrollTrigger: {
            pin: true,
            scrub: true,
            start: 'top top',
            end: "+=1500",
            trigger: wrapper.current,
          }
        });
        const stagger = 3;
        const duration = 0.5;
        timeline.from(child, {
          opacity: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          y: 40,
        }).to(child, {
          opacity: 1,
          duration: duration,
          rotationX: 20,
          stagger: stagger,
          y: 0, ease: "power2.inOut"
        });
      });

      mm.add('(max-width: 767px)', () => {
        // Mobile animation: fade/slide up each card, no pinning
        gsap.set(child, { opacity: 0, y: 0 });
        gsap.to(child, {
          opacity: 1,
          y: 0,
          stagger: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: wrapper.current,
            start: 'top 15%',
            end: 'bottom center',
            scrub: true,
            // No pinning on mobile
          }
        });
      });

      return () => mm.revert();
    });
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='w-full' >
 <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="my-heading heading "
      >
        Latest Projects
      </motion.h2>
      <section className='w-full flex flex-col items-center justify-center relative h-[400px] md:h-[500px] '>
        <div
          className={`flex items-center justify-evenly h-[50%] md:h-[80%] xl:h-[100%] w-[90%] md:w-[85%] gap-3 lg:w-[75%] bg-white rounded-2xl md:rounded-3xl duration-150`}
        >
          <div className='flex flex-col pl-2 pr-2 md:px-2 lg:gap-3 w-[55%] h-[160px]  md:h-[320px] xl:h-[360px] items-start justify-between'>
            <div className='h-[50px]  md:h-[90px] lg:h-[130px]'>
              <Image width={190} height={90} className='!h-full !w-full object-cover' src={ima[0].logo} alt='' />
            </div>
            <div className='leading-2 md:leading-6 xl:leading-7'>
              <span className='text-[9px]  md:text-[18px] lg:text-[20px] xl:text-[24px] my-heading text-[#2A2A2A]'>{ima[0].text}</span>
            </div>
            <div>
              <button className='  mt-3 bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[120px] lg:px-2 py-1 rounded-full transition-colors duration-300 transform text-[7px] md:text-sm lg:text-base whitespace-nowrap'>
                {ima[0].btn}
              </button>
            </div>
          </div>
          <div className='h-[160px]  md:h-[320px]  xl:h-[360px] w-[35%]'>
            <Image src={ima[0].im} width={250} height={400} alt='' className='!h-full !w-full object-cover rounded-2xl' />
          </div>
        </div>
        <div className='card-wrapper w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center pointer-events-none'>
          {ima.slice(1).map((elem, index) => {
            return (
              <div
                key={index}
                className={`cards flex items-center justify-evenly h-[50%] md:h-[80%] xl:h-[100%] absolute w-[90%] md:w-[85%] gap-3 lg:w-[75%] bg-white rounded-2xl md:rounded-3xl duration-150`}
              >
                <div className='flex flex-col pl-2 pr-2 md:px-2 lg:gap-3 w-[55%] h-[160px]  md:h-[320px] xl:h-[360px] items-start justify-between'>
                  <div className='h-[50px]  md:h-[90px] lg:h-[130px]'>
                    <Image width={190} height={90} className='!h-full !w-full object-cover' src={elem.logo} alt='' />
                  </div>
                  <div className='leading-2 md:leading-6 xl:leading-7'>
                    <span className='text-[9px]  md:text-[18px] lg:text-[20px] xl:text-[24px] my-heading text-[#2A2A2A]'>{elem.text}</span>
                  </div>
                  <div>
                    <button className='  mt-3 bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[120px] lg:px-2 py-1 rounded-full transition-colors duration-300 transform text-[7px] md:text-sm lg:text-base whitespace-nowrap'>
                      {elem.btn}
                    </button>
                  </div>
                </div>
                <div className='h-[160px]  md:h-[320px]  xl:h-[360px] w-[35%]'>
                  <Image src={elem.im} width={250} height={400} alt='' className='!h-full !w-full object-cover rounded-2xl' />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}

export default sectionthree;
