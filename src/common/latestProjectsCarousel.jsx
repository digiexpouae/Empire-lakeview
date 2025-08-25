'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lastestprojectanimation from './latestprojectanimation';


const LatestProjects = ({project,className}) => {
  // const containerRef=useRef(null)


  return (
    <>
    <section className="bg-[#0D1028] relative  md:py-0 h-screen  flex flex-col items-center  !justify-center gap-4 md:gap-0 overflow-hidden " style={{justifyContent:'center'}} >
      <h2 className={`text-white text-[30px] md:text-[50px] font-bold text-center mb-8 md:mb-6 px-4 ${className}`}>
        {project}
      </h2>
  <Lastestprojectanimation />

  </section> 

 </>
  );
};

export default LatestProjects;
