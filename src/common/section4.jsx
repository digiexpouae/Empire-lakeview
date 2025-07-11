'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Form from '@/common/form';

const SectionFour = ({ images, background, im, bottom, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scaledBack, setScaledBack] = useState(false);

  const handleClick = () => {
    if (count >= 2) return;

    setCount((prev) => {
      const next = prev + 1;
      if (next === 1) {
        const nextIndex = (index + 1) % images.length;
        setIndex(nextIndex);
      }
      return next;
    });
  };

  const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15, // slight delay between children
    },
  },
};

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // short and snappy
      ease: 'easeOut',
    },
  },
};

  useEffect(() => {
    if (inView && count === 0) {
      setTimeout(() => {
        handleClick();
        setTimeout(() => {
          setIsTransitioning(true);
          setScaledBack(true);
        }, 200);
        setTimeout(() => {
          handleClick();
        }, 1500);
      }, );
    }
  }, [inView]);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden py-8 md:py-0" ref={ref}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/contact.png"
          alt="Background"
          fill
          className="object-cover scale-[1.4] object-top-left"
          priority
        />
      </div>

      {/* Animated Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]?.src + '-prev'}
          initial={{ scale: 1.6, opacity: 1 }}
          animate={{ opacity: 0.9, scale: !scaledBack ? 1.3 : 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
         
        </motion.div>
      </AnimatePresence>

      {/* Overlay - First Text Fade In */}
      {count === 1 && (
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              className="overlay bg-[#00000066] absolute inset-0 z-10 flex flex-col justify-center items-center leading-15"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="flex flex-col justify-center items-center leading-12"
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                <motion.span
                  variants={textVariants}
                  className="text-[25px] md:text-[60px] text-white mb-6"
                >
                  Where Luxury Meets
                </motion.span>
                <motion.span
                  variants={textVariants}
                  className="text-[20px] md:text-[63px] font-extrabold text-white"
                >
                  Unparalleled Value
                </motion.span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Overlay - Form Fade In */}
      {count === 2 && (
        <AnimatePresence>
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center w-full h-full bg-[#0E1527]/40 backdrop-blur-xs py-8 md:py-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center w-full py-5 md:py-10 h-full">
              <Form className="w-full h-full flex items-center py-5 md:py-10 justify-center" />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default SectionFour;
