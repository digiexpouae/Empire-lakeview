import { motion, useInView } from 'framer-motion';
import { useRef } from "react";


const FadeInSection = ({ children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`${className} w-full`}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection