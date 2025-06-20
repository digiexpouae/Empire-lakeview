import React, { useEffect, useRef, useState } from 'react'
import Heroslider from '@/common/heroslider'
import Hero from '../../../public/assets/heroim.jpg'
import Header from '../../layout/header'
import Footer from '@/layout/footer'
import Image from 'next/image'
import Sectiontext from '../../common/section_text'
import Section from '../about/section'
import Sectionthree from '../about/sectionthree'
import Brand from '@/common/brand'
import Sectionfour from '../../common/section_four'
import SectionFour from '@/common/section4';
import contactbg from "../../../public/assets/contact.png"
import BackImage from '../../../public/assets/heroim.jpg'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from 'framer-motion';
import craft from '../../../public/assets/animation/reload-arrow.json'
import land from '../../../public/assets/animation/landmark-tower.json'
import star from '../../../public/assets/animation/star.json'
import Fadein from '../../common/fadein'
import { HeroDemo1 } from '../hero-gallery-demos'
import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/hero-gallery-scroll-animation";







const about = () => {
  const [main, setmain] = useState(false)
  const [cloud, setcloud] = useState(false)


  const amenities = [
    {
      icon: craft,
      title: "Craftsmanship",
      h: 50,
      w: 50
    },
    {
      icon: land,
      title: "Thoughtful Design ",
      h: 50,
      w: 50
    },
    {
      icon: star,
      title: "Signature Quality",
      h: 50,
      w: 50
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
      src: '/assets/heroim.jpg',
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

  const head = 'Who We Are'
  const para = "Empire Development stands out among the new-age real estate developers in UAE. We create modern, smart, long-lasting spaces. Based in Dubai, we not only build apartments, we shape modern living. Empire Development's every project is for those who value comfort, design, and long-term living."
  const head2 = 'Our Purpose'
  const para2 = "Empire Development believes that houses should reflect the fast-paced world around you. We create smart, sustainable, futuristic, and reasonably priced homes. We aim to provide investors and residents with a place that feels like home from day one."
  const head3 = 'Our Approach'
  const para3 = "Empire Development strategically situated each project in rapidly growing communities. We focus on smart layouts and luxury finishes. Empire Development offers built-in smart technology like lighting, temperature control, and safe access. We create living spaces that feature rooftop pools, gyms, green areas, and shops."
  const head4 = 'A Name You Can Trust on'
  const para4 = "Empire Development is the leading UAE property developer. We guide clients through each step and every step. From selecting the right investment to post-handover help. Whether it's a new launch studio apartment or a personal residence, Empire Development is here to help you."


  return (
    <>
      <div className="w-full relative md:h-[600px] h-[400px]">
        <Header />
        <Heroslider
          className3={'top-2 lg:top-5 md:top-9 xl:top-12'}
          className2={'!top-[23%] md:!top-12 xl:!top-8'}
          texttwo={'About Us'}
          main={true}
          bottom={'bottom-0 !h-[240px] md:!h-[400px] !w-[85%] md:!w-[70%] lg:!w-[50%] hidden'}
          cloud={false}
        />
        <div className="absolute inset-0 -z-10">
          <Image
            src={BackImage}
            fill
            priority
            alt="Background"
            className={`object-cover transition-opacity duration-700`}
          />
        </div>
      </div>

      <div className='bg-[#0E1527]'>
        <Fadein>
          <Sectiontext classNamemain={'h-[500px] md:!h-[350px]'} classNameH={'!text-[65px] '} className={'md:!text-[20px] !text-[13px] !leading-5'} heading={true} text1={head} text={para} />
        </Fadein>
        
        <Fadein>
          <Section />
        </Fadein>

        <Fadein>

        <div
        style={{
          backgroundColor: '#0E1527',
          backgroundImage: 'url(/assets/b04ad572115c3ef55b1422dbcbd8ed244b4024b6.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay',
          backgroundOpacity: '0.5',
          backgroundBlendMode: 'overlay',
        }}
        className=' bg-cover md:bg-contain bg-center bg-no-repeat bg-fixed'>
        <HeroDemo1 />
      </div>

        </Fadein>

        <Fadein>   <Brand text1={'The Brand Pillars'} brand={true} text2={'Built on 3 Key Pillars'} className2={'!text-black'} img={'/assets/chess.jpg'} amenities={amenities} className={'grid grid-cols-3 gap-8 '} about={true} iconsize={'w-[30px] h-[30px] md:w-[50px] md:h-[50px]'} />    </Fadein>
        <Sectionthree />
        
        <Fadein>    <SectionFour images={contactbg} />   </Fadein>
      </div>
      <Footer />
    </>
  )
}

export default about
