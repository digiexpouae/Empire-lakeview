import React, { useEffect, useState } from 'react'
import Heroslider from './heroslider'
import Header from '@/layout/header'
import Section_two from './section_two'
import Section from '../home/section'
import Footer from '@/layout/footer'
import Place from '../../components/home/places'
import Introducing from './introducing'
import Icon from '../icon'
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
    <div className={`bg-[url('/assets/b.png')] bg-cover bg-center relative h-[1100px] z-50`} > 
        <Header className='nav-menu'/>
            <Heroslider />
           <div className='bg-[#002E3C]'>

           <Section_two /> 
           <Introducing />
           <Section />
          {/* <Section_three onAllVisible={handleAllVisible}/>  */}
           <Place />
           <Icon /> 
           </div>
          
           <Footer />
    </div>
  )
}

export default index
