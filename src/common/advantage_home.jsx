'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const advantages = [
  {
    title: 'High-Yield Returns',
    icon: '/assets/high-yield.png',
  },
  {
    title: 'Iconic Landmarks',
    icon: '/assets/landmarks.png',
  },
  {
    title: 'Unmatched Luxury & Style',
    icon: '/assets/luxury-style.png',
  },
  {
    title: 'Strong Rental Demand',
    icon: '/assets/rental-demand.png',
  },
  {
    title: 'Proven Track Record',
    icon: '/assets/track-record.png',
  },
  {
    title: 'Future Growth Potential',
    icon: '/assets/growth.png',
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const AdvantagesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide for mobile view
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % advantages.length);
    }, 1000); // change every second
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full py-16"
      style={{ background: 'linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center text-[#2A2A2A] mb-12"
        >
        What Sets Us Apart
        </motion.h2>

        {/* Desktop view */}
        <motion.div
          className="hidden md:flex justify-center items-start gap-8 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center max-w-[130px] cursor-default"
            >
              <div className="w-20 h-20 relative mb-2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm md:text-base font-medium text-[#2A2A2A] leading-tight">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile auto-slider */}
        <div className="flex md:hidden justify-center">
          <motion.div
            key={advantages[currentIndex].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center max-w-[160px] mx-auto"
          >
            <div className="w-20 h-20 relative mb-2">
              <Image
                src={advantages[currentIndex].icon}
                alt={advantages[currentIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium text-[#2A2A2A] leading-tight">
              {advantages[currentIndex].title}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
