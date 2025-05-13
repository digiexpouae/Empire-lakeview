import React, { useEffect, useState } from 'react'
import Heroslider from './heroslider'
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
const index = () => {
  const [showFooter, setShowFooter] = useState(false);

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
<div className="bg-[url('/assets/background2.png')] min-h-screen  bg-cover bg-center bg-no-repeat bg-fixed relative z-50">

        <Header className='nav-menu absolute z-50'/>
            <Heroslider />
          
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
    </div>
  )
}

export default index
