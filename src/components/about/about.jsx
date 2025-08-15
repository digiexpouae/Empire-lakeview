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

import Textsection from '../../common/hometext'





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
      <div className="w-full relative md:h-screen h-screen">
        <Header />
        <Heroslider
          className3={'top-2 lg:top-5 md:top-9 xl:top-12'}
          className2={'!top-[50%] md:!top-[40%] xl:!top-[35%]'}
          texttwo={'About Us'}
          main={true}
          overlay={false}
          bottom={'bottom-0 !h-[240px] md:!h-[400px] !w-[85%] md:!w-[70%] lg:!w-[50%] hidden'}
          cloud={false}
        texttwoclass={'xl:!text-[120px] lg:!text-[120px]'}

        />
        <div className="absolute inset-0 -z-10">
          <Image
            src={BackImage}
            fill
            priority
            alt="Background"
            className={`object-cover transition-opacity duration-700`}
            priority
          />
        </div>
      </div>

      <div className='bg-[#0E1527]'>
        <Fadein>
                  <Textsection head={'Redefining Luxury Living in Dubai'}  text={"At Empire Developments, we craft more than homes — we create architectural landmarks that embody elegance, innovation, and exclusivity. From the heart of Dubai’s most prestigious addresses to emerging lifestyle destinations, our developments offer unparalleled views, bespoke interiors, and world-class amenities designed for those who demand the finest. With Empire Developments, every detail is a statement, every space a sanctuary, and every home a legacy"} />

        </Fadein>
            <Fadein>
            <Sectionthree /></Fadein>
        
        <div>
          <Fadein>
            <Section />
          </Fadein>
        </div>


        <Fadein>


        </Fadein>

        <Fadein>   <Brand />    </Fadein>
    
        
        <Fadein>    <SectionFour images={contactbg} />   </Fadein>
      </div>
      <Footer />
    </>
  )
}

export default about
