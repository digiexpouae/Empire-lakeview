'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Logo from '../../public/assets/logo2.png';
import Sectiontext from '../common/section_text';
import Stickyicon from '@/common/stickyicon';
// Data arrays
const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Log in / Register', href: 'https://empiredevelopments.ae/login', external: true },
];

const latestProjects = [
  { name: 'Empire Lakeviews', href: '/lakeviews' },
  { name: 'Empire Livings', href: '/EMPliving' },
  { name: 'Empire Estates', href: '/EMPEstates' },
  { name: 'Empire Residence', href: '/Empireresidence' },
];

const resources = [
  { name: 'Press Release', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Whistleblower Line', href: '#' },
  { name: 'Investor Relations', href: '#' },
  { name: 'Mortgage Calculator', href: '#' },
];

const communities = [
  { name: 'Arjan', href: '#' },
  { name: 'JVC', href: '#' },
  { name: 'Dubai South', href: '#' },
  { name: 'Liwan', href: '#' },
  { name: 'Dubai Science Park', href: '#' },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Footer = ({ footertext, text1, text, text2, textpara }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <motion.div
      ref={ref}
      id="webcrumbs"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="bg-black w-full py-10 text-white">
   

        <div className="container mx-auto px-4 mt-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 xl:gap-8 lg:gap-0 gap-5 place-items-left md:place-items-center">
            <motion.div className="space-y-3" variants={fadeUp}>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-600 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-primary-600 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="space-y-3" variants={fadeUp}>
              <h3 className="font-semibold text-lg mb-4">Latest Projects</h3>
              <ul className="space-y-2">
                {latestProjects.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="flex items-start h-full" variants={fadeUp}>
              <a href="/" className="inline-block">
                <Image
                  src={Logo}
                  alt="Empire Developments"
                  className="h-[40px] w-auto md:h-[45px] lg:h-[50px] object-contain"
                />
              </a>
            </motion.div>

            <motion.div className="space-y-3" variants={fadeUp}>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                {resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="space-y-3" variants={fadeUp}>
              <h3 className="font-semibold text-lg mb-4">Communities</h3>
              <ul className="space-y-2">
                {communities.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
            variants={fadeUp}
          >
            <p className="text-sm mb-4 md:mb-0">© 2023 Empire Developments</p>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm hover:text-primary-600 transition-colors duration-300"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-sm hover:text-primary-600 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
              {['instagram', 'x-twitter', 'linkedin', 'facebook'].map(
                (icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <i className={`fa-brands fa-${icon} text-lg`}></i>
                  </a>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
        <Stickyicon  />
    </motion.div>
  );
};

export default Footer;
