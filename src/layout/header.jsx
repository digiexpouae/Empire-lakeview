// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import Logo from '../../public/assets/logo (2).png'
// const header = () => {
//     const nav=[{name:'Home',link:'/'},{name:'About',link:'/'},{name:'Project',link:'/'},{name:'Broker Registration',link:'/'}]
// return(
// <>
//   <header className="relative z-10 flex justify-between items-center px-8 pt-4 lg:px-16">
//   <div className="flex items-center space-x-5">
//     {nav.map((elem,index)=>{
//       return ( <Link href={elem.link} className="text-white hover:text-yellow-300 transition-colors duration-300">
//         {elem.name}
//     </Link>)
//     })}

//   </div>

//   <div className="flex-grow flex justify-center">
//       <a href="#" className="transform hover:scale-105 transition-transform duration-300">
//        <Image src={Logo} height={70}/>
//       </a>
//   </div>

//   <div className="flex items-center space-x-4">
//       <Link
//           href="#"
//           className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-full transition-colors duration-300 transform hover:scale-105"
//       >
//           Contact Us
//       </Link>
//       <Link
//           href="#"
//           className="text-white border border-white hover:bg-white hover:text-cyan-800 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
//       >
//           Login / Register
//       </Link>
//   </div>
// </header>
// </>)
// }

// export default header;

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
const header = ({className}) => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Project', link: '/' },
    { name: 'Broker Registration', link: '/' }
  ];

  return (
    <header className={`relative z-50 ${className}`}>
      {/* Desktop Navigation */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-3">
        {/* Left Nav Links - Hidden on Mobile */}
        <nav className={`hidden md:flex items-center gap-x-3 lg:gap-x-6 `}>
          {console.log(className)}
          {nav.map((elem, index) => (
            <a
              key={index}
              href={elem.link}
              className="text-white hover:text-yellow-300 transition-colors duration-300 text-sm lg:text-base"
            >
              {elem.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="/" className="block transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/logo (2).png"
              alt="Empire Developments"
              className="h-[40px] w-auto md:h-[45px] lg:h-[50px] object-contain"
              width={200}
              height={200}
            />
          </a>
        </div>

        {/* Right CTA Buttons - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-x-3 lg:gap-x-4">
          <a
            href="#contact"
            className="
  bg-gradient-to-r from-[#CCAB64] to-[#FAECC9]
    hover:from-[#E5C98C] hover:to-[#FFF3DC] text-gray-800 px-4 lg:px-6 py-2 rounded-full transition-colors duration-300 transform text-sm lg:text-base whitespace-nowrap"
      >
            Contact Us
          </a>
          <a
            href="#login"
            className="text-white border border-white hover:bg-white hover:text-cyan-800 px-4 lg:px-6 py-2 rounded-full transition-all duration-300 transform text-sm lg:text-base whitespace-nowrap"
          >
            Login / Register
          </a>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute w-full bg-[#002E3C]/95 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? 'max-h-[400px] opacity-100 ' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col space-y-3 px-4 py-4">
          {nav.map((elem, index) => (
            <a
              key={index}
              href={elem.link}
              className="text-white hover:text-yellow-300 transition-colors duration-300 text-base py-1"
            >
              {elem.name}
            </a>
          ))}
          <div className="flex flex-col gap-y-2 pt-3 border-t border-white/20">
            <a
              href="#contact"
              className="bg-[#CCAB64] hover:bg-[#CCAB64] text-gray-800 px-4 py-2 rounded-full transition-colors duration-300 text-center text-base"
            >
              Contact Us
            </a>
            <a
              href="#login"
              className="text-white border border-white hover:bg-white hover:text-cyan-800 px-4 py-2 rounded-full transition-all duration-300 text-center text-base"
            >
              Login / Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;