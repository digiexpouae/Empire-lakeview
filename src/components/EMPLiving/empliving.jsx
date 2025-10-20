import React, { useState } from 'react'
import Header from '@/layout/header'
import Footer from '@/layout/footer'
import back from '../../../public/assets/backround.webp'
import Image from 'next/image'
import Heroslider from '@/common/heroslider'
import Hero from '../../../public/assets/d7fac30352dfae4c1c87aff3ad6d3e311658833a.png'
import im from '../../../public/assets/cloud_one.png'
import Sectiontwo from './sectiontwo'
import SectionThree from './sectionthree'
import Luxury from './luxury'
import Section from '@/common/section4';
import contactbg from "../../../public/assets/contact.png"
import SectionFour from '../../common/section_four'

import Sectionfour from '../../common/section'
import Places from '@/common/mainplace'
import BusinessBay from '../../../public/assets/g2589.svg';
import MallOfTheEmirates from '../../../public/mall of emirates.svg';
import DubaiHillMall from '../../../public/dubai hill mall.svg';
import PalmJumeirah from '../../../public/palm jumairah.svg';
import DubaiInternationalAirport from '../../../public/assets/international (2).svg';
import DubaiMarina from '../../../public/marine.svg';
import Icon from '../../components/icon'
import Sectiontext from '@/common/section_text'
import mob from "../../../public/assets/Empire Livings_mobile.png"
import Fadein from '@/common/fadein'



const empliving = () => {

  const empire = 'Empire Livings';
  const icons = [
    { img: BusinessBay, name: <>Business <br /> Bay</>, distance: '15 minutes drive' },
    { img: MallOfTheEmirates, name: <>Mall of the <br/> Emirates</>, distance: '15 minutes drive' },
    { img: DubaiHillMall, name: <>Dubai Hill <br /> Mall</>, distance: '5 minutes drive' },
    { img: PalmJumeirah, name: <>Palm <br /> Jumeirah</>, distance: '15 minutes drive' },
    { img: DubaiInternationalAirport, name: 'Dubai International Airport', distance: '25 minutes drive' },
    { img: DubaiMarina, name: <>Dubai <br /> Marina</>, distance: '25 minutes' },
  ];

  // links


  const markers = [
    { name: 'Dubai Hills Mall', coordinates: [25.087957, 55.263793], icon: '/assets/Dubai hill.svg' },
    { name: 'Mall of the Emirates', coordinates: [25.118009, 55.200367], icon: '/assets/mall of emirates.svg' },
    { name: 'Dubai Marina	', coordinates: [25.080562, 55.140911], icon: '/assets/Dubai marine.svg' },
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
  const images = [
    {
      im: '/assets/EMPIRESLIDER4.webp',
      tex1: 'Studio',
      tex2: 'SIZE: 432.42 SQ.FT',
      link1: 'https://empire-lakeview.vercel.app/360/empirelivings/emplivstudio/index.htm',
      link2: '/contact',
    },
    {
      im: '/assets/EMPIRESLIDER1.webp',
      tex1: '1 Bed',
      tex2: 'SIZE: 2633.68 SQ.FT. TO 2682.94 SQ.FT.',
      link1: 'https://empire-lakeview.vercel.app/360/empirelivings/empliv1bed/index.htm',
      link2: '/contact',
    },
    {
      im: '/assets/EMPIRESLIDER2.webp',
      tex1: '2 Bed',
      tex2: 'SIZE: 1319 SQ.FT. TO 1328 SQ.FT.',
      link1: 'https://empiredevelopments.ae/empire-estates/360views/2bed',
      link2: '/contact',
    },
    {
      im: '/assets/EMPIRESLIDER3.webp',
      tex1: 'Duplex',
      tex2: 'SIZE: 753 SQ.FT. TO 867 SQ.FT',
      link1: 'https://empire-lakeview.vercel.app/360/empirelivings/emplivduplex/index.htm',
      link2: '/contact',
    },
    {
      im: '',
      tex1: '',
      tex2: '',
      link1: '/',
      link2: '/',
    },
  ];


  const head = 'Empire Living: Where Luxury Meets Smart Innovation '
  const para = "Empire Development presents Empire Lakeview. It offers apartments for sale in Dubai in Jumeirah Village. These apartments are ideal for anyone seeking a spacious and stylish home. They also come with modern tech automation. Empire Development's project features new construction styles, beautiful finishes, and smart residential solutions. Creates a lifestyle that is a blend of ease, refinement and convenience."
  const head2 = 'Strategic Location, Comfortable Living'
  const para2 = "Empire Living by Empire Development puts you close to everything that matters. You are just minutes away from top schools, shopping centers, and a business hub. This prime location makes your life easier and also provides great opportunities for  real estate investment in Dubai."
  const head3 = 'Live Smart, Live Better'
  const para3 = "Each apartment developed by Empire Development has advanced technology systems. These technologies include electricity, heating, security, and voice commands. Empire Development focuses on modern automation. This makes homes efficient and ready for the future. They are designed to simplify your lifestyle and save you energy."
  const head4 = 'Modern Amenities for Daily Life'
  const para4 = "Empire Living by Empire Development offers a wide range of high-end amenities. This includes a rooftop swimming pool with breathtaking views. Empire Development offers a gym, a children's playground, 24/7 security, and shaded parking. These amenities provide a vibrant and safe community."
  const head5 = ' Sustainable and Smart Investment '
  const para5 = "Empire Development has built Empire Lakeview with high-quality materials and energy-efficient technologies. We offer luxury without sacrificing comfort. This project has flexible payment plans. It’s a great chance to buy luxury homes. Empire Development broadens the real estate investment portfolio in Dubai’s vibrant market."


  return (<>

    <div className='w-full relative md:block hidden md:h-screen h-[500px] '>
      <Header className='nav-menu absolute z-50' />
      <Heroslider className={'top-[15%]'} textthree={'Empire'} className3={'top-2 lg:top-5 md:top-9'} texttwo={'Livings'} main={main} bottom={'-bottom-10 !h-[240px]  md:!h-[470px] !w-[85%] md:!w-[70%] lg:!w-[50%]'} main_im={Hero} cloud={cloud} overlay={true} im1={im} im2={im} />
      <Image src={back} priority className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' />
    </div>

    <div className="block md:hidden w-full h-screen relative">
      <Header className="nav-menu absolute z-50" />
      <Image src={mob} className="object-cover w-full h-full" alt="Lakeviews Mobile" fill />
    </div>

    <div className='bg-[#0E1527]'>

      <Fadein>
        <Sectiontwo />
      </Fadein>

      <Fadein>
        <SectionThree />
      </Fadein>



      <Fadein>
        <Luxury />
      </Fadein>



      <Fadein>
        
        <Sectionfour className='mt-10' images={images} slide={4} />
      </Fadein>

      <Places center_position={[25.114806, 55.364444]} Main_marker={'Empire Livings'} markers={markers} Name={<>Empire <br /> Living </>} />

      <Fadein>
        <Fadein>  <Icon icons={icons} /></Fadein>
      </Fadein>



      <Fadein>
        <Section images={contactbg} />
      </Fadein>
    </div>

    <Footer footertext={true} text1={head4} text={para4} text2={head5} textpara={para5} />
  </>
  )
}

export default empliving
