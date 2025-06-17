import React, { useRef } from 'react'
import Heroslider from '../../common/heroslider'
import Header from '@/layout/header'
import Sectionthree from '../../common/sectionthree'
import ima1 from '../../../public/assets/d3cffac39c025499b5d643c23941091538a28358.png';
import ima2 from '../../../public/assets/896f9f592b964d92926d050a82ffdf7c0cc52923.jpg';
import ima3 from '../../../public/assets/a0085398a559c041737ed82d891a967e8c17390a.jpg';
import Sectiontwo from '../../common/section_text'
import Introducing from '@/common/introducing'
import Footer from '@/layout/footer'
import SectionFour from '@/common/section_four';
import im1 from '../../../public/assets/cloud_one.png'
import Image from 'next/image';
import Brand from '@/common/brand';
import Section from './sectiontwo'
import Section_Two from '../../common/section_two'
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
const index = () => {
    const ima=[ima1,ima2,ima3]

const main= useRef(null)

const amenities = [
    {
      icon:craft,
      title: "High-Yield Returns",
      h:50,
      w:50
    },
    {
      icon:land,
      title: "Iconic Landmarks ",
      h:50,
w:50
    },
    {
      icon:star,
      title: "Unmatched Luxury & Style",
      h:50,
w:50
    },{
icon:Demand,
      title: "Strong Dental Demand",
      h:50,
w:50
    },{icon:fraud,
      title: "Proven Track Record",
      h:50,
w:50

    },
  {
    icon:Growth,
      title: "Future Growth Potential",
      h:50,
w:50
  }
  ]
  const icons = [
    {
      icon:Voice,
      title: "Voice service request",
      h:50,
      w:50
    },
    {
      icon:Card,
      title: "Online payment ",
      h:50,
w:50
    },
    {
        icon:Process,
      title: " Digital handover process",
      h:50,
w:50
    },
    {
      icon: Special,
      title: "Service request status",
      h:50,
w:50
    },
 
  ]

  const introRef=useRef(null)
    const text='Empower your property ownership experience with our seamless and efficient 24/7 property management services. At Empire Estate, we understand the importance of convenience and peace of mind. Our dedicated team ensures that your property is managed around the clock, providing you with the assurance and support you deserve. Welcome to a new era of property management tailored to your lifestyle.'
     const imag = [
  {
    src: '/assets/ee70d663c4a8db7d05f72f368ee23dc4874fe3d5.png',
       title: '',
    subtitle: '',
  }
];
const wrapper=useRef(null)
const img=[{im:'/assets/home1.png',className:' md:w-[20%] h-[160px] w-[50%] lg:h-[400px]  md:h-[280px]  left-[5%]'},{im:'/assets/home3.png',className:' h-[130px] w-[100%] md:w-[40%]  md:h-[230px] lg:h-[300px]'},{im:'/assets/d7fac30352dfae4c1c87aff3ad6d3e311658833a.png',className:'w-[100%] right-[5%] md:w-[34%] h-[130px] md:h-[250px] lg:h-[300px] z-[999] md:right-[10%]'}]
const back='/assets/3837ceaa4e2c8efd1acd975f7cdb181e3ba97fb9.png'
  return (
  <>
  {/* index.. home added next */}
<div className='w-full relative md:h-[600px] h-[400px]'>
        <Header className='nav-menu absolute z-50'/>
            <Heroslider className={'top-[15%]'} main={false} cloud={true} Home={true}  img={img} className2={'z-[999]'} textone={'Begin your'}  bottom={'bottom-[-60px]'} im1={im1} im2={im1} className1={' left-[40%] top-2 md:top-10'} texttwo={'Journey'}  overlay={true}/>
         <Image src={back} className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' width={1200} height={1000} />
          </div>

           <div className='bg-[#002E3C] relative' ref={main}>
                                    <Sectiontwo classNamemain={'  !h-[700px] md:!h-[300px]'} classNameH={'!text-[35px] '} className={'md:!text-[20px] !text-[17px] !leading-8'}heading={true} text1={'Discover a New Era of Living'} text={'Welcome to Empire Development, a forward-looking real estate developer in Dubai. Empire Lakeview is not only a place to live, but it is a transformative vision brought to life by Empire development. Empire Development reshapes urban life and offers apartments and homes built with modern technology.'}/>

              <div ref={wrapper} className='h-[1100px] lg:h-[150vh] container-1 md:h-[80vh] xl:h-[1000px] w-full flex items-start md:items-center md:justify-evenly flex-col'>           
                <Sectionthree main={main} wrapper={wrapper}/>
                                             <Sectiontwo classNamemain={'!h-[350px] '}  classNameH={'!text-[35px] '} className={'md:!text-[20px] !text-[17px] !leading-8'} heading={true} text1={'Built with vision. Backed by integrity.'} text={"Empire Development's goal is to guide the change of modern living in the UAE. We focus on creating experiences that enhance every part of your life.  Empire Development offers premium quality in real estate development. If you want to buy a luxury home or property in Dubai, Empire Development is your ideal partner."} />


</div> 
<div ref={introRef} className='h-[1000px] py-10 md:h-[100vh] container-2 lg:h-[120vh] flex flex-col   items-start justify-evenly  lg:justify-evenly  lg:gap-[50px]'>
                 <Introducing  ima={ima}  overlay={true} introRef={introRef} text1={'Projects'} className1={'!h-[200px] !my-6 overflow-hidden flex items-center'} btntext={'View All Projects'}  logo={false} viewprojects={true} className={'!h-[250px] md:!h-[270px]  !w-[400px]   relative'}/>
                                                       <Sectiontwo classNamemain={'!items-start !h-[700px] md:!h-[260px]'} classNameH={'!text-[35px] '} className={'md:!text-[20px] !text-[17px] !leading-8'} heading={true} text1={'Top UAE Real Estate Developer'} text={"Empire Development provides creative, eco-friendly projects. That reflects awareness of the needs of our clients. Empire Development is one of the best real estate investments in the UAE. Whether you want to grow your portfolio or start your real estate journey, Empire Development is the right choice for you."} />
  </div>     

<Brand text1={'The Advantages'} amenities={amenities} img={'/assets/08ebc927c2bb827adaee55f9f4bc028fa05248c3.jpg'} className={'grid grid-cols-6 gap-1 '} iconsize={'w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] md:w-[50px] md:w-[50px]'} className2={'!text-black text-[7px] md:!text-[12px] lg:!text-[17px]'} className3={' h-[40px]'}/>

<Section  />
          <Section_Two  icontext={'!text-[20px] md:!text-[12px] xl:!text-[20px]'} classNamep={'!text-[15px] md:!text-[15px] xl:text-[18px]!'}  home={true} text={text} head={'24/7 Access'} className2={'!text-[10px]'} btn={false} amenities={icons} back_image={true} className={'hidden'}/> 


                <SectionFour images={imag} />

</div>
<Footer />
</>
  )
}

export default index
