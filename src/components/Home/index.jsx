import React, { useRef } from 'react'
import Heroslider from '../../common/heroslider'
import EmailPop from '../../common/emailpop'
import { useState, useEffect } from 'react'
import Header from '@/layout/header'
import dynamic from 'next/dynamic';

// Dynamically import ChatWidget with no SSR to avoid window is not defined errors
const ChatWidget = dynamic(() => import('@/components/ChatWidget/ChatWidget'), {
  ssr: false,
});
import Sectionthree from '../../common/sectionthree'
import ima1 from '../../../public/assets/d3cffac39c025499b5d643c23941091538a28358.png';
import ima2 from '../../../public/assets/896f9f592b964d92926d050a82ffdf7c0cc52923.jpg';
import ima3 from '../../../public/assets/a0085398a559c041737ed82d891a967e8c17390a.jpg';
import Sectiontwo from '../../common/section_text'
import Introducing from '@/common/introducingtwo'
import Footer from '@/layout/footer'
import im1 from '../../../public/assets/cloud_one.png'
import Image from 'next/image';
import Brand from '@/common/brand';
import Section from './sectiontwo'
import Voice from '../../../public/assets/animation/Voice (1).json'
import Card from '../../../public/assets/animation/Payment (1)[1].json'
import Process from '../../../public/assets/animation/Process (1).json'
import Special from '../../../public/assets/animation/Special Request.json'
import craft from '../../../public/assets/animation/reload-arrow.json'
import land from '../../../public/assets/animation/landmark-tower.json'
import star from '../../../public/assets/animation/star.json'
import Demand from '../../../public/assets/animation/high-demand (1).json'
import fraud from '../../../public/assets/animation/online-banking-fraud-prevention (1).json'
import Growth from '../../../public/assets/animation/Growth (1).json'
import { HeroDemo1 } from "@/components/blocks/hero-gallery-scroll-demo"
import SectionFour from '@/common/section4';
import contactbg from "../../../public/assets/contact.png"
import Vision from "../../common/vision"
import Hero from './Hero'
import chess from '../../../public/assets/chess.jpg'
import Section_two from '../../common/section_two';
import LatestProjectsCarousel from '@/common/latestProjectsCarousel';
import AdvantagesSection from '@/common/advantage_home'
import Textsection from '../../common/hometext'
const index = () => {
  const [showEmailPop, setShowEmailPop] = useState(false);

    useEffect(() => {
    const timer = setTimeout(() => setShowEmailPop(true), 10_000); // 10 000 ms = 10 s
    return () => clearTimeout(timer); // clean-up if the component unmounts early
  }, []);

  useEffect(() => {
    const lockScroll = () => {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.touchAction = 'none';
    };
    const unlockScroll = () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.touchAction = '';
    };
    if (showEmailPop) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return () => {
      unlockScroll();
    };
  }, [showEmailPop]);
  const ima = [{im:ima1,link:'/plazoheights',text:'Plazzo heights'}, {im:ima2,link:'/plazoresidence',text:'Plazzo Residence'}, {im:ima3,link:'/Empireresidence',text:'Empire Residence'}]

  const main = useRef(null)

  const amenities = [
    {
      icon: craft,
      title: "High-Yield Returns",
      h: 50,
      w: 50
    },
    {
      icon: land,
      title: "Iconic Landmarks ",
      h: 50,
      w: 50
    },
    {
      icon: star,
      title: "Unmatched Luxury & Style",
      h: 50,
      w: 50
    }, {
      icon: Demand,
      title: "Strong Rental Demand",
      h: 50,
      w: 50
    }, {
      icon: fraud,
      title: "Proven Track Record",
      h: 50,
      w: 50

    },
    {
      icon: Growth,
      title: "Future Growth Potential",
      h: 50,
      w: 50
    }
  ]
  const icons = [
    {
      icon: Voice,
      title: "Voice service request",
      h: 50,
      w: 50
    },
    {
      icon: Card,
      title: "Online payment ",
      h: 50,
      w: 50
    },
    {
      icon: Process,
      title: " Digital handover process",
      h: 50,
      w: 50
    },
   
  ]

  const introRef = useRef(null)
  const brandRef = useRef(null)
  const text = 'Empower your property ownership experience with our seamless and efficient 24/7 property management services. At Empire Estate, we understand the importance of convenience and peace of mind. Our dedicated team ensures that your property is managed around the clock, providing you with the assurance and support you deserve. Welcome to a new era of property management tailored to your lifestyle.'
  const imag = [
    {
      src: '/assets/ee70d663c4a8db7d05f72f368ee23dc4874fe3d5.png',
      title: '',
      subtitle: '',
    }
  ];
  const wrapper = useRef(null)
  const img = [{ im: '/assets/home1.png', className: ' md:w-[20%] h-[160px] w-[50%] lg:h-[400px]  md:h-[280px]  left-[5%]' }, { im: '/assets/home3.png', className: ' h-[130px] w-[100%] md:w-[40%]  md:h-[230px] lg:h-[300px]' }, { im: '/assets/d7fac30352dfae4c1c87aff3ad6d3e311658833a.png', className: 'w-[100%] right-[5%] md:w-[34%] h-[130px] md:h-[250px] lg:h-[300px] z-[999] md:right-[10%]' }]
  const back = '/assets/3837ceaa4e2c8efd1acd975f7cdb181e3ba97fb9.png'
  return (
    <>

      {/* EMAIL POPUP MODAL */}
      {showEmailPop && (
        <div style={{zIndex: 99999}} className="fixed inset-0 bg-transparent bg-opacity-60 flex items-center justify-center">
          <div className="relative">
            <button
              onClick={() => setShowEmailPop(false)}
              className="absolute top-2 right-2 text-white hover:text-black bg-red-500 rounded-full w-7 h-7 flex items-center justify-center z-10"
              aria-label="Close popup"
            >
              &times;
            </button>
            <EmailPop />
          </div>
        </div>
      )}
      {/* index.. home added next
      <div className='w-full relative md:h-screen h-[400px]'>

     
        <Heroslider className={'top-[15%]'} main={false} cloud={true} Home={true} img={img} className2={'z-[999]'} textone={'Begin your'} bottom={'bottom-[-60px]'} im1={im1} im2={im1} className1={' left-[40%] top-2 md:top-10'} texttwo={'Journey'} overlay={true} />
        <Image src={back} className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] md:h-full' width={1200} height={1000} />
      </div> */}

      <Header className='nav-menu absolute z-50' />

      <Hero/>

      {/* <div
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
        className='md:block hidden bg-cover md:bg-contain bg-center bg-no-repeat bg-fixed'>
        <HeroDemo1 />
      </div> */}
        <Textsection  head={'Discover a New Era of Living'} text={'Welcome to Empire Development, a leading real estate developer in Dubai. We create smart, eco-friendly, and luxurious homes. Our future-ready homes combine luxury, cutting-edge technology, and elegant design. Empire Development is transforming the urban lifestyle in the UAE.'} />

      <div className='bg-[#0E1527] relative' ref={main}>
  <LatestProjectsCarousel />
        {/* <Sectiontwo amenities={amenities} /> */}


         
        {/* <div className='h-[700px]'>
          <h3 className='text-[15px] md:text-[45px] text-center my-heading leading-6 text-white font-bold'>
            Successfully Delivered
          </h3> */}
    
          <Introducing links='/projects' ima={ima} overlay={true} introRef={introRef} text1={'Projects'} className1={'md:!h-[500px]  flex items-center justify-center'} btntext={'View All Projects'} logo={false} viewprojects={true} className={'!h-[150px] md:!h-[270px] !w-[190px]  md:!w-[35vw] xl:!w-[420px] relative'} />
          {/* </div> */}
        </div>  
        
        <Vision backgroundImage="/assets/visionbg.png" />
        <div className=' w-full  md:h-[500px] xl:h-[600px]'>
          <Image src={chess} className='w-full h-full object-cover' />
          </div>

         <div ref={brandRef} className=' container-2  flex flex-col items-start justify-evenly  lg:justify-evenly lg:gap-[50px]'>
        
      
         <AdvantagesSection />

       
        </div>  
        
        <Section />

        <Section_two home={true} head={'24/7 Access'} text={text} amenities={icons} back_image={true} icontext={'md:!text-[15px]'}/>
        
       

      
      <SectionFour images={contactbg} />

      <Footer />
      
      {/* Chat Widget */}
      <ChatWidget />
    </>
  )
}

export default index
