import React, { useState } from 'react'
import Header from '@/layout/header'
import Footer from '@/layout/footer'
import back from '../../../public/assets/living.png'
import Image from 'next/image'
 import Heroslider from '@/common/heroslider'
import Hero from '../../../public/assets/d7fac30352dfae4c1c87aff3ad6d3e311658833a.png'
import im from '../../../public/assets/cloud_one.png'
import Sectiontwo from './sectiontwo'
import SectionThree from './sectionthree'
import Luxury from './luxury'
import SectionFour from '../../common/section_four'

import Sectionfour from '../../common/section'
import Section from '../../common/section_four'
import Places from '@/common/places'
import BusinessBay from '../../../public/assets/g2589.svg';
import MallOfTheEmirates from '../../../public/mall of emirates.svg';
import DubaiHillMall from '../../../public/dubai hill mall.svg';
import PalmJumeirah from '../../../public/palm jumairah.svg';
import DubaiInternationalAirport from '../../../public/assets/international (2).svg';
import DubaiMarina from '../../../public/marine.svg';
import Icon from '../../components/icon'





const empliving = () => {

const empire='Empire Livings';
const icons = [
  { img: BusinessBay, name: 'Business Bay', distance: '15 minutes drive' },
  { img: MallOfTheEmirates, name: 'Mall of the Emirates', distance: '15 minutes drive' },
  { img: DubaiHillMall, name: 'Dubai Hill Mall', distance: '5 minutes drive' },
  { img: PalmJumeirah, name: 'Palm Jumeirah', distance: '15 minutes drive' },
  { img: DubaiInternationalAirport, name: 'Dubai International Airport', distance: '25 minutes drive' },
  { img: DubaiMarina, name: 'Dubai Marina', distance: '25 minutes' },
];




const markers = [
  { name: 'Dubai Hills Mall', coordinates: [25.087957,	55.263793],  icon: '/assets/Dubai hill.svg'  },
  { name: 'Mall of the Emirates', coordinates: [25.118009,	55.200367], icon: '/assets/mall of emirates.svg' },
  { name: 'Dubai Marina	', coordinates: [25.080562,	55.140911], icon: '/assets/Dubai marine.svg' },
];


    const ima = [
  {
    src: '/assets/emp1cta.jpg',
       title: '',
    subtitle: '',
  }
];
const [cloud, setcloud] = useState(true)
const [main, setmain] = useState(true)
    const images=[{im:'/assets/1a5f1869b5bf5ea58896fa4d32bb37b4af630f96.jpg',tex1:'1 Bed',tex2:'Size: 2633.68 SQ.FT. To 2682.94 SQ.FT.'},{im:'/assets/d86834808dd262a4f9acfccc932de56679469de9.jpg',tex1:"2 Bed",tex2:'SIZE: 1319 SQ.FT. TO 1328 SQ.FT.'},{im:'/assets/f23ea6b86b2d8f5b9095c62dd771d8000ce47043.jpg',tex1:'Duplex',tex2:'SIZE: 753 SQ.FT. TO 867 SQ.FT'},{im:'/assets/3bf3a024dffe0b0ca1e910dcb38db4fba83970a8.jpg',tex1:'Studio',tex2:'SIZE: 432.42 SQ.FT'},{im:'',tex1:'',tex2:''}]

    
  return (<>

<div className='w-full relative md:h-[600px] h-[400px]'>
        <Header className='nav-menu absolute z-50'/>
            <Heroslider className={'top-[15%]'} textthree={'Empire'} className3={'top-2 lg:top-5 md:top-9 xl:top-12'} texttwo={'Livings'} main={main} bottom={'bottom-0 !h-[240px]  md:!h-[400px] !w-[85%] md:!w-[70%] lg:!w-[50%]'} main_im={Hero} cloud={cloud} im1={im} im2={im}/>
         <Image src={back} className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' />
          </div>
        <div className='bg-[#002E3C]'>
          <Sectiontwo />
        <SectionThree />
          <Luxury />
      <Sectionfour images={images} slide={4}/>

      <Places center_position={[25.114806, 55.364444]} Name={'Empire Livings'} markers={markers} Main_marker='Empire Living' />
        <Icon icons={icons}/>
          <Section images={ima} background={false}/>
          </div>
          <Footer />
</>
  )
}

export default empliving
