// import React from 'react'
// import Image from 'next/image'
// import Hero from '../../../public/assets/heroim2.jpg'
// import person from '../../../public/assets/person.png'
// const sectionthree = () => {
//   return (
//     <div className='relative md:h-[600px] h-[400px] '>
//         <Image src={Hero} height={300} width={300} className='!h-full !w-full object-cover' />
//   <div className='overlay absolute left-0 right-0 top-0 bottom-0'>
//         </div>
//         <div className=' absolute w-full left-0 right-0 top-0 bottom-0'>
//             <div className='flex w-[80%]'>
//                 <div className='relative h-[300px] w-[40%]'>
//                     <Image src={person} className='!h-full !w-full object-cover'/>
//                 </div>
//          <div className='flex flex-col'>
//                     <span>Empowering the entrepreneurial odyssey with an unyielding vision, my mission is to transcend limits, scoff at the word 'NO,' and carve a legacy of relentless innovation and triumph.
// </span>
                   
//                    <div className='flex flex-col'>
                    
//                     <span className='text-[linear-gradient(90deg,_#CCAB64_0%,_#FAECC9_100%)]
// ]'>Mr. Kamran Ghani</span>
//                    <p>Chairman / Founder Ghani Holdings</p></div>
//             </div>

//         </div>
      
//  </div>
//   )
// }


// export default sectionthree;
import React from 'react'
import Image from 'next/image'
import Hero from '../../../public/assets/heroim2.jpg'
import person from '../../../public/assets/person.png'

const SectionThree = () => {
  return (
    <div className='relative md:h-[600px] h-[400px] w-full z-50'>
      <Image
        src={Hero}
        alt='Hero Background'
        height={300}
        width={300}
        className='!h-full !w-full object-cover relative z-10'
      />

      <div className='absolute inset-0 overlay z-20 flex items-center justify-center ' style={{background: `
      linear-gradient(0deg, rgba(0, 46, 60, 0.8), rgba(0, 46, 60, 0.8)),
      linear-gradient(180deg, rgba(0, 46, 60, 0) 68.55%, #002E3C 100%)
    `}}></div>

      <div className='absolute inset-0 flex justify-center items-end w-full bottom-0 z-30'>
        <div className='flex w-[80%] gap-8 md:flex-row flex-col text-white items-center justify-center'>
          <div className='relative flex items-center justify-center md:h-[500px] h-[250px] w-[60%] lg:w-[45%]'>
            <Image
              src={person}
              alt='Kamran Ghani'
              className='!h-full !w-full object-cover rounded-xl'
            />
          </div>
          <div className='flex flex-col justify-center w-full md:w-[40%] lg:w-[] text-center md:!text-start '>
            <span className='mb-4  text-[10px] md:text-[23px] lg:text-[30px] my-heading lg:leading-9'>
              Empowering the entrepreneurial odyssey with an unyielding vision, my mission is to transcend limits, scoff at the word 'NO,' and carve a legacy of relentless innovation and triumph.
            </span>

            <div className='flex flex-col'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] text-[10px] md:text-2xl font-semibold'>
                Mr. Kamran Ghani
              </span>
              <p className='md:text-sm text-[8px]'>Chairman / Founder Ghani Holdings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree
