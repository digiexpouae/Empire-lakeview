import React from 'react'
import Heroslider from '../../common/heroslider'
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import back from '../../../public/assets/Rectangle 13773.png'
import Hero from '../../../public/assets/ef1672414129e46146f488eaca82cf8a3b514a8e.png'
import Sectiontext from '@/common/section_text'
import Image from 'next/image'
import Sectiontwo from '@/common/sectiontwo'
import Testimonials from '@/common/testimonials'
import Map from '../../common/maptwo'
import map from '../../../public/assets/image.png'
import Sectionthree from './sectionthree'
import SectionFour from '@/common/section4';
import mob from "../../../public/assets/Height_mobile.png"
import contactbg from "../../../public/assets/contact.png"
const plazoheights = () => {
   const amenities = [  
    {
      text:"Projects Delivered",
      title: "2015-2019",
    
    },
  {
     text:'Unit Types',
      title: "Studios, 1 & 2 Bed",
      text2:'Apartments'
    },
    {
        text:'Developer',
    im:'/assets/plazoo.png'

    },



  ]
  const images=[{src:'/assets/260780ea8e7c2393724d8e1ec8066a2b09f5a17f.jpg'}]
  const textpara='Plazzo Heights is a six-storey residential building located in Jumeirah Village Circle (JVC), Dubai. Developed by Plazzo Development Real Estate, it offers studios, 1, and 2-bedroom apartments with modern amenities.'
  const head='Elevate Your Living Experience.'
  const para="Palazzo Heights by Empire Development in JVC redefines modern urban life. It features smart design and innovative technology. Empire Development JVC residential apartments blend luxury with comfort. Plazzo Heights guarantees a unique way of life, whether you are searching for a home or an investment."
  const head2='Next-Gen, Technology-Driven Homes.'
  const head3='Smart Location, Smarter Living'
  const head4='Modern Amenities for Modern Living'
  const head5='Trusted Developer With Vision'
  const para2="This project of Empire Development features automated lighting, climate control, and security. This cutting-edge technology enhances lifestyles. Experience next-gen living in Palazzo Heights by Empire Development. For your convenience, we provide voice-activated automation with eco-friendly features."
  const para3=`Empire Development strategically located Palazzo Heights in JVC, a vibrant community in Dubai. Palazzo Heights by Empire Development provides you with every comfort of life. You can easily go to shopping malls, top schools, and business hubs. This place is ideal for anyone searching for "real estate companies near me." You won’t have to give up comfort or peace.`
  const para4="Experience modern amenities at Palazzo Heights by Empire Development. Where you can access a rooftop pool and deck, fitness center and gym, and retail outlets on site. Children can play safely in the play area. Empire Development offers covered parking and 24/7 security. This ensures your peace of mind every day."
  const para5="Empire Development is proud to be among the top real estate companies near me. We deliver cutting-edge innovation, professionalism, and transparency. Empire Development's secure payments plan makes buying apartments in JVC Dubai easier. We also combine user and investor-friendly terms with unparalleled design and quality."
  return (
    <>
<div className='w-full md:block hidden relative md:h-screen h-[500px]'>
        <Header className='nav-menu absolute z-50'/>
            <Heroslider overlay={true} bottom={' object-cover md:!h-[550px]   !bottom-[-15%] !h-[350px] !w-[100%] '}  className2={' !top-[23%] md:!top-4  '} className1={'right-0 left-[unset] top-[13%]    text-[10px]  '} main_im={Hero}  main={true} className3={'lg:bottom-[5%]'} texttwo={'Plazzo'} textthree={'Heights'}/>
      <Image  src={back} className='left-0 right-0 bottom-0 top-0 w-full h-[100%]   !object-cover '/>
          </div>

             {/* Mobile only: plain div with header and mobile image, covers full screen */}
                <div className="block md:hidden w-full h-screen relative">
                    <Header className="nav-menu absolute z-50" />
                    <Image src={mob} className="object-cover w-full h-full" alt="Lakeviews Mobile" fill />
                  </div>


                     <div className='bg-[#0E1527]'>
          <Sectiontwo  amenities={amenities} textpara={textpara} btn={false}/>
       
          <Sectionthree />
             <Map  map={map} title={'View Plazzo Heights'}/>
    
                <Testimonials/>
              
             <SectionFour images={contactbg} />
              
          
          </div>
<Footer footertext={true} text1={head4} text={para4} text2={head5} textpara={para5}/>  
</>
)
}

export default plazoheights
