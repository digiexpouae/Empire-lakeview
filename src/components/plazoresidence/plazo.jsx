import React, { useState } from 'react'
import Heroslider from '@/common/heroslider'
import Header from '../../layout/header'
import Footer from '@/layout/footer'
import Image from 'next/image'
import Hero from '../../../public/assets/b5f971e5fc95757ff6682f16b83e33e99c7186a8.png'
import Back from '../../../public/assets/bdb8cd9d9fe78760f31d9cbb99cc298603933d32.png'
import Sectiontwo from '@/common/sectiontwo'
import map from '../../../public/assets/plazzoimage.png'
import Map from '@/common/maptwo'
import Sectiontext from '@/common/section_text'
import SectionFour from '@/common/section4';
import contactbg from "../../../public/assets/contact.png"
import mob from "../../../public/assets/plazzomobile2.png"
import Sectionthree from './sectiontwo'
const plazo = () => {
const [main, setfirst] = useState(false)
const [overlay, setoverlay] = useState(false)
const [cloud, setcloud] = useState(false)
  const images = [
  {
    src: '/assets/f.png',
       title: '',
    subtitle: '',
  }
  
];
// const images=['/assets/f.png','/assets/f.png']

const text=
"Plazzo Residences by Empire Developments redefines luxury living with affordable pricing and thoughtfully designed homes. Strategically located in Jumeirah Village Triangle, it offers seamless connectivity via Sheikh Mohammed Bin Zayed Road and Al Khail Road. Blending contemporary architecture with premium lifestyle amenities, it delivers the perfect balance of comfort, elegance, luxury and long-term value. "

const amenities = [  
  



]
 return (
    <>  <div className='hidden md:block relative w-full md:h-screen h-[500px] z-20'>
        <Header />
      <Heroslider  texttwo={'Residence'} textone={'Plazzo'} bottom={'bottom-[-100px] md:!bottom-[-250px] object-cover md:!h-screen !h-[350px] !w-[100%]  xl:!w-[70%] '}  className2={'!top-[23%] md:!top-8'}   className1={'right-0 left-[unset] top-[13%]  lg:top-[15%]   '} main_im={Hero}  overlay={true} main={true} cloud={cloud}/>
      <Image  src={Back} className='left-0 right-0 bottom-0 top-0 w-full h-[100%]   !object-cover '/>
     </div>

   {/* Mobile only: plain div with header and mobile image, covers full screen */}
      <div className="block md:hidden w-full h-screen relative">
          <Header className="nav-menu absolute z-50" />
          <Image src={'/assets/Plazzo-Residence-mobile1.webp'} className="object-cover w-full h-full" alt="Lakeviews Mobile" fill />
        </div>


      <div className='bg-[#0E1527]'>
   < Sectiontwo  images={images} amenities={amenities} textpara={text} classNameproject={'lg:mb-20'}  className={'md:!h-[80px] lg:!h-[100px]'} />
 
   <Sectionthree />
   
      <Map  map={map} title={'View Plazzo Residence'} ifrmae_map={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57838.30638126727!2d55.12797876265093!3d25.03766605047006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6df4d4c316af%3A0x6f90c06a04cb7493!2sPlazzo%20Residence!5e0!3m2!1sen!2s!4v1756111576881!5m2!1sen!2s" style={{border:0,width:'100%',height:'100%',borderRadius:'30px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}/>

    
    
             <SectionFour images={contactbg} />
             
</div>
     <Footer />
    </>
  )
}

export default plazo
