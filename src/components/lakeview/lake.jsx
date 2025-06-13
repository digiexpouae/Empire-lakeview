import React, { useEffect, useState } from 'react'
import Heroslider from '../../common/heroslider'
import Header from '@/layout/header'
import Section_two from '../../common/section_two'
// import Section from '../home/section'
import Footer from '@/layout/footer'
import Place from '../../common/places'
import Icon from '../icon'
import im from '../../../public/assets/30d78149086356db6714cb255feffcc79821e24e.jpg'
import im2 from '../../../public/assets/177a627b91d6de16e29ba8660fcd169ba1f9a4c5.jpg'
import im3 from '../../../public/assets/739ea3c773a46619eba42628089123900ecd20c4 (1).jpg'
import im4 from '../../../public/assets/387749bd9ca4fbe4dd353d42b78a6dfab9958888.jpg'
import im5 from '../../../public/assets/af7d67e8d77d1990d76ddfd4236ee64f67f80553.jpg'
import im6 from '../../../public/assets/e628b29ba03a5d3c87b167691336aaaa56e062cb.jpg'
import SectionFour from '../../common/section_four'
import Image from 'next/image'
import Sectionthree from '../../common/section'
import back from '../../../public/assets/background2.png'
import empire from '../../../public/assets/empire2.png'
import im1 from '../../../public/assets/cloud_one.png'
import spa from '../../../public/assets/animation/Spa Relaxation.json'
import video from '../../../public/assets/animation/Video Camera.json'
import joy from '../../../public/assets/animation/Joystick (1).json'
import golf from '../../../public/assets/animation/Golf Club[1].json'
import other from '../../../public/assets/animation/Other (1).json'
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
const index = () => {
  const [main, setmain] = useState(true)
  const [cloud, setcloud] = useState(true)

const markers = [
  { name: 'Liwan Lakes', coordinates: [25.1151433, 55.3648375],  icon: '/assets/amayamall.svg'  },
  { name: 'Downtown Dubai', coordinates: [25.1950, 55.2784], icon: '/assets/g2589.svg' },
  { name: 'Dubai International Airport', coordinates: [25.2567, 55.3643], icon: '/assets/international (2).svg' },
];
  const icons = [
    { img: Liwan, name: 'Liwan Lake', distance: '2 minutes' },
    { img: AmayaMall, name: 'Amaya Mall', distance: '2 minutes' },
    { img: IndianInternationalSchool, name: 'The Indian International School', distance: '8 minutes' },
    { img: GEMSWellington, name: 'GEMS Wellington Academy', distance: '10 minutes' },
    { img: IMGWorlds, name: 'IMG Worlds of Adventure', distance: '8 minutes' },
    { img: DowntownDubai, name: 'Downtown Dubai & Dubai Mall', distance: '15 minutes' },
    { img: DubaiAirport, name: 'Dubai International Airport', distance: '20 minutes' },
  ];
   const amenities = [
    {
      icon:spa,
      title: "Steam & Sauna",
      h:50,
      w:50
    },
    {
      icon:video,
      title: "Outdoor Cinema ",
      h:50,
w:50
    },
    {
        icon:joy,
      title: "Gaming Arcade",
      h:50,
w:50
    },
    {
      icon: golf,
      title: "Mini Golf Course",
      h:50,
w:50
    },
    {
        icon:other,
      title: "And Other Features",
      h:20,
w:20
    },
  ];
  const imag = [
  {
    src: '/assets/CTA.png',
       title: '',
    subtitle: '',
  }
];
    const content=[im3,im,im6,im4,im2,im5]

    const images=[{im:'/assets/ima1.jpg',tex1:'1 Bed',tex2:'Size: 2633.68 SQ.FT. To 2682.94 SQ.FT.'},{im:'/assets/ima2.jpg',tex1:'1 Bed With Pool',tex2:'Size: 1319 SQ.FT.To 1328 SQ.FT.'},{im:'/assets/ima3.jpg',tex1:"2 Bed",tex2:'Size: 753 SQ.FT.To 867 SQ.FT'},{im:'/assets/ima4.jpg',tex1:'Duplex',tex2:'Size: 830 SQ.FT'},{im:'/assets/ima6.jpg',tex1:'Studio',tex2:'Size: 425.55 SQ.FT.'},{im:'/assets/pool studio.jpg',tex1:'Studio with Pool',tex2:'Size: 432.42 SQ.FT'},{im:'',tex1:'',tex2:''}]


  const [showFooter, setShowFooter] = useState(false);
const [overlay, setoverlay] = useState(true)
const [background, setbackground] = useState(false)
  const handleAllVisible = () => {
    setShowFooter(true); // ✅ When SectionThree is done, show footer
  };
const text1='Premium Residences in Liwan, Dubai'
const para="Liwan homes by Empire Development presents a unique opportunity. Residents can enjoy modern living in a peaceful, family-friendly setting. This project features smart layouts, premium finishers, and essential conveniences. It is perfect for you if you are looking for a new home or exploring Dubai real estate investments."
const head='Elevated Living in a Modern Community '
const para2="Empire Development offers Spacious 1 and 2-bedroom flats for modern living. Liwan homes have smart home features, open layouts, and premium finishes. These homes by Empire Development  are a perfect fit for families, young professionals, and investors looking for long-term growth.  "
const head2='Perfect Location with Simple Access' 
const para3 ="Liwan is close to the main highways and is very convenient. People can easily go to Downtown Dubai, Business Bay, and the International Airport. The area is also close to parks, shopping malls, hospitals and schools. It is a great place to invest and live a strong life. Empire Lakeview by Empire Development is ideal for Liwan Dubai property investment. It combines location, design, and price perfectly. It's a wise approach to own in a fast growing area of the city."
const head3='Amenities for Modern Living' 
const para4="There are many best facilities available for residents provided by Empire Development. They can have a swimming pool, gym, kids' play area, and well-maintained gardens. If you're seeking quality waterfront homes in Dubai without the high price, this is a great option." 
const head4='Smart Investment in Dubai'
const para5="Empire Lakeview in Liwan by Empire Development is one of the best choices for Dubai real estate investment. With an easy and flexible payment schedule It's a great chance for both end users and investors."
 return (
<>
<div className='w-full relative md:h-[600px] h-[400px]'>
        <Header className='nav-menu absolute z-50'/>
            <Heroslider className={'top-[15%]'} main={main} bottom={'bottom-[-250px]'} cloud={cloud} Home={false} main_im={empire} im1={im1} im2={im1} className1={' top-2 md:top-10'} textone={'Empire'} texttwo={'Lakeviews'} textthree={'Liwan'} p1={'a striking tower in Liwan,'} p2={'designed for lifestyle'} p3={'and luxury.'} overlay={true} />
         <Image src={back} className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' />
          </div>
<div className='bg-[#002E3C]'>

           <Section_two btn={true} head={'Project Overview'} amenities={amenities} text={`Empire Lakeviews by Empire Developments is a luxury residential project located in Liwan, 
              Dubailand, Dubai. This 29-storey development offers 604 units, including studios, 1- and 2-bedroom 
              apartments, & 3-bedroom duplexes, with many units featuring private pools.`}   /> 
         
           <Introducing ima={content} intro={true} Logo={'/assets/a7c7c7715ce8f5e3ea0b1cea5a135d0970ec0d6a.png'} logo={true} text1={'Introducing'} btntext={'Download Brochure'} />
            
     <Sectiontwo classNamemain={'!items-start !h-[500px] md:!h-[200px]'}  classNameH={'!text-[35px] '} className={'md:!text-[20px] !text-[16px] !leading-6'} heading={true} text1={text1}  text={para} />

          <Sectionthree images={images} onAllVisible={handleAllVisible} /> 
      <Sectiontwo classNamemain={' !h-[700px] md:!h-[500px] py-6 flex !items-start justify-center'}  classNameH={'!text-[35px] '} className={'md:!text-[20px]  !text-[16px] !leading-8'} heading={true} text1={head}  text={para2} />

       
   <Place markers={markers} Name={'Empire Lakeviews'} center_position={[25.114806, 55.364444]} Main_marker='Empire Lakeviews'/>
           <Icon icons={icons}/> 
                 <Sectiontwo classNamemain={'!items-center !h-[900px] md:!h-[750px] lg:!h-[400px]'}  classNameH={'!text-[35px] '} className={'md:!text-[20px]  !text-[16px] !leading-8'} heading={true} text1={head2}  text={para3} />

          <SectionFour images={imag} background={false}/>
                   </div>

           <Footer footertext={true} text1={head3} text2={head4} text={para4} textpara={para5} />
    </>
  )
}

export default index
