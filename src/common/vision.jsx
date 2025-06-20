'use client'
import React from 'react';
import Image from 'next/image';
import bg from "../../public/assets/visionbg.png"

const vision = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 py-14 md:py-32 lg:px-44">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Built with vision.<br />
          <span className="text-white">Backed by integrity.</span>
        </h1>
        <p className="mt-6 text-lg text-white/80 max-w-xl">
          Welcome to Empire Development, a forward-looking real estate developer in Dubai.
          Empire Lakeview is not only a place to live, but it is a transformative vision brought to life by Empire development.
          Empire Development reshapes urban life and offers apartments and homes built with modern technology.
        </p>
      </div>
    </section>
  );
};

export default vision;
