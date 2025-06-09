'use client';
import React from "react";
import Image from 'next/image';
import Logo from '../../public/assets/logo2.png';
import Sectiontext from '../common/section_text'
// Links data
const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Log in / Register", href: "#" },
];

const latestProjects = [
  { name: "Empire Lakeviews", href: "#" },
  { name: "Empire Livings", href: "#" },
  { name: "Empire Estates", href: "#" },
  { name: "Empire Residence", href: "#" },
];

const resources = [
  { name: "Press Release", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Whistleblower Line", href: "#" },
  { name: "Investor Relations", href: "#" },
  { name: "Mortgage Calculator", href: "#" },
];

const communities = [
  { name: "Arjan", href: "#" },
  { name: "JVC", href: "#" },
  { name: "Dubai South", href: "#" },
  { name: "Liwan", href: "#" },
  { name: "Dubai Science Park", href: "#" },
];

const Footer = ({footertext,text1,text,text2,textpara}) => {
  return (
    <div id="webcrumbs"> 
      <div className="bg-black w-full py-10 text-white"  >
         {footertext && <>
                       <Sectiontext footer={'!text-start'} classNamemain={'!h-[200px] md:!h-[100px] !text-start'} classNameH={'!text-[12px] !py-0 md:!py-2 !text-start'} className={'!text-[9px] leading-0 md:!leading-3 !text-start'} heading={true}  text1={text1} text={text}/>
                           <Sectiontext footer={'!text-start'} classNamemain={'!h-[200px] md:!h-[100px] !text-start'} classNameH={'!text-[12px] !py-0 md:!py-2 !text-start'} className={'!text-[9px] leading-0 md:!leading-3 !text-start'} heading={true}  text1={text2} text={textpara}/>
         </>
             }
        <div className="container mx-auto px-4 mt-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 xl:gap-8 lg:gap-0 gap-5 place-items-left md:place-items-center ">
             
            <div className="space-y-3">
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-primary-600 transition-colors duration-300">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Projects */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg mb-4">Latest Projects</h3>
              <ul className="space-y-2">
                {latestProjects.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-primary-600 transition-colors duration-300">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <div className="flex  items-start h-full">
              <div >
                <a href="/" className="inline-block">
                  <Image
                    src={Logo}
                    alt="Empire Developments"
                    className="h-[40px] w-auto md:h-[45px] lg:h-[50px] object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                {resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-primary-600 transition-colors duration-300">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Communities */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg mb-4">Communities</h3>
              <ul className="space-y-2">
                {communities.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-primary-600 transition-colors duration-300">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">© 2023 Empire Developments</p>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm hover:text-primary-600 transition-colors duration-300">Terms of Use</a>
              <a href="#" className="text-sm hover:text-primary-600 transition-colors duration-300">Privacy Policy</a>
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:scale-110 transition-transform duration-300">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300">
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300">
                <i className="fa-brands fa-linkedin text-lg"></i>
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300">
                <i className="fa-brands fa-facebook text-lg"></i>
              </a>
            </div>
          </div>

        </div>
      </div> 
    </div>
  )
}

export default Footer;
