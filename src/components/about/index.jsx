import React, { useState } from 'react'
import Heroslider from '@/common/heroslider'
import Hero from '../../../public/assets/heroim2.jpg'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import Image from 'next/image'
import Sectiontext from '../../common/section_text'
import Section from '../about/section'
import Sectiontwo from '../about/sectiontwo'
import Sectionthree from '../about/sectionthree'

const index = () => {
    const [overlay, setoverlay] = useState(false)
  return (
    <>
    <div className='relative w-full md:!h-[600px] !h-[400px] z-20'>
                
      <Header />
      <Heroslider texttwo={'About'} overlay={overlay}/>
      <Image  src={Hero} className='left-0 right-0 bottom-0 top-0 w-full h-[100%] z-[-10] !object-cover '/>
      </div>
 <div className='bg-[#002E3C]'>
<Sectiontext  text={'Empire Developments is a Dubai-based real estate company known for delivering innovative, high-quality residential projects. With a focus on design excellence, smart features, and lifestyle amenities, Empire is redefining urban living across prime Dubai locations.'}/>
<Section />
<Sectiontwo />
<Sectionthree />
</div>
        <Footer /> 
</>
  )
}

export default index
