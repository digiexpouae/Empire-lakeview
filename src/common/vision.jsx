'use client'
import React from 'react';
import Image from 'next/image';
import bg from "../../public/assets/replacement.jpg"

const vision = () => {
  return (
    <section className="relative min-h-screen text-white w-full">
      {/* Background container with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Solid color background (60%) */}
        <div className="absolute left-0 top-0 bottom-0 w-[50%] bg-[#051F36]"></div>
        
        {/* Image (40%) */}
        <div className="absolute right-0 top-0 bottom-0 w-[50%]">
          <div 
            className="w-[100%] h-full bg-cover  bg-[position:100% 150%]"
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
          >
            <div className="absolute inset-0 bg-[#051F36]/40 w-screen"></div>
          </div>
        </div>
        
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 w-screen bg-gradient-to-r from-[#051F36] from-50% to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute z-10 w-full px-6 py-14 md:py-32 lg:px-44">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Built with vision.<br />
          <span className="text-white">Backed by integrity.</span>
        </h1>
        <p className="mt-6 text-lg text-white/80  md:text-2xl">
          Welcome to Empire Development, a forward-looking real estate developer in Dubai.
          Empire Lakeview is not only a place to live, but it is a transformative vision brought to life by Empire development.
          Empire Development reshapes urban life and offers apartments and homes built with modern technology.
        </p>
      </div>
    </section>
  );
};

export default vision;
