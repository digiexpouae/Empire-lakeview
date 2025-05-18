import React, { useEffect, useState } from 'react'
import Heroslider from '../../common/heroslider'
import Header from '@/layout/header'
import Section_two from './section_two'
// import Section from '../home/section'
import Footer from '@/layout/footer'
import Place from '../../components/home/places'
import Introducing from './introducing'
import Icon from '../icon'
import SectionFour from '../../common/section_four'
import Image from 'next/image'
import Sectionthree from '../../common/section'
import back from '../../../public/assets/background2.png'
import empire from '../../../public/assets/empire2.png'
import im from '../../../public/assets/cloud_one.png'
const index = () => {
  const [main, setmain] = useState(true)
  const [cloud, setcloud] = useState(true)
  const ima = [
  {
    src: '/assets/CTA.png',
       title: '',
    subtitle: '',
  },
  {
    src: '/assets/section4.jpg',
  }
];
    const images=[{im:'/assets/ima1.jpg',tex1:'1 Bed',tex2:'Size: 2633.68 SQ.FT. To 2682.94 SQ.FT.'},{im:'/assets/ima2.jpg',tex1:'1 Bed With Pool',tex2:'Size: 1319 SQ.FT.To 1328 SQ.FT.'},{im:'/assets/ima3.jpg',tex1:"2 Bed",tex2:'Size: 753 SQ.FT.To 867 SQ.FT'},{im:'/assets/ima4.jpg',tex1:'Duplex',tex2:'Size: 830 SQ.FT'},{im:'/assets/ima6.jpg',tex1:'Studio',tex2:'Size: 425.55 SQ.FT.'},{im:'/assets/pool studio.jpg',tex1:'Studio with Pool',tex2:'Size: 432.42 SQ.FT'}]


  const [showFooter, setShowFooter] = useState(false);
const [overlay, setoverlay] = useState(true)
const [background, setbackground] = useState(false)
  const handleAllVisible = () => {
    setShowFooter(true); // ✅ When SectionThree is done, show footer
  };



  return (
<>
<div className='w-full relative md:h-[600px] h-[400px]'>
        <Header className='nav-menu absolute z-50'/>
            <Heroslider className={'top-[15%]'} main={main} bottom={'bottom-[-250px]'} cloud={cloud} main_im={empire} im1={im} im2={im} className1={' top-2 md:top-10'} textone={'Empire'} texttwo={'Lakeviews'} textthree={'Liwan'} p1={'a striking tower in Liwan,'} p2={'designed for lifestyle'} p3={'and luxury.'} overlay={true}/>
         <Image src={back} className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' />
          </div>
           <div className='bg-[#002E3C]'>


           <Section_two /> 
           <Introducing />
           {/* <Section /> */}
          <Sectionthree images={images} onAllVisible={handleAllVisible} /> 
           <Place />
           <Icon /> 
           </div>
          <SectionFour images={ima} background={false}/>
        
           <Footer />
    </>
  )
}

export default index
