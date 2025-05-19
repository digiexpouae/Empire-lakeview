import React from 'react'
import Heroslider from '../../common/heroslider'
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import Hero from '../../../public/assets/plazoheihts.png'
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
            <Heroslider className={'top-[15%]'}   className1={' top-2 md:top-10'}  texttwo={'Plazzo'} textthree={'Heights'}/>
         <Image src={Hero} className='!left-0 !right-0 !top-0 object-cover !bottom-0 w-full h-[100%] ' />
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
