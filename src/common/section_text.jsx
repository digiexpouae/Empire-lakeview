'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // 👈 control delay between elements
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const SectionText = ({
  text,
  className,
  heading,
  text1,
  classNameH,
  classNamemain,
  footer,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
  });

  return (
    <motion.div
      ref={ref}
      className={`w-full flex items-center justify-center md:h-[560px] h-[400px] ${classNamemain}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.div
        className={`w-[80%] text-center ${footer}`}
        variants={containerVariants}
      >
        {heading && (
          <motion.h2
            className={`my-heading heading py-5 ${classNameH}`}
            variants={childVariants}
          >
            {text1}
          </motion.h2>
        )}
        <motion.span
          className={`text-white my-heading lg:text-[25px] md:text-[20px] text-[15px] md:leading-5 ${className}`}
          variants={childVariants}
        >
          {text}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default SectionText;
