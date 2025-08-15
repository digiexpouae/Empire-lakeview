'use client'
import React from 'react'
import Image from 'next/image'
import Hero from '../../../public/assets/heroim2.jpg'
import person from '../../../public/assets/person.png'
import { motion } from 'framer-motion'

const textVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
}

const SectionThree = () => {
  return (
    <div className='relative md:h-[600px] h-[400px] w-full z-40'>
      {/* Background Image */}
      
      <div className='relative z-10 !h-full !w-full object-cover '><Image
        src={Hero}
        alt='Hero Background'
        height={300}
        width={300}
        className='!h-full !w-full object-cover '
      />
</div>
      {/* Overlay */}
      <div 
        className='absolute inset-0 z-20 flex items-center justify-center pointer-events-none'
        style={{
          background: `
            linear-gradient(0deg, rgba(14, 21, 39, 0.8), rgba(14, 21, 39, 0.8)),
            linear-gradient(180deg, rgba(14, 21, 39, 0) 68.55%, #0E1527 100%)
          `,
          WebkitBackground: `
            -webkit-linear-gradient(0deg, rgba(14, 21, 39, 0.8), rgba(14, 21, 39, 0.8)),
            -webkit-linear-gradient(180deg, rgba(14, 21, 39, 0) 68.55%, #0E1527 100%)
          `
        }}>
      </div>

      {/* Content */}
      <div className='absolute inset-0 flex justify-center items-end md:h-[600px] w-full z-30 leading-2 overflow-hidden'>
        <div className='flex w-[80%] md:gap-8 md:flex-row flex-col text-white h-full items-center justify-center leading-[12px]'>
          {/* Person Image */}
          <div className='relative flex items-end justify-end md:h-[95%] h-[250px] w-[70%] lg:w-[55%] md:overflow-hidden'>
            <Image
              src={person}
              alt='Kamran Ghani'
              className='!h-[100%] !w-[100%] object-contain object-bottom rounded-xl'
            />
          </div>

          {/* Text Block */}
          <div className='flex flex-col justify-center w-full md:w-[50%] text-center md:!text-start'>
            <motion.span
              className='mb-4 text-[10px] lg:text-[11px] xl:text-[18px] tracking-tight  my-heading xl:leading-7'
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
At Ghani Holdings, our journey has been guided by a
vision without limits, one built on bold decisions,
relentless innovation, and an unwavering commitment
to excellence. For me, success is not only about the
milestones we achieve, but about leading with passion,
inspiring those around me, and building an Empire
whose influence and legacy will continue to grow.

            </motion.span>

            <motion.div
              className='flex flex-col'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                className='text-transparent bg-clip-text bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] text-[10px] md:text-2xl font-semibold'
                variants={textVariant}
                custom={1}
              >
                Mr. Kamran Ghani
              </motion.span>
              <motion.p
                className='md:text-sm text-[8px]'
                variants={textVariant}
                custom={2}
              >
                Chairman / Founder Ghani Holdings
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree
