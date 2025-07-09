'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Vision = ({ backgroundImage }) => {
  return (
    <div className="relative w-full h-[650px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative z-10 h-full flex items-center justify-start px-6 md:px-20">
        <div className="max-w-5xl text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Built with vision.<br />
          <span className="text-white">Backed by integrity.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-base max-w-3xl md:text-lg font-light leading-relaxed"
        >
     Empire Development offers modern, smart, and eco-friendly projects tailored to our clients' needs. 
     We focus on creating experiences that enhance every part of your life. 
     Empire Development offers premium-quality real estate development.
      If you want to buy a luxury home or property for sale in Dubai, Empire Development is your ideal partner.
        </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
