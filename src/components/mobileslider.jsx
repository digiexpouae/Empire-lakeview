import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';


 const slides = [
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
    {
    image: '/assets/sl1.png',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://emiratesreporter.com/real-estate/empire-developments-appoints-sinyar-al-khaleej-contracting-as-main-contractor-for-empire-livings-in-dubai-science-park/',
  },

 {
    image: '/assets/sl2.png',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://pantimearabia.com/empire-developments-appoints-sinyar-al-khaleej-contracting-as-main-contractor-for-empire-livings-in-dsp/',
  },
 {
    image: '/assets/sl3.png',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://pantimearabia.com/%D8%A5%D9%85%D8%A8%D8%A7%D9%8A%D8%B1-%D8%AF%D9%8A%D9%81%D9%8A%D9%84%D9%88%D8%A8%D9%85%D9%86%D8%AA%D8%B3-%D8%AA%D8%B9%D9%8A%D9%86-%D8%B4%D8%B1%D9%83%D8%A9-%D8%B3%D9%8A%D9%86%D9%8A%D8%A7%D8%B1-%D8%A7/?lang=ar',
  },
 {
    image: '/assets/sl4.png',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://www.observerdubai.com/2025/11/26/empire-developments-appoints-sinyar-al-khaleej-contracting-as-main-contractor-for-empire-livings-in-dsp/',
  },

  {
    image: '/assets/a-1.webp',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://menews247.com/empire-developments-breaks-ground-on-empire-lake-views-a-landmark-31-floor-residential-tower-in-liwan/',
  },
   {
    image: '/assets/a-2.webp',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://www.zawya.com/en/press-release/companies-news/empire-developments-breaks-ground-on-empire-lake-views-a-landmark-31-floor-residential-tower-in-liwan-ev57lagr',
  },
   {
    image: '/assets/a-3.webp',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://gulfproperty.media/construction/nws_empire_developments_breaks_ground_on_its_liwan_project',
  },
  {
    image: '/assets/a-4.webp',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://emiratesreporter.com/headline/property-times-empire-developments-breaks-ground-on-empire-lake-views-a-landmark-31-floor-residential-tower-in-liwan/',
  },
   {
    image: '/assets/a-5.webp',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://lilacnews.net/%d8%a5%d9%85%d8%a8%d8%a7%d9%8a%d8%b1-%d9%84%d9%84%d8%aa%d8%b7%d9%88%d9%8a%d8%b1-%d8%a7%d9%84%d8%b9%d9%82%d8%a7%d8%b1%d9%8a-%d8%aa%d8%a8%d8%af%d8%a3-%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d8%a7%d9%84%d8%a5/',
  },
   {
    image: '/assets/a-6.webp',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://www.biztoday.news/2025/12/16/demand-for-mid-market-communities-is-rising-empire-lake-views-answers-the-call-kamran-ghani/',
  },
    {
    image: '/assets/a-7.webp',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://www.tradearabia.com/News/331510/Empire-breaks-ground-on-landmark-634-unit-residential-tower-in-Dubai',
  },


  {
    image: '/assets/a-8.webp',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://www.zawya.com/ar/%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA-%D8%A7%D9%84%D8%B5%D8%AD%D9%81%D9%8A%D8%A9/%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA-%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA/31-q8bhenjk',
  },
   {
    image: '/assets/a-9.webp',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://25h.app/2025/12/16/%d8%a5%d9%85%d8%a8%d8%a7%d9%8a%d8%b1-%d9%84%d9%84%d8%aa%d8%b7%d9%88%d9%8a%d8%b1-%d8%a7%d9%84%d8%b9%d9%82%d8%a7%d8%b1%d9%8a-%d8%aa%d8%a8%d8%af%d8%a3-%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d8%a7%d9%84%d8%a5/',
  },
 {
    image: '/assets/a-10.webp',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://www.dxbnewsnetwork.com/empire-developments-unveils-luxury-living-in-liwan-dubai',
  },
 {
    image: '/assets/a-12.webp',
    logo:  '/assets/logo-11.jpg',
    buttonHref: 'https://www.dxbnewsnetwork.com/empire-developments-unveils-luxury-living-in-liwan-dubai',
  },



];



const MobileSlider = () => {
  return (
    <div className="w-full block md:hidden relative overflow-hidden bg-white">
      <style jsx>{`
        :global(.swiper-pagination) {
          bottom: 12px !important;
        }

        :global(.swiper-pagination-bullets) {
          display: flex;
          justify-content: center;
          gap: 0;
        }

        :global(.swiper-pagination-bullet) {
          width: 7px;
          height: 7px;
          background: #888;
          border-radius: 9999px;
          opacity: 1;
          transition: all 0.3s ease;
        }

        :global(.swiper-pagination-bullet-active) {
          background: #fff;
          width: 24px;
        }
      `}</style>

      <div className="relative w-full  aspect-[16/9]" style={{ aspectRatio: '16 / 9' }}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >

          {slides.map((slide, index) => (
          
            <SwiperSlide key={index}>
                 <a
                    href={slide.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="mt-26  py-1 text-black text-center bg-[linear-gradient(90deg,#CCAB64_0%,#FAECC9_100%)]  max-w-[90px] text-sm rounded-md hover:bg-white hover:text-black transition"
                  >
              <div className="relative w-full aspect-[16/9]">
                {slide.image ? (
                  
                  <Image
                    src={slide.image}
                    alt={slide.heading}
                    layout="fill"
                    objectFit="cover"
                   className="object-cover "
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 " />
                )}
                <div className="absolute inset-0 flex flex-col max-w-[80%] justify-center p-6 text-white z-10">
                    <div className="absolute top-6 left-6 sm:top-10 sm:left-10">
                      {/* <Image
                        src={slide.logo}
                        alt="Logo"
                        width={120}
                        height={32}
                        className="object-contain drop-shadow-lg"
                      /> */}
                    </div>
                  <h2
                    className="text-xl font-bold max-w-xl leading-[1.1] mt-5"
                    style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
                  >
                    {slide.heading}
                  </h2>
                  {/* <a
                    href={slide.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-26  py-1 text-black text-center bg-[linear-gradient(90deg,#CCAB64_0%,#FAECC9_100%)]  max-w-[90px] text-sm rounded-md hover:bg-white hover:text-black transition"
                  >
                    Read More
                  </a> */}
                </div>
              </div>
              </a>
            </SwiperSlide>
            
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MobileSlider;
