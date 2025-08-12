'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import ProjectsNavigation with SSR disabled
const ProjectsNavigation = dynamic(
  () => import('@/components/ProjectsNavigation'),
  { ssr: false }
);

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nav = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    {
      name: 'Properties',
      link: '/projects',
      children: [
        { name: 'Lakeviews', link: '/lakeviews' },
        { name: 'EMP(livings)', link: '/EMPlivings' },
        { name: 'EMP(Estates)', link: '/EMPEstates' },
        { name: 'Empire Residence', link: '/Empireresidence' },
        { name: 'Plazzo Residence', link: '/plazoresidence' },
        { name: 'Plazzo Heights', link: '/plazoheights' },
      ],
    },
    {   name: 'Channel Partners',
      link: 'https://app.empiredevelopments.ae/agency-register ',
      external: true },
      { name: 'Blogs', link: '/blogs'}
  ];

  return (
    <div
      className={`fixed z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-black/60 backdrop-blur-md shadow-md' : 'bg-transparent backdrop-blur-md'
}`}>
      <header className="relative z-50">
        {/* Top bar */}
        <div className="flex justify-between items-center h-[80px] px-4 sm:px-6 xl:px-20 lg:px-10 mdpy-10 py-3">
          {/* Desktop Nav  fixes*/}
          <motion.nav
            className="hidden lg:flex items-center gap-x-3 lg:gap-x-3 xl:gap-x-6 ml-10 pl-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ marginLeft: '-10px' }}
          >
            {nav.map((elem, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative group flex items-center justify-center"
              >
                <a
                  href={elem.link}
                  className="text-white hover:text-yellow-300 transition-colors duration-300 text-sm"
                >
                  {elem.name}
                </a>

                {index === 2 && (
                  <div className="inline-flex items-center justify-center w-5 h-5">
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="w-full h-full text-xl text-white cursor-pointer"
                    />
                  </div>
                )}

                {elem.children && (
                  <div className="fixed rounded-2xl left-10 top-20 mt-1 w-[80vw] bg-white text-gray-800 rounded-r-2xl shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 invisible group-hover:visible z-50 overflow-hidden">
                    <ProjectsNavigation />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a
              href="/"
              className="block transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/assets/logo (2).png"
                alt="Empire Developments"
                className="h-[40px] w-auto lg:h-[45px] lg:h-[50px] object-contain"
                width={200}
                height={200}
              />
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <motion.div
            className="hidden lg:flex items-center gap-x-3 lg:gap-x-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="/contact"
              variants={fadeUp}
              className="bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#FFF3DC] text-gray-800 px-4 lg:px-6 py-2 rounded-full transition-colors duration-300 transform text-sm  whitespace-nowrap"
            >
              Contact Us
            </motion.a>

            <motion.a
              href="https://app.empiredevelopment.ae/login"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="text-white border border-white hover:bg-white hover:text-cyan-800 px-4 lg:px-6 py-2 rounded-full transition-all duration-300 transform text-sm  whitespace-nowrap"
            >
              Login / Register
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute w-full bg-[#0E1527]/95 backdrop-blur-sm transition-all duration-300 ${
            isOpen
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <motion.div
            className="flex flex-col space-y-3 px-4 py-4"
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
          >
            {nav.map((elem, index) => (
              <motion.div key={index} variants={fadeUp}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  className="w-full text-left text-white hover:text-yellow-300 transition-colors duration-300 text-base py-1 flex justify-between items-center"
                >
                  <Link href={elem.link}>{elem.name}</Link>
                  {elem.children && (
                    <span className="ml-2">
                      {openDropdown === index ? '▲' : '▼'}
                    </span>
                  )}
                </button>
                {elem.children && openDropdown === index && (
                  <div className="ml-4 mt-1 rounded space-y-1">
                    {elem.children.map((child, idx) => (
                      <a
                        key={idx}
                        href={child.link}
                        className="block text-white hover:text-yellow-300 transition-colors duration-300 text-sm"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Mobile CTA Buttons */}
            <motion.div
              className="flex flex-col gap-y-2 pt-3 border-t border-white/20"
              variants={containerVariants}
            >
              <motion.a
                href="/contact"
                variants={fadeUp}
                className="bg-[#CCAB64] hover:bg-[#CCAB64] text-gray-800 px-4 py-2 rounded-full transition-colors duration-300 text-center text-base"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="https://app.empiredevelopment.ae/login" target="_blank" rel="noopener noreferrer"
                variants={fadeUp}
                className="text-white border border-white hover:bg-white hover:text-cyan-800 px-4 py-2 rounded-full transition-all duration-300 text-center text-base"
              >
                Login / Register
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </header>
    </div>
  );
};

export default Header;
