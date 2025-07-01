'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Vision = ({ backgroundImage }) => {
  return (
    <div
      className="w-full h-[650px] bg-cover bg-center flex items-center justify-start px-6 md:px-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
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
          Welcome to Empire Development, a forward-looking real estate developer in Dubai.
          Empire Lakeview is not only a place to live, but it is a transformative vision brought
          to life by Empire development. Empire Development reshapes urban life and offers
          apartments and homes built with modern technology.
        </motion.p>
      </div>
    </div>
  );
};

export default Vision;
