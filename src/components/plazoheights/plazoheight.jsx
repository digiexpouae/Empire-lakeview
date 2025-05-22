import React from 'react'
import Heroslider from '../../common/heroslider'
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import back from '../../../public/assets/Rectangle 13773.png'
import Hero from '../../../public/assets/ef1672414129e46146f488eaca82cf8a3b514a8e.png'

import Image from 'next/image'
import Sectiontwo from '@/common/sectiontwo'
import Testimonials from '@/common/testimonials'
import Map from '../../common/maptwo'
import map from '../../../public/assets/image.png'
import Sectionthree from './sectionthree'
import SectionFour from '../../common/section_four'
const plazoheights = () => {
   const amenities = [
    {
      text:"Completion Year",
      title: "2015-2019",
    
    },
    {
     text:'Unit Types',
      title: "Studios, 1 & 2 Bed",
      text2:'Apartments'
    },
    {
        text:'Developer',
    im:'/assets/plazoo.jpg'

    },
    {
      text: "Architect",
im:'/assets/cmpc.png'
    }


  ]
  const images=[{src:'/assets/plazoheihts.png'}]
  const textpara='Plazzo Heights is a six-storey residential building located in Jumeirah Village Circle (JVC), Dubai. Developed by Plazzo Development Real Estate, it offers studios, 1, and 2-bedroom apartments with modern amenities.'
  return (
    <>
<div className='w-full relative md:h-[600px] h-[400px]'>
        <Header className='nav-menu absolute z-50'/>
            <Heroslider bottom={' object-cover md:!h-[550px]   !bottom-0 !h-[350px] !w-[100%] '}  className2={'md:!top-6'} className1={'right-0 left-[unset] top-[13%]  lg:top-[15%]   '} main_im={Hero}  main={true}  texttwo={'Plazzo'} textthree={'Heights'}/>
      <Image  src={back} className='left-0 right-0 bottom-0 top-0 w-full h-[100%]   !object-cover '/>
          </div>
                     <div className='bg-[#002E3C]'>
          <Sectiontwo  amenities={amenities} textpara={textpara} className={'w-[80px] h-[80px]'}/>
       
          <Sectionthree />
             <Map  map={map} title={'View Plazzo Residence'}/>
                <Testimonials/>
   <SectionFour className='absolute '  images={images}/>
          
          </div>
<Footer />  
</>
)
}

export default plazoheights
