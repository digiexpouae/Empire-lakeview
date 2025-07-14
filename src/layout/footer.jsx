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
  { name: 'Empire Livings', href: '/EMPlivings' },
  { name: 'Empire Estates', href: '/EMPEstates' },
  { name: 'Empire Residence', href: '/Empireresidence' },
];

const resources = [
  { name: 'Press Release', href: '/blogs' },
  { name: 'Blog', href: '/blogs' },
  { name: 'Mortgage Calculator', href: 'blogs' },
];

const communities = [
  { name: 'Arjan', href: '/EMPEstates' },
  { name: 'JVC', href: '/Empireresidence' },
  { name: 'Liwan', href: '/lakeviews' },
  { name: 'Dubai Science Park', href: '/EMPlivings' },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-8 px-4 md:px-8">
            <motion.div className="space-y-3 px-2" variants={fadeUp}>
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

            <motion.div className="space-y-3 px-2" variants={fadeUp}>
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

            <motion.div className="space-y-3 px-2 flex flex-col" variants={fadeUp}>
              <div className="h-[24px] mb-4">
                <a href="/" className="inline-block">
                  <Image
                    src={Logo}
                    alt="Empire Developments"
                    className="h-[50px] w-auto object-contain"
                  />
                </a>
              </div>
            </motion.div>

            <motion.div className="space-y-3 px-2" variants={fadeUp}>
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

            <motion.div className="space-y-3 px-2" variants={fadeUp}>
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
            className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
            variants={fadeUp}
          >
            {/* Left: Copyright */}
            <p className="text-sm text-white/80">© 2025 Empire Developments</p>

            {/* Middle: Links */}
            <div className="flex items-center gap-4 text-sm">
              <a href="/terms" className="text-white/80 hover:text-white transition-colors duration-300">Terms of Use</a>
              <div className="w-px h-4 bg-white/20"></div>
              <a href="/privacy" className="text-white/80 hover:text-white transition-colors duration-300">Privacy Policy</a>
            </div>

            {/* Right: Social Icons */}
            <div className="flex space-x-5 items-center mt-4 md:mt-0">
              <a href="https://www.facebook.com/empiredevelopmentsofficial?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/fb.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a href="https://www.instagram.com/empiredevelopments1/?igsh=aDBlYTYwNXQ0ZmNi#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/insta.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a href="https://www.linkedin.com/company/empiredevelopments1/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a href="https://x.com/empdevelopments?s=21" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/x.png"
                  alt="X"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a href="https://www.youtube.com/@EmpireDevelopments-ox1ju" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/youtube.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
      <Stickyicon />
    </motion.div>
  );
};

export default Footer;
