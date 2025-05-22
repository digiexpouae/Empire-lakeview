import React, { useState } from 'react'
import Header from '@/layout/header'
import Heroslider from '@/common/heroslider'
import Image from 'next/image'
import Field from '../../../public/assets/field.jpg'
import Main from '../../../public/assets/mainproject1.png'
import Footer from '../../layout/footer'
import SectionTwo from '../../common/sectiontwo'
import SectionFour from '@/common/section_four'
import Sectionthree from '../empireresidence/sectionthree'
import map2 from '../../../public/assets/empireimage.png'

import Map from '../../common/maptwo'
import Testimonials from '@/common/testimonials'
const empire = () => {
  const [background, setbackground] = useState(true)
  
  const images = [
  {
    src: '/assets/mainproject1.png',
       title: '',
    subtitle: '',
  }
];

  const amenities = [
    {
      text:"Completion Year",
      title: "2020-2023",
    
    },
    {
     text:'Unit Types',
      title: "Studios, 1 & 2 Bed",
      text2:'Apartments'
    },
    {
        text:'Developer',
    im:'/assets/4d003aa6793278b9d25275d5fb3afbedab9f1ff7.png'

    },
    {
      text: "Architect",
im:'/assets/a6105c3f70c22b3bca36e60564ff487ffd4b6013.png'
    }
  ]

const textpara='Plazzo Heights is a six-storey residential building located in Jumeirah Village Circle (JVC), Dubai. Developed by Plazzo Development Real Estate, it offers studios, 1, and 2-bedroom apartments with modern amenities.'

const [overlay, setoverlay] = useState(false)
const [main, setmain] = useState(true)
    return (
    <>
   <div className='relative w-full md:!h-[600px] !h-[400px] z-20'>
                
      <Header />
      <Heroslider className1={'top-[3%]'} main={main} textone={'Empire'} texttwo={'Residence'} bottom={'md:bottom-[-350px] bottom-[-300px] md:!w-full'} main_im={Main} overlay={overlay}/>
      <Image  src={Field} className='left-0 right-0 bottom-0 top-0 w-full h-[100%] z-[-10] !object-cover object-top-left'/>
      </div>
       <div className='bg-[#002E3C]'>
      <SectionTwo amenities={amenities} textpara={textpara} className={'!w-[100%] !h-[60px]'}/>
      <Sectionthree />
      <Map title={'View Plazzo Heights'} map={map2}/>
              <Testimonials />
      <SectionFour className='absolute bottom-[-190px]' images={images} background={background} im={Field} bottom={'object-bottom'}/>

      </div>
      <Footer />
      </>
  )
}

export default empire
