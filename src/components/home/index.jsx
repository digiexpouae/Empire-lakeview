import React, { useEffect, useState } from 'react'
import Heroslider from '../../common/heroslider'
import Header from '@/layout/header'
import Section_two from './section_two'
import Section from '../home/section'
import Footer from '@/layout/footer'
import Place from '../../components/home/places'
import Introducing from './introducing'
import Icon from '../icon'
import SectionFour from '../home/section_four'
import Image from 'next/image'
import back from '../../../public/assets/background2.png'
import empire from '../../../public/assets/empire2.png'
import cloud from '../../../public/assets/cloud_one.png'
const index = () => {
  const [showFooter, setShowFooter] = useState(false);
const [overlay, setoverlay] = useState(true)
  const handleAllVisible = () => {
    setShowFooter(true); // ✅ When SectionThree is done, show footer
  };
// useEffect(()=>{
//   const cursor=document.querySelector('.cursor')
//   const blur=document.querySelector('.cursor-blur')
//   let mouseX = 0;
//   let mouseY = 0;

// document.addEventListener('mousemove',function(e){
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;


//   // Dot follows instantly
//   cursor.style.left =mouseX +'px'
//   cursor.style.top =mouseY +'px'

//   // Blur follows with offset
//   blur.style.left =mouseX -150 +'px'
//   blur.style.top =mouseY -150 +'px'

 
// })

//   const header = document.querySelectorAll('.nav-menu a');

//   header.forEach((elem) => {
//     elem.addEventListener('mouseenter', () => {
//       cursor.style.border = '0.2px solid #fff';
//       cursor.style.backgroundColor='transparent';
//       cursor.style.transition='0.3s'
//       cursor.style.scale=4

//     })  
//     elem.addEventListener('mouseleave', () => {
//       cursor.style.border = 'none';
//       cursor.style.scale=1
//       cursor.style.backgroundColor='#CCAB64';
//       cursor.style.border = '0px solid #CCAB64';


//     });
//   });

// },[])



  return (
<>
<div className='w-full relative md:h-[600px] h-[400px]'>
        <Header className='nav-menu absolute z-50'/>
            <Heroslider main_im={empire} im1={cloud} im2={cloud} textone={'Empire'} texttwo={'Lakeviews'} textthree={'Liwan'} p1={'a striking tower in Liwan,'} p2={'designed for lifestyle'} p3={'and luxury.'} overlay={true}/>
         <Image src={back} className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' />
          </div>
           <div className='bg-[#002E3C]'>


           <Section_two /> 
           <Introducing />
           <Section />
          {/* <Section_three onAllVisible={handleAllVisible}/>  */}
           <Place />
           <Icon /> 
           </div>
          <SectionFour/>
        
           <Footer />
    </>
  )
}

export default index
