import React from 'react'
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
import Card from '../../../public/assets/animation/card payment[1].json'
import Process from '../../../public/assets/animation/Process (1).json'
import Special from '../../../public/assets/animation/Special Request.json'

const index = () => {
    const ima=[ima1,ima2,ima3]


  const amenities = [
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

    const text='Empower your property ownership experience with our seamless and efficient 24/7 property management services. At Empire Estate, we understand the importance of convenience and peace of mind. Our dedicated team ensures that your property is managed around the clock, providing you with the assurance and support you deserve. Welcome to a new era of property management tailored to your lifestyle.'
     const imag = [
  {
    src: '/assets/ee70d663c4a8db7d05f72f368ee23dc4874fe3d5.png',
       title: '',
    subtitle: '',
  }
];
const img=[{im:'/assets/home1.png',className:'w-[40%] md:w-[20%] h-[160px] w-[50%] md:h-[400px] left-[5%]'},{im:'/assets/c4e34d8ba7285ffa418e53d34d03e6d2cc4e4c9ee.png',className:' h-[170px] w-[100%]  md:w-[40%] md:h-[450px]'},{im:'/assets/d7fac30352dfae4c1c87aff3ad6d3e311658833a.png',className:'w-[100%] right-[5%] md:w-[34%] h-[150px] md:h-[300px] z-[999] md:right-[10%]'}]
const back='/assets/3837ceaa4e2c8efd1acd975f7cdb181e3ba97fb9.png'
  return (
  <>
  {/* index.. home added next */}
<div className='w-full relative md:h-[600px] h-[400px]'>
        <Header className='nav-menu absolute z-50'/>
            <Heroslider className={'top-[15%]'} main={false} cloud={true} Home={true}  img={img} className2={'z-[999]'} textone={'Begin your'}  bottom={'bottom-[-60px]'} im1={im1} im2={im1} className1={' left-[40%] top-2 md:top-10'} texttwo={'Journey'}  overlay={true}/>
         <Image src={back} className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' width={1200} height={1000} />
          </div>
           <div className='bg-[#002E3C]'>
                <Sectiontwo text={'Empire Developments is a Dubai-based real estate company known for delivering innovative, high-quality residential projects. With a focus on design excellence, smart features, and lifestyle amenities, Empire is redefining urban living across prime Dubai locations.'} />
                <Sectionthree />
                   <Introducing ima={ima} overlay={true} text1={'Projects'} className1={'!h-[500px] overflow-hidden'} btntext={'View All Projects'}  logo={false} viewprojects={true} className={'!h-[250px] md:!h-[270px]  !w-[400px]   relative'}/>
<Brand text1={'The Advantages'}  img={'/assets/08ebc927c2bb827adaee55f9f4bc028fa05248c3.jpg'}/>
<Section  />
<Section_Two  text={text} head={'24/7 Access'} btn={false} amenities={amenities} back_image={true} className={'hidden'}/> 


                <SectionFour images={imag} />

</div>
<Footer />
</>
  )
}

export default index
