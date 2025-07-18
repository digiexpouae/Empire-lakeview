import React, { useState } from 'react'
import Header from '@/layout/header'
import Heroslider from '@/common/heroslider'
import Image from 'next/image'
import Field from '../../../public/assets/field.jpg'
import Main from '../../../public/assets/mainproject1.png'
import Footer from '../../layout/footer'
import SectionTwo from '../../common/sectiontwo'
import SectionFour from '@/common/section4';
import contactbg from "../../../public/assets/contact.png"
import Sectionthree from '../empireresidence/sectionthree'
import map2 from '../../../public/assets/empireimage.png'
import mob from '../../../public/assets/Residence.png'
import Map from '../../common/maptwo'
import Testimonials from '@/common/testimonials'
import Sectiontext from '@/common/section_text'
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

  const textpara = "Empire Development's luxury apartments in JVC have large windows, open layouts, and modern finishes. These contemporary apartments Dubai are made for people who value harmony and elegance. Empire Development's architecture is both eco-friendly and beautiful. It’s perfect for anyone wanting to invest in Dubai real estate. Everything from energy-saving technologies to rooftop gardens supports a better way of life."
  const head = 'Live wisely at Empire Residence JVC'
  const para = "Empire Residence (JVC)  by Empire Development's modern design meets daily comfort. Empire Development's stylish homes have large windows, open layouts, and sleek finishes are made for people who value harmony and elegance. Ideal for those looking to invest in Dubai real estate."
  const head2 = 'Comfort Meets Smart Living'
  const para2 = "Empire Development has built each apartment with smart technology. You can control the lighting, AC, and security with a tap or your voice.  These luxury apartments in JVC by Empire Development make life simpler, save energy, and are straightforward to use.  Modern technology's simplicity will delight you, free from hassle."
  const head3 = 'Redefine sustainable living '
  const para3 = "Empire Development architecture is eco-friendly as well as beautiful. Everything from energy-saving technologies to rooftop gardens supports a better way of life.  Here the basis is sustainability; it is not a feature."
  const head4 = 'Top Spot, Actual Value'
  const para4 = "Empire Residence by Empire Development sits in the heart of Jumeirah Village Circle (JVC). It connects you to main roads, malls, and colleges.  For a house or business, this is a wise decision.  Invest in Dubai real estate and profit over time from a developing area."
  const head5 = 'Support That Estimates Trust'
  const para5 = "Empire Development is here to help you from the initial visit through handover.  Our knowledgeable Real Estate Consultancy Dubai team guides you in making sensible decisions. Investing in Dubai real estate is easy when you have flexible plans."





  const [overlay, setoverlay] = useState(false)
  const [main, setmain] = useState(true)
  return (
    <>
      <div className='w-full hidden md:block relative h-[500px] md:h-screen'>

        <Header />
        <Heroslider  className1={'top-[3%]'} main={main} textone={'Empire'} texttwo={'Residence'} bottom={'md:bottom-[-350px] bottom-[-300px] md:!w-full w-[500px]'} main_im={Main} overlay={true} />
        
        <Image src={Field} priority className='left-0 right-0 bottom-0 top-0 w-full h-[100%] z-[-10] !object-cover object-top-left' />
      </div>

      {/* Mobile only: plain div with header and mobile image, covers full screen */}
      <div className="block md:hidden w-full h-screen relative">
          <Header className="nav-menu absolute z-50" />
          <Image src={mob} className="object-cover w-full h-full" alt="Lakeviews Mobile" fill />
        </div>

       <div className='bg-[#0E1527]'>
      <SectionTwo amenities={amenities} textpara={textpara} classNameproject={'mb-20'}/>
 
        <Sectionthree />

        <Map title={'View Plazzo Heights'} map={map2} />
   
        <Testimonials />
   
         
             <SectionFour images={images} />
               
      </div>
      <Footer footertext={true} text1={head4} text={para4} text2={head5} textpara={para5} />
    </>
  )
}

export default empire
