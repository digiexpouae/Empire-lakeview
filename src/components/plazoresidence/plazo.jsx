import React, { useState } from 'react'
import Heroslider from '@/common/heroslider'
import Header from '../../layout/header'
import Footer from '@/layout/footer'
import Image from 'next/image'
import Hero from '../../../public/assets/f.png'
import Sectiontwo from '@/common/sectiontwo'
import Testimonials from '@/common/testimonials'
import map from '../../../public/assets/plazzoimage.png'
import Map from '@/common/maptwo'
import SectionFour from '@/common/section_four'
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
"Plazzo Residence is a five-storey residential development located in Jumeirah Village Triangle, Dubai. Completed in 2016, the project offers studios, 1-, and 2-bedroom apartments with sizes ranging from 412 to 2,422 sq. ft. Amenities include rooftop swimming pools for adults and children, a gym, sauna, steam room, jacuzzi, children's play area, 24-hour concierge services, and covered parking."

  const amenities = [
    {
      text:"Completion Year",
      title: "2012-2016",
    
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
    return (
    <>  <div className='relative w-full md:!h-[600px] !h-[400px] z-20'>
        <Header />
      <Heroslider texttwo={'Residence'} textone={'Plazzo'} className1={'right-0 left-[unset] top-0 '} className2={'!z-[-10]'}  overlay={overlay} main={main} cloud={cloud}/>
      <Image  src={Hero} className='left-0 right-0 bottom-0 top-0 w-full h-[100%]   !object-cover '/>
     </div>
      <div className='bg-[#002E3C]'>
   < Sectiontwo images={images} amenities={amenities} textpara={text} className={'w-[80px] h-[80px]'}/>

   <Sectionthree />
   <Testimonials />
   <Map  map={map} title={'View Plazzo Residence'}/>
   <SectionFour className='absolute '  images={images}/>
</div>
     <Footer />
    </>
  )
}

export default plazo
