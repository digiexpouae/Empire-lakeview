'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import text_bg from "../../public/assets/two_bg.png"
import { easeInOut } from 'framer-motion';

const SectionText = ({
}) => {


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="relative  h-[80vh] md:h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-6"
      style={{ backgroundImage: `url(${text_bg.src})` }}
    >
      <div className="max-w-3xl" ref={ref}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-[80px] font-extrabold mb-4"
        >
          Discover a New <br /> Era of Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          className="text-[lg] md:text-[20px] font-medium leading-relaxed"
        >
         Empire Estate by Empire Development has set a new standard for luxury living in Dubai. This project offers high-end residences in Dubai. It includes many top-notch amenities. Empire Development homes blend comfort, smart features, and stylish design. This project is among the top luxury residential projects in Dubai.
        
        </motion.p>
      </div>
    </div>
  );
};

export default SectionText;
