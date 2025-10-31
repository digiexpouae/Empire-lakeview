'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import slider from '../../../public/assets/aboutimages/slider1.png';
// import sliderimg from '../../../public/assets/slider2.jpg';
// import sliderimg2 from '../../../public/assets/projectimages/project-2.jpg';
// import khaleejLogo from '../../../public/assets/khaleej1.png';
// import arabialogo from '../../../public/assets/homeslider/arab.png'
// import bayanlogo from '../../../public/assets/homeslider/bayan.png'
// import identitylogo from '../../../public/assets/homeslider/identity.png'
// import designlogo from '../../../public/assets/homeslider/design.png'
// import plumberlogo from '../../../public/assets/homeslider/plumber.png'
// import plumberslide from '../../../public/assets/homeslider/hs2.png'
// import Person from '../../../public/assets/person.webp'
import Link from 'next/link';
// import zawya from '../../../public/assets/zawya-removebg-preview.png'
// import constructive from '../../../public/assets/constructive.png'
// import kamdar from '../../../public/assets/kamdar.jpg'
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

const ClientSlider = ({ heading, buttonheading, href }) => {
    const [current, setCurrent] = useState(1);

    const total = 10; // Since we have 7 slides now
    const extendedSlides = [
  {
    image: '/assets/3-10.png',
    logo: '/assets/logo-1.png',
    buttonHref: 'https://www.zawya.com/en/press-release/companies-news/empire-developments-property-portfolio-value-exceeds-aed2bln-as-it-charts-a-strong-growth-vision-aligned-with-the-uae-yuw6u0ry',
  },
  {
   image: '/assets/3-09.png',
    logo: '/assets/logo-2.png',
    buttonHref: 'https://www.observerdubai.com/2025/10/20/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/',
  },
  {
    image: '/assets/3-08.png',
    logo:  '/assets/logo-3.png',
    buttonHref: 'https://www.cbnme.com/news/empire-developments-crosses-aed-2-billion-in-project-portfolio-value/',
  },
  {
      image: '/assets/3-07.png',
     logo:  '/assets/logo-4.png',
    buttonHref: 'https://menews247.com/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/',
  },
  {
      image: '/assets/3-06.png',
    logo: '/assets/logo-5.png',
    buttonHref: 'https://gulfproperty.media/focus/nws_empire_developments%E2%80%99_1_500_unit_portfolio_surpasses_dh2_bn_with_three_projects_under_development_',
  },
  {
    image: '/assets/3-09.png',
    logo: '/assets/logo-2.png',
    buttonHref: 'https://www.observerdubai.com/2025/10/20/%D8%AA%D8%AA%D8%AC%D8%A7%D9%88%D8%B2-%D9%82%D9%8A%D9%85%D8%A9-%D9%85%D8%AD%D9%81%D8%B8%D8%A9-%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A5%D9%85%D8%A8%D8%A7%D9%8A%D8%B1-%D9%84%D9%84%D8%AA%D8%B7%D9%88/?lang=ar',
  },
  {
    image: '/assets/3-04.png',
    logo: '/assets/logo-6.png',
    buttonHref: 'https://pantimearabia.com/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/',
  },
  {
    image: '/assets/3-03.png',
    logo: '/assets/logo-6.png',
    buttonHref: 'https://pantimearabia.com/محفظة-عقارات-إمباير-للتطوير-العقاري-م/?lang=ar',
  },
  {
      image: '/assets/3-02.png',
    logo: '/assets/logo-7.png',
    buttonHref: 'https://dubaipropertyguide.io/empire-developments-property-portfolio-value-exceeds-aed2bln-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/',
  },
  {

     image: '/assets/3-01.png',
    logo: '/assets/logo-8.webp',
    buttonHref: 'https://nasnews.ae/tie-life-style/%d8%aa%d8%aa%d8%ac%d8%a7%d9%88%d8%b2-%d9%82%d9%8a%d9%85%d8%a9-%d9%85%d8%ad%d9%81%d8%b8%d8%a9-%d8%b9%d9%82%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a5%d9%85%d8%a8%d8%a7%d9%8a%d8%b1-%d9%84%d9%84%d8%aa%d8%b7%d9%88/',
  },
   {
    image: '/assets/3.png',
    logo: '/assets/logo-9.png',
    buttonHref: 'https://gulfnews.com/gn-focus/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae-1.500324059',
  },
     {
    image: '/assets/2.png',
    logo:  '/assets/logo-10.png',
    buttonHref: 'https://www.propertytime.ae/featured/empire-developments-property-portfolio-value-exceeds-dh2-billion',
  },
   {
    image: '/assets/3-08.png',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://mid-east.info/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/',
  },
];
    const extendedTotal = extendedSlides.length;

    const [slideWidth, setSlideWidth] = useState(0);
    const [previewWidth, setPreviewWidth] = useState(0);
    const [transitioning, setTransitioning] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            const container = Math.min(Math.max(window.innerWidth * 0.85, 280), 900);
            const slide = container * 0.8;
            const preview = container * 0.2;
            setSlideWidth(slide);
            setPreviewWidth(preview);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const getTranslateX = () => {
        const totalSlideWidth = slideWidth + previewWidth;
        const containerCenter = (slideWidth + previewWidth) / 2;
        const offset = current * totalSlideWidth + slideWidth / 2 - containerCenter;
        return offset;
    };

    useEffect(() => {
        if (!transitioning) return;

        const timeout = setTimeout(() => {
            if (current === 0) {
                setTransitioning(false);
                setCurrent(total);
            } else if (current === total + 1) {
                setTransitioning(false);
                setCurrent(1);
            } else {
                setTransitioning(false);
            }
        }, 1000);

        return () => clearTimeout(timeout);
    }, [current, transitioning, total]);

    useEffect(() => {
        let interval;
        interval = setInterval(() => {
            if (!transitioning) {
                setTransitioning(true);
                setCurrent((prev) => prev + 1);
            }
        }, 2000);

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [transitioning]);

    const realIndex = (current - 1 + total) % total;
    const containerWidth = slideWidth + previewWidth;
    const containerHeight = Math.min(slideWidth * 0.56, 500);

    // Navigation handlers
    const goToPrev = () => {
        if (!transitioning) {
            setTransitioning(true);
            setCurrent((prev) => prev - 1);
        }
    };
    const goToNext = () => {
        if (!transitioning) {
            setTransitioning(true);
            setCurrent((prev) => prev + 1);
        }
    };

    return (
        <div className="w-full h-auto bg-[#0E1527] px-2 pb-20 pt-10 relative hidden md:flex justify-center">
            <div className="w-full max-w-5xl">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col items-center justify-center text-center mb-8 w-full"
                >
                    <h2
                        className="text-4xl sm:text-6xl mt-10  font-light text-white tracking-tight mb-4"
                       
                    >
                        {heading}
                    </h2>
                    <Link href={href ?? '#'}>
                        <button className="bg-[linear-gradient(90deg,#CCAB64_0%,#FAECC9_100%)] text-black mb-14  cursor-pointer px-6 py-2 rounded-md transition text-sm sm:text-base w-auto">
                            {buttonheading}
                        </button>
                    </Link>
                </motion.div>


                {/* Slider */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative flex flex-col items-center mt-8"
                >
                    {/* Previous Arrow */}
                    <button
                        aria-label="Previous Slide"
                        onClick={goToPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[linear-gradient(90deg,#CCAB64_0%,#FAECC9_100%)] cursor-pointer hover:bg-white text-black rounded-full p-2 shadow-lg focus:outline-none transform transition-transform duration-300 hover:scale-110 active:scale-95"
                        style={{ border: '1px solid black', fontSize: 20 }}
                    >
                        &#8592;
                    </button>

                    {/* Next Arrow */}
                    <button
                        aria-label="Next Slide"
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[linear-gradient(90deg,#CCAB64_0%,#FAECC9_100%)] cursor-pointer hover:bg-white text-black rounded-full p-2 shadow-lg focus:outline-none transform transition-transform duration-300 hover:scale-110 active:scale-95"
                        style={{ border: '1px solid black', fontSize: 20 }}
                    >
                        &#8594;
                    </button>

                    <div
                        className="relative"
                        style={{
                            width: `${containerWidth}px`,
                            height: `${containerHeight}px`,
                            maxHeight: '500px',
                        }}  >
                           
                        <div
                            className={`flex ${transitioning
                                ? 'transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]'
                                : ''
                                }`}
                            style={{
                                width: `${(slideWidth + previewWidth) * extendedTotal}px`,
                                transform: `translateX(-${getTranslateX()}px)`,
                            }}
                        >
                            {/* Slide 1 */}
                                <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${1 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 1 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 1 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-10.png'  alt="Slide 1" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //  'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-6  sm:top-10 ">
                                            {/* <Image
                                                src={khaleejLogo}
                                                alt="Slide Logo"
                                                width={120}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
                                            Kamdar unveils new residential development in Dubai's JVC
                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
                                            Renowned developer launches first UAE project for public sale after four decades of delivering exclusive private developments
                                        </p> */}
                                        <a href="https://www.zawya.com/en/press-release/companies-news/empire-developments-property-portfolio-value-exceeds-aed2bln-as-it-charts-a-strong-growth-vision-aligned-with-the-uae-yuw6u0ry" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                             <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${1 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 1 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 1 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-09.png'  alt="Slide 1" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //   background:'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src={khaleejLogo}
                                                alt="Slide Logo"
                                                width={120}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
                                            Kamdar unveils new residential development in Dubai's JVC
                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
                                            Renowned developer launches first UAE project for public sale after four decades of delivering exclusive private developments
                                        </p> */}
                                        <a href="https://www.observerdubai.com/2025/10/20/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                              <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${1 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 1 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 1 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-08.png'  alt="Slide 1" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //         'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src={khaleejLogo}
                                                alt="Slide Logo"
                                                width={120}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
                                            Kamdar unveils new residential development in Dubai's JVC
                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
                                            Renowned developer launches first UAE project for public sale after four decades of delivering exclusive private developments
                                        </p> */}
                                        <a href="https://www.cbnme.com/news/empire-developments-crosses-aed-2-billion-in-project-portfolio-value/" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${0 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 0 === current ? 'scale(1.30)' : 'scale(0.95)',
                                    boxShadow: 0 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-08.png' alt="Slide 0" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                               s
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src={designlogo}
                                                alt="Slide Logo"
                                                width={120}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div> 
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
                                            Kamdar Developments Partners With Luxedesign to Deliver Elevated Residential Design
                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
                                            Kamdar Developments has appointed Luxedesign (LDV) as the General Contractor for the 105 Residences in JVC and an exclusive luxury villa collection in Meydan.
                                        </p> */}
                                        <a href="https://www.cbnme.com/news/empire-developments-crosses-aed-2-billion-in-project-portfolio-value/" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${1 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 1 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 1 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-07.png'  alt="Slide 1" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //         'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src={khaleejLogo}
                                                alt="Slide Logo"
                                                width={120}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
                                            Kamdar unveils new residential development in Dubai's JVC
                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
                                            Renowned developer launches first UAE project for public sale after four decades of delivering exclusive private developments
                                        </p> */}
                                        <a href="https://menews247.com/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 3 */}
                            <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${2 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 2 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 2 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-07.png' alt="Slide 2" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //         'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src={arabialogo}
                                                alt="Slide Logo"
                                                width={120}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
                                            Kamdar Developments Breaks Ground on <span style={{
                                                fontFamily: 'lexend',
                                                fontSize: '29px',
                                                fontWeight: '300',
                                            }}>105 </span>Residences in JVC
                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
                                            A 105-unit luxury residential Dubai project starting from $174,000 with completion expected in early 2027
                                        </p> */}
                                        <a href="https://menews247.com/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 4 */}
                            <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${3 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 3 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 3 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-06.png' alt="Slide 3" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //         'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src={bayanlogo}
                                                alt="Slide Logo"
                                                width={80}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
                                            Launch of Kamdar <span style={{
                                                fontFamily: 'lexend',
                                                fontSize: '29px',
                                                fontWeight: '300',
                                            }}>105 </span>project in Jumeirah Village Circle
                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
                                            Dubai-based Kamdar Developers has announced the launch of its new Kamdar 105 Residences project in Jumeirah Village Circle,
                                        </p> */}
                                        <a href="'https://gulfproperty.media/focus/nws_empire_developments%E2%80%99_1_500_unit_portfolio_surpasses_dh2_bn_with_three_projects_under_development_" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 5 */}
                            <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${4 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 4 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 4 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-09.png' alt="Slide 4" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //         'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src={identitylogo}
                                                alt="Slide Logo"
                                                width={120}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
                                            Unveiling Attainable Luxury
                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
                                            Kamdar Developments has launched 105 Residences, a new high-end development in Jumeirah Village Circle.
                                        </p> */}
                                        <a href="https://www.observerdubai.com/2025/10/20/%D8%AA%D8%AA%D8%AC%D8%A7%D9%88%D8%B2-%D9%82%D9%8A%D9%85%D8%A9-%D9%85%D8%AD%D9%81%D8%B8%D8%A9-%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A5%D9%85%D8%A8%D8%A7%D9%8A%D8%B1-%D9%84%D9%84%D8%AA%D8%B7%D9%88/?lang=ar" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 6 */}
                          <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${5 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 5 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 5 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-04.png'  alt="Slide 5" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //         'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src={plumberlogo}
                                                alt="Slide Logo"
                                                width={90}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
                                            Kamdar Developments Appoints Main Contractor for Latest Project
                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
                                            Emphasising on timely delivery and exceptional quality, Luxedesign's appointment is expected to support the project's completion by early 2027
                                        </p> */}
                                        <a href="https://pantimearabia.com/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div> 

                            {/* Slide 7 */}
                            <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${6 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 6 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 6 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-03.png' alt="Slide 6" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //         'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src={arabialogo}
                                                alt="Slide Logo"
                                                width={120}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
                                            Kamdar Property Development announces new <span style={{
                                                fontFamily: 'lexend',
                                                fontSize: '29px',
                                                fontWeight: '300',
                                            }}>105 </span>Residences' in JVC
                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
                                            105 Residences in Dubai's JVC features comprehensive amenities, including a rooftop open-air cinema, swimming pool, fitness studio and more
                                        </p> */}
                                        <a href="https://pantimearabia.com/محفظة-عقارات-إمباير-للتطوير-العقاري-م/?lang=ar" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 8 */}
                            <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${7 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 7 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 7 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-02.png' alt="Slide 7" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //         'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src={designlogo}
                                                alt="Slide Logo"
                                                width={100}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
                                            Kamdar Developments Partners With Luxedesign to Deliver Elevated Residential Design
                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
                                            Kamdar Developments has appointed Luxedesign (LDV) as the General Contractor for the 105 Residences in JVC and an exclusive luxury villa collection in Meydan.
                                        </p> */}
                                        <a href="https://dubaipropertyguide.io/empire-developments-property-portfolio-value-exceeds-aed2bln-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 9 */}
                            <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${8 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 8 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 8 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-01.png' alt="Slide 8" fill className="object-cover" />
                                <div
                                    // className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //         'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src='/assets/logo-8.webp'
                                                alt="Slide Logo"
                                                width={120}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
تتجاوز قيمة محفظة عقارات إمباير للتطوير العقاري 2 مليار درهم                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
إمباير تواصل تحقيق النمو القوي في السوق العقاري الإماراتي — Nas News UAE                                        </p> */}
                                        <a href="https://nasnews.ae/tie-life-style/%d8%aa%d8%aa%d8%ac%d8%a7%d9%88%d8%b2-%d9%82%d9%8a%d9%85%d8%a9-%d9%85%d8%ad%d9%81%d8%b8%d8%a9-%d8%b9%d9%82%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a5%d9%85%d8%a8%d8%a7%d9%8a%d8%b1-%d9%84%d9%84%d8%aa%d8%b7%d9%88/" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 10 */}
                            <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${9 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 8 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 8 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3.png' alt="Slide 8" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //         'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-4  sm:top-10 ">
                                            {/* <Image
                                                src='/assets/logo-9.png'
                                                alt="Slide Logo"
                                                width={120}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE
                                        </h2>
                                        <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
Bringing affordable luxury to end-users through a 0.5% monthly payment model
                                        </p> */}
                                        <a href="https://gulfnews.com/gn-focus/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae-1.500324059" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${8 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 8 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 8 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/2.png' alt="Slide 8" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //         'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src='/assets/logo-10.png'
                                                alt="Slide Logo"
                                                width={120}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
Empire Developments’ property portfolio value exceeds Dh2 billion                                        </h2> */}
                                        {/* <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
The total project portfolio of Empire Developments, one of the fastest-growing real estate developers in the UAE, has exceeded Dh2 billion (US$540 million) in value this year.
                                        </p> */}
                                        <a href="https://www.propertytime.ae/featured/empire-developments-property-portfolio-value-exceeds-dh2-billion" target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                           <div
                                className={`rounded-3xl overflow-hidden bg-white relative ${1 === current ? 'z-20' : 'z-10'
                                    }`}
                                style={{
                                    width: `${slideWidth}px`,
                                    height: `${containerHeight}px`,
                                    marginRight: `${previewWidth}px`,
                                    flex: '0 0 auto',
                                    transform: 1 === current ? 'scale(1.09)' : 'scale(0.95)',
                                    boxShadow: 1 === current ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                                    transition:
                                        'transform 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                <Image src='/assets/3-08.png' alt="Slide 1" fill className="object-cover" />
                                <div
                                    className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-12 z-10"
                                    // style={{
                                    //     background:
                                    //         'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                                    // }}
                                >
                                    <div className="max-w-md mt-[220px]">
                                        <div className="absolute top-20  sm:top-10 ">
                                            {/* <Image
                                                src='/assets/logo-11.jpg'
                                                alt="Slide Logo"
                                                width={120}
                                                height={32}
                                                className="object-contain drop-shadow-lg"
                                            /> */}
                                        </div>
                                        {/* <h2
                                            style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                                            className="text-white text-3xl font-semibold leading-[1] mt-3 mb-1 drop-shadow-lg"
                                        >
Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE
                                        </h2> */}
                                        {/* <p className="text-white text-md font-lexend mb-8 max-w-md drop-shadow-lg">
A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income                                        </p> */}
                                        <a  href='https://mid-east.info/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/' target="_blank" rel="noopener noreferrer">
                                            <button
                                                style={{
                                                    border: '1px solid #A08741',
                                                    borderRadius: '7px',
                                                }}
                                                className="text-white text-xs font-lexend cursor-pointer px-3 py-2 shadow-md transition w-fit"
                                            >
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default ClientSlider;