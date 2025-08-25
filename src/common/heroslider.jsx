import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from "gsap";
import { useRef } from 'react';
import Stickyicon from '@/common/stickyicon';
import Hero from '../../public/assets/heroim2.jpg'
const heroslider = ({thankyou,p1,p2,p3,textone,lakeview,texttwo,textthree,main_im,main,im1,im2,overlay,className1,className2,className,className3,bottom,cloud,img,Home,texttwoclass}) => {
    const boxref=useRef()
    const mm = gsap.matchMedia()
    const box_Two=useRef()
    const box_three=useRef()
    const im=useRef()
    const text1=useRef()
    const text2=useRef()
    const text3=useRef()
    useEffect(() => {
      
          
          mm.add('(min-width:760px)', ()=>{
            gsap.fromTo(
            boxref.current,
            { left: '-530px', opacity: 0 },   // start from translateX(-430px)
            { left: '-320px', opacity: 1, duration: 2, delay: 1, ease: "power2.out" } // animate to final position
        );
      })


      mm.add('(max-width:700px)', ()=>{
        gsap.fromTo(
        boxref.current,
        { left: '-250px', opacity: 0 },   // start from translateX(-430px)
        { left: '-150px', opacity: 1, duration: 2, delay: 1, ease: "power2.out" } // animate to final position
    );   
  })
    
        // Then animate it after a delay
      
        mm.add("(max-width: 768px)", () => {
          gsap.fromTo(
            box_Two.current,
            { right:'-200px', opacity: 0 }, // Shorter distance for mobile
            {
              right: '-100px',
              opacity: 1,
              duration: 2,
              delay: 1,
              ease: 'power2.out',
            }
          );
        });
      
        mm.add("(min-width: 760px)", () => {
          // Desktop animation
          gsap.fromTo(
            box_Two.current,
            { right: '-500px', opacity: 0 },
            {
              right: '-200px',
              opacity: 1,
              duration: 2,
              delay: 1,
              ease: 'power2.out',
            }
          );
        });
      

    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });
const child=document.querySelectorAll('.home')
    child.forEach((img, index) => {
      tl.fromTo(
        img,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        index === 0 ? 0 : '+=0.5' // delay between images
      );
    });
          
    
    gsap.fromTo(
              box_three.current,
              { y: 0, opacity: 0 },   // 👈 Start 400px below
              {
                y: 0,                   // 👈 Animate to original position
                opacity: 1,
                duration: 2,
                delay:2,
                ease: 'power2.out',
              }),  gsap.fromTo(
                im.current,
                {y:400, opacity: 0 },   // 👈 Start 400px below
                {y:0,
                               // 👈 Animate to original position
                  opacity: 1,
                  duration: 2,
                  delay: 1,
                  ease: 'power2.out',
                }
            ),gsap.fromTo(
              text1.current,
              {y:0, opacity: 0 },   // 👈 Start 400px below
              {y:0,
                             // 👈 Animate to original position
                opacity: 1,
                duration: 2,
                delay: 1,
                ease: 'power2.out',
              }
          ),
          gsap.fromTo(
            text2.current,
            {y:0, opacity: 0 },   // 👈 Start 400px below
            {y:0,
                           // 👈 Animate to original position
              opacity: 1,
              duration: 2,
              delay: 1,
              ease: 'power2.out',
            }
        ),
        gsap.fromTo(
          text3.current,
          {y:0, opacity: 0 },   // 👈 Start 400px below
          {y:0,
                         // 👈 Animate to original position
            opacity: 1,
            duration: 2,
            delay: 1,
            ease: 'power2.out',
          }
      )
      return () => mm.revert(); // Clean up

      }, []);
   
    return(
<div className='absolute z-20 w-full'>
<div className={`relative z-20 overflow-hidden w-full `}>
 


<div className= {`absolute w-full  flex items-center justify-center top-20 md:top-30  opacity-0 ${className2}`} ref={text2}> 
<div className='w-fit relative'>
<h1 className={`xl:text-[180px]  lg:text-[160px] md:text-[130px] tracking-tight text-[16vw]  z-40 flex items-center justify-center bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-extrabold  ${texttwoclass} `}>{texttwo}</h1>
{thankyou && <p className='text-center text-[#000000] text-lg'>We appreciate your interest. One of our representatives will be in <br/> touch with you shortly.
  </p>}
<div className={`absolute right-0 bottom-0 lg:mt-[25px] xl:mt-0 opacity-0 ${className3}`} ref={text3}>
<span  className='lg:text-[35px] md:text-[30px] xl:text-[50px]  text-[4vw] bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-white font-bold z-20 my-heading'>{textthree}</span></div>

<div className={`absolute left-[5%] opacity-0 ${className1}`}ref={text1} >

<span className=' xl:text-[45px] lg:text-[35px] md:text-[30px] text-[4vw] bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-white font-bold z-20 my-heading'>{textone} </span></div>
</div>

</div>
<div className='  lg:!right-42 right-0 absolute top-40 md:top-auto  md:bottom-20 z-[1000] w-[150px] md:w-[320px] flex items-center justify-center' ref={box_three}><span  className=' my-heading text-[10px] leading-4 md:leading-9 md:text-[26px]   tracking-tighter flex flex-col items-start justify-start  bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-light z-20 ' ><p> {p1}</p>
<p>{p2}</p>
 <p>{p3}</p></span></div>

      
  {main &&
<div className={`relative flex items-center justify-center h-[500px] md:h-screen w-full opacity-0 z-50 ${className}`} ref={im}>

<Image src={main_im}  height={441} width={882} className={`absolute  z-40  h-[500px] w-[240px] md:h-[782px] md:w-[370px] ${bottom} `} />


</div>
  }

{Home && 
<div className='flex h-[400px] md:h-screen w-full items-end  justify-center'>
{img.map((elem,index)=>{
return <div key={index} className={` flex items-end justify-end relative opacity-0 z-50 home ${elem.className}`} ><Image src={elem.im} width={600} height={400} className={` ${bottom} z-40  w-auto  !h-full md:!w-full object-fit  `} />
</div>
})}</div>

}

{cloud &&
  <div  className='absolute bottom-0 opacity-0 md:left-[-380px] left-[-180px] 'ref={boxref}  > 
<Image  src={im1}  id="#"className='!px-0 w-[300px] h-[200px]  md:!h-[300px] md:!w-[600px]' layout='intrinsic' objectFit='cover'/>

   
 </div>}
 {cloud &&
 <div  className="absolute top-20 z-50 md:right-[-230px] right-[-100px] opacity-0 " ref={box_Two}> {/* <<< starts offscreen */}
          <Image src={im2} alt="Cloud" objectFit='cover' className='w-[280px] h-[180px] md:!w-[580px] md:!h-[320px]' />
        </div>
        }{overlay && (
          <div className="bg-[linear-gradient(180deg,rgba(14,21,39,0)_71.68%,#0E1527_100%)] h-[300px] left-0 right-0 z-[999] absolute bottom-0 w-full" />
        )}
        
</div></div>
    )

}

export default heroslider;