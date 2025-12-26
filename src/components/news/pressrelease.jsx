'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Image from 'next/image';
const newsReleases = [
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
export default function PressRelease() {
    const [currentPage, setCurrentPage] = useState(1);
    const releasesPerPage = 5;

    const totalPages = Math.ceil(newsReleases.length / releasesPerPage);
    const indexOfLastRelease = currentPage * releasesPerPage;
    const indexOfFirstRelease = indexOfLastRelease - releasesPerPage;
    const currentReleases = newsReleases.slice(indexOfFirstRelease, indexOfLastRelease);

    const paginate = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => paginate(i)}
                    className={`w-10 h-10 rounded-full flex items-center  cursor-pointer justify-center transition-all font-medium ${currentPage === i
                        ? 'bg-[linear-gradient(90deg,#CCAB64_0%,#FAECC9_100%)] text-[#0D1028] shadow-lg scale-105'
                        : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="min-h-screen bg-[#0D1028] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-medium text-white mb-12 text-center">
                    Latest News & Press Releases
                </h1>

                <div className="space-y-6 mb-12">
                    {currentReleases.map((release) => (
                        <div
                            key={release.id}
                            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10"
                        >
                            <div className="flex flex-col md:flex-row  ">
                                <div className="md:w-1/2 lg:w-[70%] xl:w-1/2 relative  ">
                                    <div className="relative w-full  aspect-[16/9] ">
                                        <Image
                                            src={release.image}
                                            alt={release.heading}
                                            className="w-full h-full md:h-full object-cover "
                                            fill
                                        />
                                    </div>
                                </div>
                                <div className="md:w-2/3 lg:w-3/4 p-6 sm:p-8">
                                    <h2 className="text-xl sm:text-2xl font-medium text-white mb-4 hover:text-[#CCAB64] transition-colors leading-tight line-clamp-2">
                                        {release.heading}
                                    </h2>
                                    <p className="text-gray-300 mb-6 leading-relaxed line-clamp-2">
                                        {release.text}
                                    </p>
                                    <a
                                        href={release.buttonHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm px-2 py-2 bg-[linear-gradient(90deg,#CCAB64_0%,#FAECC9_100%)] text-[#0D1028]  rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 ">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentPage === 1
                            ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                            : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {renderPageNumbers()}

                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentPage === totalPages
                            ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                            : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                <p className="text-center text-gray-400 mt-6 text-sm">
                    Page {currentPage} of {totalPages}
                </p>
            </div>
        </div >
    );
}