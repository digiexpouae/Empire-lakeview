import React, { useEffect, useState } from 'react'
import Heroslider from '../../common/heroslider'
import Header from '@/layout/header'
import Section_two from './section_two'
// import Section from '../home/section'
import Footer from '@/layout/footer'
import Mainplace from '../../common/mainplace'
import mob from "../../../public/assets/lake mobile (2).png"
import Icon from '../icon'
import im from '../../../public/assets/sliderlake1.webp'
import im2 from '../../../public/assets/sliderlake2.webp'
import im3 from '../../../public/assets/sliderlake3.webp'
import im4 from '../../../public/assets/sliderlake4.webp'
import im5 from '../../../public/assets/sliderlake5.webp'
import im6 from '../../../public/assets/sliderlake6.webp'
import SectionFour from '@/common/section4';
import contactbg from "../../../public/assets/contact.png"
import Image from 'next/image'
import Sectionthree from '../../common/section'
import back from '../../../public/assets/lake background.webp'
import empire from '../../../public/assets/empire2.png'
import im1 from '../../../public/assets/cloud_one.png'
import icon1 from '../../../public/Infinity Pool.svg'
import icon2 from '../../../public/Creek Park.svg'
import icon3 from '../../../public/Mini Golf Course.svg'
import icon4 from '../../../public/Amphi- theatre.svg'
import icon5 from '../../../public/Jogging Track.svg'
import icon6 from '../../../public/Co-working Space.svg'
import icon7 from '../../../public/Outdoor Gym.svg'
import icon8 from '../../../public/Kids Play Area.svg'






import Liwan from '../../../public/liwanlake.svg';
import AmayaMall from '../../../public/assets/amayamall.svg';
import IndianInternationalSchool from '../../../public/international school.svg';
import GEMSWellington from '../../../public/universtiy.svg';
import IMGWorlds from '../../../public/adventure.svg';
import DowntownDubai from '../../../public/assets/g2589.svg';
import DubaiAirport from '../../../public/assets/international (2).svg';
import Introducing from '@/common/introducing'
import { Heading } from 'lucide-react'
import Sectiontwo from '../../common/section_text'
import Fadein from '@/common/fadein'

const index = () => {
  const [main, setmain] = useState(true)
  const [cloud, setcloud] = useState(true)

  const markers = [
    { name: 'Liwan Lakes', coordinates: [25.1151433, 55.3648375], icon: '/assets/amayamall.svg' },
    { name: 'Downtown Dubai', coordinates: [25.1950, 55.2784], icon: '/assets/g2589.svg' },
    { name: 'Dubai International Airport', coordinates: [25.2567, 55.3643], icon: '/assets/international (2).svg' },
  ];
  const icons = [
    { img: Liwan, name: <>Liwan <br/>  Lakes</>, distance: '2 minutes' },
    { img: AmayaMall, name: <>Amaya <br/> Mall</>, distance: '2 minutes' },
    { img: IndianInternationalSchool, name: <>The Indian International School</>, distance: '8 minutes' },
    { img: GEMSWellington, name: 'GEMS Wellington Academy', distance: '10 minutes' },
    { img: IMGWorlds, name: 'IMG Worlds of Adventure', distance: '8 minutes' },
    { img: DowntownDubai, name: 'Downtown Dubai & Dubai Mall', distance: '15 minutes' },
    { img: DubaiAirport, name: 'Dubai International Airport', distance: '20 minutes' },
  ];
  const amenities = [
    {
      icon: icon1,
      title: "Infinity Pool",
      h: 50,
      w: 50
    },
    {
      icon: icon2,
      title: "Creek Park",
      h: 50,
      w: 50
    },
    {
      icon: icon3,
      title: "Mini Golf Course",
      h: 50,
      w: 50
    },
    {
      icon: icon4,
      title: "Amphi-theatre",
      h: 50,
      w: 50
    },
    {
      icon: icon5,
      title: "Jogging Track",
      h: 20,
      w: 20
    },
    {
      icon: icon6,
      title: "Co-working Space",
      h: 20,
      w: 20
    },
    {
      icon: icon7,
      title: "Outdoor Gym",
      h: 20,
      w: 20
    },
    {
      icon: icon8,
      title: "Kids Play Area",
      h: 20,
      w: 20
    },
  ];
  const imag = [
    {
      src: '/assets/CTA.png',
      title: '',
      subtitle: '',
    }
  ];
  const content = [{ im: im }, { im: im2 }, { im: im3 }, { im: im4 }, { im: im5 }, { im: im6 }];

  const images = [
    {
      im: '/assets/slider5.webp',
      tex1: 'Studio',
      tex2: 'Size: 425.55 SQ.FT.',
      link1: 'https://empiredevelopments.ae/empire-lakeviews/360views/studio',
      link2: '/contact',
    },
    {
      im: '/assets/slider6.webp',
      tex1: 'Studio with Pool',
      tex2: 'Size: 432.42 SQ.FT',
      link1: 'https://empiredevelopments.ae/empire-lakeviews/360views/studio_pool',
      link2: '/contact',
    },
    {
      im: '/assets/slider1.webp',
      tex1: '1 Bed',
      tex2: 'Size: 2633.68 SQ.FT. To 2682.94 SQ.FT.',
      link1: 'https://empiredevelopments.ae/empire-lakeviews/360views/1bed',
      link2: '/contact',
    },
    {
      im: '/assets/slider2.webp',
      tex1: '1 Bed With Pool',
      tex2: 'Size: 1319 SQ.FT. To 1328 SQ.FT.',
      link1: 'https://empiredevelopments.ae/empire-lakeviews/360views/1bed_pool',
      link2: '/contact',
    },
    {
      im: '/assets/slider3.webp',
      tex1: '2 Bed',
      tex2: 'Size: 753 SQ.FT. To 867 SQ.FT',
      link1: 'https://empiredevelopments.ae/empire-lakeviews/360views/2bed',
      link2: '/contact',
    },
    {
      im: '/assets/slider4.webp',
      tex1: 'Duplex',
      tex2: 'Size: 830 SQ.FT',
      link1: '/',
      link2: '/contact'
    },
   { im: '',
    tex1:'',
    tex2:'',
    link1:'',
    link2:''}
  ];
  

  const [showFooter, setShowFooter] = useState(false);
  const [overlay, setoverlay] = useState(true)
  const [background, setbackground] = useState(false)
  const handleAllVisible = () => {
    setShowFooter(true); // ✅ When SectionThree is done, show footer
  };
  const text1 = 'Premium Residences in Liwan, Dubai';
  const para = " Liwan homes by Empire Development presents a unique opportunity. Residents can enjoy modern living in a peaceful, family-friendly setting. This project features smart layouts, premium finishers, and essential conveniences. It is perfect for you if you are looking for a new home or exploring Dubai real estate investments.";
  const head = 'Elevated Living in a Modern Community ';
  const para2 = "Empire Development offers Spacious 1 and 2-bedroom flats for modern living. Liwan homes have smart home features, open layouts, and premium finishes. These homes by Empire Development  are a perfect fit for families, young professionals, and investors looking for long-term growth.  ";
  const head2 = 'Perfect Location with Simple Access';
  const para3 = "Liwan is close to the main highwaysand is very convenient. People can easily go to Downtown Dubai, Business Bay, and the International Airport. The area is also close to parks, shopping malls, hospitals and schools. It is a great place to invest and live a strong life. Empire Lakeview by Empire Development is ideal for Liwan Dubai property investment. It combines location, design, and price perfectly. It's a wise approach to own in a fast growing area of the city.";
  const head3 = ' Amenities for Modern Living';
  const para4 = "There are many best facilities available for residents provided by Empire Development. They can have a swimming pool, gym, kids' play area, and well-maintained gardens. If you're seeking quality waterfront homes in Dubai without the high price, this is a great option.";
  const head4 = 'Smart Investment in Dubai';
  const para5 = "Empire Lakeview in Liwan by Empire Development is one of the best choices for Dubai real estate investment. With an easy and flexible payment schedule It's a great chance for both end users and investors.";
  return (
    <div>
      {/* Desktop only: Heroslider and background image, covers full screen */}
      <div className="hidden md:block w-full h-screen relative">
        <Header className="nav-menu absolute z-50" />
        <Heroslider
          className={"top-[15%]"}
          main={main}
          bottom={"bottom-[-250px]"}
         
          Home={false}
          main_im={empire}
          im1={im1}
          im2={im1}
          className1={" top-2 md:top-5 lg:top-10"}
          textone={"Empire"}
          texttwo={"Lakeviews"}
          textthree={"Liwan"}
          p1={"A landmark in Liwan,"}

          p2={" redefining lifestyle with"}
          p3={"modern living."}
          overlay={true}
          lakeview={true}
        />
        <Image src={back} priority className="!left-0 !right-0 !top-0 !bottom-0 w-full h-full md:h-screen absolute z-0" />
      </div>

      {/* Mobile only: plain div with header and mobile image, covers full screen */}
      <div className="block md:hidden w-full h-screen relative">
        <Header className="nav-menu absolute z-50" />
        <Image src={mob} className="object-cover w-full h-full" alt="Lakeviews Mobile" fill />
      </div>


      <div className='bg-[#0d1028]'>
        <Fadein>
          <div className='md:mt-0'>
            <Section_two btn={true} Lottieicons={false} head={'Project Overview'} amenities={amenities} text={`
    Liwan homes by Empire Development feature open layouts and high-end finishes. In Premium Residences, Liwan residents enjoy a modern lifestyle.
     It’s a peaceful and eco-friendly place. Empire Lakeview by Empire Development is great for Liwan, Dubai property investment, or Dubai real estate investments`} home={false} icontext={'md:!text-sm'} />
          </div>
        </Fadein>
        <Introducing ima={content} intro={true} Logo={'/assets/a7c7c7715ce8f5e3ea0b1cea5a135d0970ec0d6a.png'} logo={true} text1={'Introducing'} btntext={'Download Floor Plans'} />
        
        <Sectionthree images={images} onAllVisible={handleAllVisible} />
       
          <Mainplace markers={markers} Main_marker={'Empire Lakeviews'} center_position={[25.114806, 55.364444]} Name={<>Empire <br/> Lakeviews</>}/>
          <Fadein><Icon icons={icons} /></Fadein>

        <Fadein>
          
        </Fadein>

        <Fadein>
          <SectionFour images={contactbg} />
        </Fadein>
      </div>
      <Footer footertext={true} text1={head3} text2={head4} text={para4} textpara={para5} />
    </div>
  );
}

export default index
