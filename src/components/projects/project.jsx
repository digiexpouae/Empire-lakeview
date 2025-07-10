import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import Heroslider from '@/common/heroslider';
import back from '../../../public/assets/1e94c7c4bfc77819cbc77ef163f6e6ec3b61cf21.jpg';
import Introducing from '@/common/introducingtwo';
import ima1 from '../../../public/assets/d3cffac39c025499b5d643c23941091538a28358.png';
import ima2 from '../../../public/assets/896f9f592b964d92926d050a82ffdf7c0cc52923.jpg';
import ima3 from '../../../public/assets/a0085398a559c041737ed82d891a967e8c17390a.jpg';
import Sectionthree from '../../common/sectionthree';
import Sectiontext from '@/common/section_text';
import SectionFour from '@/common/section4';
import contactbg from "../../../public/assets/contact.png"
import Fadein from '@/common/fadein'; // ✅ Make sure to import this
import { HeroDemo1 } from '../hero-gallery-demos';
import LatestProjects from '@/common/latestProjectsCarousel';

const Project = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
 const ima = [{im:ima1,link:'/plazoheights',text:'Plazzo heights'}, {im:ima2,link:'/plazoresidence',text:'Plazzo Residence'}, {im:ima3,link:'/Empireresidence',text:'Empire Residence'}]
  const wrapper = useRef();
  const introRef = useRef();

  const imag = [
    {
      src: '/assets/ee70d663c4a8db7d05f72f368ee23dc4874fe3d5.png',
      title: '',
      subtitle: '',
    },
  ];





  const head = 'EXPERIENCE MODERN LIVING IN DUBAI'
  const para = "JVC is one of the top neighborhoods in Dubai. This is where the new residential property, Empire Lakeview. It is the ideal choice for you if you want to book an apartment in Dubai that offers comfortable, stylish apartments with smart designs. Empire Development's project features modern architecture residences Dubai that buyers want today."
  const head2 = 'Home Design For Your Comfort'
  const para2 = "Every apartment in the Empire Lakeview development by Empire Development is spacious. They feature high-quality finishes, made with premium materials. The residences have smart conveniences. Empire Development included sophisticated security systems, climate control, and automatic lighting. These features simplify your life and help you save energy. Its modern design and smart living concepts make it a top choice."
  const head3 = 'Modern Amenities for Everyday Comfort'
  const para3 = "Residents of Empire Lakeview by Empire Development can have several outstanding amenities. You may lounge and take in city views from a rooftop swimming pool. For those who enjoy exercise, the project boasts a fully furnished gym. Safe play areas for children, and your convenience, the community boasts retail stores. Empire Development also provides 24/7 security and covered parking to help you feel comfortable and safe."
  const head4 = 'Prime Location, Premium Value'
  const para4 = "Empire Lakeview by Empire Development is close to shopping centers, colleges, and offices. It makes daily life easier and more convenient. It also ensures that the project is among the high ROI properties in Dubai, which makes it a wise investment decision."
  const head5 = 'Book an Apartment Today at Empire Lakeview '
  const para5 = "Empire Lakeview by Empire Development offers both a great investment and a stylish residence. Don't miss the opportunity to live in one of the finest modern architecture residences Dubai. Book an apartment in Dubai now and savor a future-ready way of life."


  return (
    <>
      <div className="w-full relative h-screen md:h-screen">
        <Header />
        <Heroslider
          className3={'top-2 lg:top-5 md:top-9 xl:top-12'}
          className2={'!top-[50%] md:!top-[40%] xl:!top-[35%]'}
          texttwo={'Projects'}
          main={true}
          bottom={'bottom-0 !h-[240px] md:!h-[400px] !w-[85%] md:!w-[70%] lg:!w-[50%] hidden'}
          cloud={false}
        />

        <div className="absolute inset-0 -z-10">
          <Image
            src={back}
            fill
            priority
            alt="Background"
            className={`object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          {imageLoaded && (
            <div className="absolute inset-0 bg-[#002E3C80] z-10 transition-opacity duration-500 opacity-100"></div>
          )}
        </div>
      </div>

      <div className="bg-[#0E1527]">

        
        <LatestProjects/>


        <div ref={introRef} className="flex flex-col items-center justify-center">
          <Fadein>
          <Introducing links='/projects' ima={ima} overlay={true} introRef={introRef} text1={'Projects'} className1={'md:!h-[500px] overflow-hidden flex items-center justify-center'} btntext={'View All Projects'} logo={false} viewprojects={true} className={'!h-[150px] md:!h-[270px] !w-[190px]  md:!w-[420px] relative'} />
  
          </Fadein>

        </div>

        <Fadein>
        <SectionFour images={contactbg} />
        </Fadein>
      </div>

      <Footer footertext={true} text1={head4} text={para4} text2={head5} textpara={para5} />
    </>
  );
};

export default Project;