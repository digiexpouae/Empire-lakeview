import React, { useState } from 'react'
import Heroslider from '@/common/heroslider'
import Header from '../../layout/header'
import Footer from '@/layout/footer'
import Image from 'next/image'
import Hero from '../../../public/assets/b5f971e5fc95757ff6682f16b83e33e99c7186a8.png'
import Back from '../../../public/assets/bdb8cd9d9fe78760f31d9cbb99cc298603933d32.png'
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
      <Heroslider texttwo={'Residence'} textone={'Plazzo'} bottom={'bottom-[-100px] md:!bottom-[-140px] object-cover md:!h-[620px] !h-[350px] !w-[100%]  xl:!w-[70%] '}  className2={'md:!top-8'} className1={'right-0 left-[unset] top-[13%]  lg:top-[15%]   '} main_im={Hero}  overlay={overlay} main={true} cloud={cloud}/>
      <Image  src={Back} className='left-0 right-0 bottom-0 top-0 w-full h-[100%]   !object-cover '/>
     </div>
      <div className='bg-[#002E3C]'>
   < Sectiontwo images={images} amenities={amenities} textpara={text} className={'md:!h-[80px] lg:!h-[120px]'}/>

   <Sectionthree />
      <Map  map={map} title={'View Plazzo Residence'}/>
   <Testimonials />

   <SectionFour className='absolute '  images={images}/>
</div>
     <Footer />
    </>
  )
}

export default plazo
