'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const projects = [
  {
    logo: '/assets/cardlogo.jpg',
    location: 'LIWAN',
    description:
      'Empire Lakeviews by Empire Developments is a luxury residential project located in Liwan, Dubailand, Dubai. This 29-storey development offers 604 units, including studios, 1- and 2-bedroom apartments, & 3-bedroom duplexes, with many units featuring private pools.',
    image: '/assets/slider1.webp',
  },
  {
    logo: '/assets/cardlogo3.png',
    location: 'DUBAI',
    description:
      'Empire Livings is a high-rise project offering elegant studio to 3-bedroom units in the heart of Dubai. A blend of smart tech and premium materials defines modern living here.',
    image: '/assets/slider1.webp',
  },
  {
    logo: '/assets/cardlogo2.jpg',
    location: 'JVC',
    description:
      'Empire Heights is an upcoming luxury tower in Jumeirah Village Circle with rooftop pools, duplex penthouses, and stunning skyline views. Ideal for investors and families alike.',
    image: '/assets/slider1.webp',
  },
];

const LatestProjects = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollOffset, setScrollOffset] = useState('0px');
  const [totalWidth, setTotalWidth] = useState('100vw');

  // Check mobile status and update offset/width dynamically
  useEffect(() => {
    const updateDimensions = () => {
      const isMobileNow = window.innerWidth < 768;
      setIsMobile(isMobileNow);

      if (isMobileNow) {
        setScrollOffset(`-${(projects.length - 1) * 80}vw`);
        setTotalWidth(`${projects.length * 80}vw`);
      } else {
        setScrollOffset(`-${(projects.length - 1) * 620}px`);
        setTotalWidth(`${projects.length * 620}px`);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', scrollOffset]);
  const smoothX = useSpring(x, { damping: 30, stiffness: 100 });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#0D1028]">
      <div
        ref={stickyRef}
        className="sticky -top-5 md:-top-20 flex flex-col items-center justify-center px-4 md:pt-0 pt-20 pb-20 overflow-hidden"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mt-20 text-center mb-16">
          Latest Projects
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            style={{ x: smoothX, width: totalWidth }}
            className="flex gap-6 md:gap-10 flex-nowrap"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 md:p-6 w-[80vw] md:w-[620px] shrink-0 shadow-xl flex flex-col justify-between"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <Image
                      src={project.logo}
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button className="px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] text-black text-sm rounded-full font-semibold hover:scale-105 transition whitespace-nowrap">
                    View Project
                  </button>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="w-full h-[200px] md:h-[220px] relative rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.location}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;