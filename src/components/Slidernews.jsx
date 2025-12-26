'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

const Slider = ({ heading, buttonheading, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const slides = [
    {
      image: '/assets/3-10.png',
      logo: '/assets/logo-1.png',
      heading: 'Empire Developments Property Portfolio Value Exceeds AED 2 Billion',
      text: 'Empire Developments charts a strong growth vision aligned with the UAE — Zawya',
      buttonHref: 'https://www.zawya.com/en/press-release/companies-news/empire-developments-property-portfolio-value-exceeds-aed2bln-as-it-charts-a-strong-growth-vision-aligned-with-the-uae-yuw6u0ry',
    },
    {
      image: '/assets/3-09.png',
      logo: '/assets/logo-2.png',
      heading: 'Empire Developments Portfolio Surpasses Dh2 Billion',
      text: 'Empire Developments continues strong growth aligned with UAE Vision — Observer Dubai (English)',
      buttonHref: 'https://www.observerdubai.com/2025/10/20/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/',
    },
    {
      image: '/assets/3-08.png',
      logo: '/assets/logo-3.png',
      heading: 'Empire Developments Crosses AED 2 Billion in Project Portfolio Value',
      text: 'Empire Developments achieves major milestone — Construction Business News Middle East',
      buttonHref: 'https://www.cbnme.com/news/empire-developments-crosses-aed-2-billion-in-project-portfolio-value/',
    },
    {
      image: '/assets/3-07.png',
      logo: '/assets/logo-4.png',
      heading: 'Empire Developments Portfolio Value Exceeds Dh2 Billion',
      text: 'Company charts strong growth vision in line with UAE goals — ME News 247',
      buttonHref: 'https://menews247.com/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/',
    },
    {
      image: '/assets/3-06.png',
      logo: '/assets/logo-5.png',
      heading: 'Empire Developments’ 1,500-Unit Portfolio Surpasses Dh2 Billion',
      text: 'Three major projects under development — Gulf Property Media',
      buttonHref: 'https://gulfproperty.media/focus/nws_empire_developments%E2%80%99_1_500_unit_portfolio_surpasses_dh2_bn_with_three_projects_under_development_',
    },
    {
      image: '/assets/3-09.png',
      logo: '/assets/logo-2.png',
      heading: 'تتجاوز قيمة محفظة عقارات إمباير للتطوير العقاري 2 مليار درهم',
      text: 'رؤية نمو قوية تتماشى مع أهداف دولة الإمارات — Observer Dubai (Arabic)',
      buttonHref: 'https://www.observerdubai.com/2025/10/20/%D8%AA%D8%AA%D8%AC%D8%A7%D9%88%D8%B2-%D9%82%D9%8A%D9%85%D8%A9-%D9%85%D8%AD%D9%81%D8%B8%D8%A9-%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A5%D9%85%D8%A8%D8%A7%D9%8A%D8%B1-%D9%84%D9%84%D8%AA%D8%B7%D9%88/?lang=ar',
    },
    {
      image: '/assets/3-04.png',
      logo: '/assets/logo-6.png',
      heading: 'Empire Developments Portfolio Value Crosses Dh2 Billion',
      text: 'Strong vision aligned with UAE’s growth — PanTime Arabia (English)',
      buttonHref: 'https://pantimearabia.com/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/',
    },
    {
      image: '/assets/3-03.png',
      logo: '/assets/logo-6.png',
      heading: 'محفظة عقارات إمباير للتطوير العقاري تتجاوز 2 مليار درهم',
      text: 'رؤية إمباير للنمو تتماشى مع استراتيجية الإمارات — PanTime Arabia (Arabic)',
      buttonHref: 'https://pantimearabia.com/محفظة-عقارات-إمباير-للتطوير-العقاري-م/?lang=ar',
    },
    {
      image: '/assets/3-02.png',
      logo: '/assets/logo-7.png',
      heading: 'Empire Developments Portfolio Value Surpasses AED 2 Billion',
      text: 'Strong expansion vision for UAE real estate — Dubai Property Guide',
      buttonHref: 'https://dubaipropertyguide.io/empire-developments-property-portfolio-value-exceeds-aed2bln-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/',
    },
    {

      image: '/assets/3-01.png',
      logo: '/assets/logo-8.webp',
      heading: 'تتجاوز قيمة محفظة عقارات إمباير للتطوير العقاري 2 مليار درهم',
      text: 'إمباير تواصل تحقيق النمو القوي في السوق العقاري الإماراتي — Nas News UAE',
      buttonHref: 'https://nasnews.ae/tie-life-style/%d8%aa%d8%aa%d8%ac%d8%a7%d9%88%d8%b2-%d9%82%d9%8a%d9%85%d8%a9-%d9%85%d8%ad%d9%81%d8%b8%d8%a9-%d8%b9%d9%82%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a5%d9%85%d8%a8%d8%a7%d9%8a%d8%b1-%d9%84%d9%84%d8%aa%d8%b7%d9%88/',
    },
    {
      image: '/assets/3.png',
      logo: '/assets/logo-9.png',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'Bringing affordable luxury to end-users through a 0.5% monthly payment model',
      buttonHref: 'https://gulfnews.com/gn-focus/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae-1.500324059',
    },
    {
      image: '/assets/2.png',
      logo: '/assets/logo-10.png',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion',
      text: 'The total project portfolio of Empire Developments, one of the fastest-growing real estate developers in the UAE, has exceeded Dh2 billion (US$540 million) in value this year',
      buttonHref: 'https://www.propertytime.ae/featured/empire-developments-property-portfolio-value-exceeds-dh2-billion',
    },
    {
      image: '/assets/3-08.png',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://mid-east.info/empire-developments-property-portfolio-value-exceeds-dh2-billion-as-it-charts-a-strong-growth-vision-aligned-with-the-uae/',
    },
    {
      image: '/assets/sl1.png',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://emiratesreporter.com/real-estate/empire-developments-appoints-sinyar-al-khaleej-contracting-as-main-contractor-for-empire-livings-in-dubai-science-park/',
    },

    {
      image: '/assets/sl2.png',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://pantimearabia.com/empire-developments-appoints-sinyar-al-khaleej-contracting-as-main-contractor-for-empire-livings-in-dsp/',
    },
    {
      image: '/assets/sl3.png',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://pantimearabia.com/%D8%A5%D9%85%D8%A8%D8%A7%D9%8A%D8%B1-%D8%AF%D9%8A%D9%81%D9%8A%D9%84%D9%88%D8%A8%D9%85%D9%86%D8%AA%D8%B3-%D8%AA%D8%B9%D9%8A%D9%86-%D8%B4%D8%B1%D9%83%D8%A9-%D8%B3%D9%8A%D9%86%D9%8A%D8%A7%D8%B1-%D8%A7/?lang=ar',
    },
    {
      image: '/assets/sl4.png',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://www.observerdubai.com/2025/11/26/empire-developments-appoints-sinyar-al-khaleej-contracting-as-main-contractor-for-empire-livings-in-dsp/',
    },
    {
      image: '/assets/a-1.webp',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://menews247.com/empire-developments-breaks-ground-on-empire-lake-views-a-landmark-31-floor-residential-tower-in-liwan/',
    },

    {
      image: '/assets/a-2.webp',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://www.zawya.com/ar/%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA-%D8%A7%D9%84%D8%B5%D8%AD%D9%81%D9%8A%D8%A9/%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA-%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA/31-q8bhenjk',
    },
    {
      image: '/assets/a-4.webp',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://emiratesreporter.com/headline/property-times-empire-developments-breaks-ground-on-empire-lake-views-a-landmark-31-floor-residential-tower-in-liwan/',
    },
    {
      image: '/assets/a-5.webp',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://lilacnews.net/%d8%a5%d9%85%d8%a8%d8%a7%d9%8a%d8%b1-%d9%84%d9%84%d8%aa%d8%b7%d9%88%d9%8a%d8%b1-%d8%a7%d9%84%d8%b9%d9%82%d8%a7%d8%b1%d9%8a-%d8%aa%d8%a8%d8%af%d8%a3-%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d8%a7%d9%84%d8%a5/',
    },
    {
      image: '/assets/a-6.webp',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://www.biztoday.news/2025/12/16/demand-for-mid-market-communities-is-rising-empire-lake-views-answers-the-call-kamran-ghani/',
    },
    {
      image: '/assets/a-7.webp',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://gulfproperty.media/construction/nws_empire_developments_breaks_ground_on_its_liwan_project',
    },
    {
      image: '/assets/a-8.webp',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://www.zawya.com/ar/%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA-%D8%A7%D9%84%D8%B5%D8%AD%D9%81%D9%8A%D8%A9/%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA-%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA/31-q8bhenjk',
    },
    {
      image: '/assets/a-9.webp',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://25h.app/2025/12/16/%d8%a5%d9%85%d8%a8%d8%a7%d9%8a%d8%b1-%d9%84%d9%84%d8%aa%d8%b7%d9%88%d9%8a%d8%b1-%d8%a7%d9%84%d8%b9%d9%82%d8%a7%d8%b1%d9%8a-%d8%aa%d8%a8%d8%af%d8%a3-%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d8%a7%d9%84%d8%a5/',
    },
    {
      image: '/assets/a-10.webp',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://www.dxbnewsnetwork.com/empire-developments-unveils-luxury-living-in-liwan-dubai',
    },
    {
      image: '/assets/a-12.webp',
      logo: '/assets/logo-11.jpg',
      heading: 'Empire Developments’ property portfolio value exceeds Dh2 billion as it charts a strong growth vision aligned with the UAE',
      text: 'A delivery-focused developer of high-quality affordable luxury homes, Empire Developments’ customer-centric approach encouraged it to introduce a game-changing 0.5 percent monthly payment plan that makes home super affordable to end-users with limited household income',
      buttonHref: 'https://www.dxbnewsnetwork.com/empire-developments-unveils-luxury-living-in-liwan-dubai',
    },



  ];

  const duplicatedSlides = [...slides, ...slides];

  // Helper function to apply custom 105 styling
  const renderHeadingWith105 = (heading) => {
    return heading.split('105').map((part, i) => (
      <React.Fragment key={i}>
        {part}
        {i < heading.split('105').length - 1 && (
          <span style={{ fontFamily: 'lexend', fontSize: '29px', fontWeight: '300' }}>105</span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="w-full min-h-screen bg-[#0D1028] px-2 sm:px-8 pt-12 flex justify-center items-center">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4 w-full"
        >
          <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
            <h2
              className="text-6xl text-white font-light tracking-tight mb-2 text-center sm:text-left"

            >
              {heading}
            </h2>
          </div>
          {/* {btn ? ( */}
          <Link href={href}>
            <button className="bg-[linear-gradient(90deg,#CCAB64_0%,#FAECC9_100%)] cursor-pointer text-black px-4 py-2 rounded-md transition text-xs sm:text-sm w-full sm:w-auto">
              {buttonheading}
            </button>
          </Link>
          {/* ) : ('')} */}
        </motion.div>

        {/* Infinite Scroll Slider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full flex items-center justify-center py-8"
        >
          <style jsx>{`
            @keyframes scroll-right {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .infinite-scroll {
              animation: scroll-right 50s linear infinite;
            }
            
            .infinite-scroll:hover {
              animation-play-state: paused;
            }
            
            .scroll-container {
              mask: linear-gradient(
                90deg,
                transparent 0%,
                black 10%,
                black 90%,
                transparent 100%
              );
              -webkit-mask: linear-gradient(
                90deg,
                transparent 0%,
                black 10%,
                black 90%,
                transparent 100%
              );
            }
            
            .slide-item {
              transition: transform 0.3s ease, filter 0.3s ease;
            }
            
            .slide-item:hover {
              transform: scale(1.05);
              filter: brightness(1.1);
            }
          `}</style>

          <div className=" w-full max-w-6xl">
            <div
              className="infinite-scroll flex gap-8 w-max"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {duplicatedSlides.map((slide, index) => (
                <div
                  key={index}
                  className="slide-item flex-shrink-0 w-96 h-96 md:w-[45rem] aspect-[16/9] rounded-xl overflow-hidden shadow-2xl relative"
                >
                  <Image
                    src={slide.image}
                    alt={`Slide ${index % slides.length}`}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-6 z-10"
                  // style={{
                  //   background: 'linear-gradient(180deg,rgba(25,25,25,0.45) 60%,rgba(25,25,25,0.85) 100%)',
                  // }}
                  >
                    <div className=" max-w-md">
                      {/* <div className="absolute top-10">
                        <Image
                          src={slide.logo}
                          alt="Slide Logo"
                          width={120}
                          height={32}
                          className="object-contain drop-shadow-lg"
                        />
                      </div> */}
                      {/* <h2
                        style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                        className="text-white text-4xl  font-semibold leading-[1] mt-10 mb-1 drop-shadow-lg"
                      >
                        {renderHeadingWith105(slide.heading)}
                      </h2>
                      <p className="text-white text-sm font-lexend mb-4 max-w-md drop-shadow-lg line-clamp-2">
                        {slide.text}
                      </p> */}


                      <a href={slide.buttonHref} target="_blank" rel="noopener noreferrer">
                        <button
                          style={{
                            border: '1px solid #fff',
                            borderRadius: '7px',
                          }}
                          className="ml-4 text-black text-xs font-lexend cursor-pointer px-3 py-2 bg-[linear-gradient(90deg,#CCAB64_0%,#FAECC9_100%)]  transition w-fit"
                        >
                          Read More
                        </button>
                      </a>


                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;