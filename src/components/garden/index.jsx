import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import Garden from '../../../public/assets/gardens/Hero copy.png'
import Hero from '../../../public/assets/gardens/Hero copy 2.png'
import Heroslider from '@/common/heroslider-2'
import Image from 'next/image'
import SectionFour from '../../common/section4'
import contactbg from "../../../public/assets/contact.png"
import Places from '../../common/mainplace'
import Text from '../../components/garden/text'
import Icons from '../../components/icon'
import Slider from './slider'
import MallOfTheEmirates from '../../../public/mall of emirates.svg';
import SiliconOasis from '../../../public/assets/Dubai hill.svg';
import PalmJumeirah from '../../../public/palm jumairah.svg';
import DubaiInternationalAirport from '../../../public/assets/international (2).svg';
import DubaiMarina from '../../../public/marine.svg';
import Aminities from './aminities'
import BurjKhalifa from '../../../public/burj.svg';
import Section from './section'
import Sectionslider from '../../common/section'
import Dubaisafari from '../../../public/assets/2.svg'
import DesertPalm from '../../../public/assets/3.svg'
import Gardens from '../../../public/assets/gardens/gardens.png'
const index = () => {
  const image = [
    //   {
    //     im: '/assets/ima2.jpg',
    //     tex1: 'Studio',
    //     tex2: 'SIZE: 443.55 SQ.FT',
    //     link1:'https://empiredevelopments.ae/empire-estates/360views/studio',
    //     link2:'/contact',
    //   },

    {
      im: '/assets/gardens/1.jpg',
      tex1: '1 Bed',
      tex2: 'Size: 425.55 SQ.FT.',
      link1: 'https://empiredevelopments.ae/empire-estates/360views/1bed',
      link2: '/contact'
    },
    {
      im: '/assets/gardens/slides.jpg',
      tex1: '2 Bed',
      tex2: 'Size: 425.55 SQ.FT.',
      link1: 'https://empiredevelopments.ae/empire-estates/360views/2bed',
      link2: '/contact',
    },
    {
      im: '/assets/gardens/2.jpg',
      tex1: '3 Bed',
      tex2: 'Size: 425.55 SQ.FT.',
      link1: 'https://empiredevelopments.ae/empire-estates/360views/2-bed-duplex',
      link2: '/contact',
    },
    {
      im: '/assets/gardens/3.jpg',
      tex1: '3 Bed Duplex',
      tex2: 'SIZE:  425.55 SQ.FT.',
      link1: '#',
      link2: '/contact',
    },
    {
      im: '',
      tex1: '',
      tex2: '',
      link1: '/',
      link2: '/',
    }
  ];

  const icons = [
    { img: SiliconOasis, name: <>Silicon  <br /> Oasis</>, distance: '05 minutes drive' },
    { img: MallOfTheEmirates, name: <>Dubai Outlet  <br /> Mall</>, distance: '05 minutes drive' },
    { img: Dubaisafari, name: <>Dubai  <br /> Safari</>, distance: '12 minutes drive' },
    { img: DesertPalm, name: <>Desert <br /> Palm</>, distance: '12 minutes drive' },
    { img: PalmJumeirah, name: <>Palm <br /> Jumeirah</>, distance: '15 minutes drive' },

    { img: BurjKhalifa, name: <>Burj <br /> Khalifa</>, distance: '22 minutes drive' },

    { img: DubaiInternationalAirport, name: 'Dubai International Airport', distance: '25 minutes drive' },

    { img: DubaiMarina, name: <>Dubai <br /> Marina</>, distance: '25 minutes' },

  ];
  const markers = [
    { name: ' Silicon Oasis', coordinates: [25.1238, 55.3821], icon: '/assets/Dubai hill.svg' },
    { name: 'Mall of the Emirates', coordinates: [25.118009, 55.200367], icon: '/assets/mall of emirates.svg' },
    { name: 'Dubai Marina	', coordinates: [25.080562, 55.140911], icon: '/assets/Dubai marine.svg' },

    { name: 'Dubai Safari	', coordinates: [25.1718, 55.4456], icon: '/assets/2.svg' },
  ];

  const main = true
  return (<>
    <div className='w-full relative md:block hidden h-[500px] md:h-screen '>
      <Header className='nav-menu absolute z-50' />
      <Heroslider textthree={'Empire'} className3={''} texttwo={'Gardens'} garden={true} garden_im={Garden}
        overlay={true} />
      <Image src={Hero} priority className=' w-full h-[100%] ' />
    </div>
    {/* Mobile only: plain div with header and mobile image, covers full screen */}
    <div className="block md:hidden w-full h-screen relative">
      <Header className="nav-menu absolute z-50" />
      <div className='w-full h-full relative'>
        <div className='absolute inset-0'>
          <Image src={Gardens} className="object-cover w-full h-full" alt="Lakeviews Mobile" fill />
        </div>
      </div>
    </div>

    <div className='bg-[#0E1527]'>

      <Text />
      <Slider />
      <Section />
      <Aminities />
      <Sectionslider btn={true} images={image} />
      {/* <Estatetextsection /> */}
      {/* <SectionThree /> */}
      {/* <Sectionfour /> */}
      {/* <Section images={image} /> */}
      <Places Main_marker={'Empire Gardens'} markers={markers} center_position={[25.0401, 55.4246]} Name={<>Empire <br /> Gardens</>} />
      <Icons icons={icons} />

      <SectionFour images={contactbg} />


    </div>
    <Footer />
  </>
  )
}

export default index