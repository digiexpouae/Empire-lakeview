import React, { useEffect, useState } from 'react'
import Heroslider from '../../common/heroslider'
import Header from '@/layout/header'
import Section_two from './section_two'
// import Section from '../home/section'
import Footer from '@/layout/footer'
import Place from '../../components/home/places'
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
import Introducing from '@/common/introducing'
const index = () => {
  const [main, setmain] = useState(true)
  const [cloud, setcloud] = useState(true)
  const imag = [
  {
    src: '/assets/CTA.png',
       title: '',
    subtitle: '',
  }
];
    const content=[im3,im,im6,im4,im2,im5]

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
            <Heroslider className={'top-[15%]'} main={main} bottom={'bottom-[-250px]'} cloud={cloud} main_im={empire} im1={im1} im2={im1} className1={' top-2 md:top-10'} textone={'Empire'} texttwo={'Lakeviews'} textthree={'Liwan'} p1={'a striking tower in Liwan,'} p2={'designed for lifestyle'} p3={'and luxury.'} overlay={true}/>
         <Image src={back} className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' />
          </div>
           <div className='bg-[#002E3C]'>


           <Section_two /> 
           <Introducing ima={content} Logo={'/assets/a7c7c7715ce8f5e3ea0b1cea5a135d0970ec0d6a.png'}
         logo={true} text1={'Introducing'} btntext={'Download Brochure'} />
           {/* <Section /> */}
          <Sectionthree images={images} onAllVisible={handleAllVisible} /> 
           <Place />
           <Icon /> 
           </div>
          <SectionFour images={imag} background={false}/>
        
           <Footer />
    </>
  )
}

export default index
