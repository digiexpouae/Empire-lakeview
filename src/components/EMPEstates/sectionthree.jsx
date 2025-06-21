
import Image from 'next/image';
import { useInView } from 'framer-motion';
import {motion} from 'framer-motion'
import { useRef } from 'react';
const images = [
  '/assets/43755ed6f8266112d3c1d22e90c01be481730246.jpg',
  '/assets/b04ad572115c3ef55b1422dbcbd8ed244b4024b6.jpg',
  '/assets/797a6fc4ccd08d8da1139bbd3c8a9255b9ac682d.jpg',
  '/assets/2a90a96fcd535303b07c1699ed0b8fb55f09db07.jpg',
  '/assets/907196aa822553d509aa12ce64fa7177b2ad8c88.jpg',
];

const tiltClasses = [
  'rotate-12',
  '-rotate-12 ',
  'rotate-0 ',
  'rotate-8 ' ,
  '-rotate-8 ',
];

 function sectionthree() {
    const ref=useRef(null);
   const InView = useInView(ref, { once: true });

  return (
    <div className='w-full flex justify-center flex-col gap-10 md:pb-20 py-5 md:pt-36 items-center overflow-hidden relative z-50'>
<div className='absolute z-20 -left-160 '><h2 className=' text-[70px] md:text-[120px] my-heading whitespace-nowrap font-bold  'style={{color: '#00546E'


}}>Introducing Empire Estates Introducing Empire Estates</h2>
</div>
<div className="flex flex-wrap justify-center w-[80%] items-center p-4 -space-x-4 relative z-30" >
      {[...images].reverse().map((src, i) => (
        <motion.div
        ref={ref}
        initial={{opacity:0,y:i*20}}
        whileInView={{opacity:1,y:0}}
        transition={{delay: (images.length - 1 - i) * 0.2,duration:1}}
          key={i}
          className={`h-32 sm:w-40  w-32 sm:h-40 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-lg transform ${tiltClasses[i % tiltClasses.length]} transition-transform duration-300 hover:scale-105`}
        >
          <Image
       
            src={src}
            alt={`image-${i}`}
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </motion.div>
      ))}
    
    </div>
        <a
          href="/files/Floor Plans- Empire Estates.pdf"
          download
        className="bg-gradient-to-r from-[#CCAB64] text-center to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[200px] py-1 rounded-full transition-colors duration-300 text-sm lg:text-base mx-auto md:mx-0 block">
                    Download Floor Plan
                  </a>
    </div>
  );
}
export default sectionthree;