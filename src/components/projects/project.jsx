// 
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import Heroslider from '@/common/heroslider';
import back from '../../../public/assets/1e94c7c4bfc77819cbc77ef163f6e6ec3b61cf21.jpg';
import Introducing from '@/common/introducing';
import ima1 from '../../../public/assets/d3cffac39c025499b5d643c23941091538a28358.png';
import ima2 from '../../../public/assets/896f9f592b964d92926d050a82ffdf7c0cc52923.jpg';
import ima3 from '../../../public/assets/a0085398a559c041737ed82d891a967e8c17390a.jpg';
import Sectionthree from '../../common/sectionthree'
import SectionFour from '@/common/section_four';
const Project = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
const ima=[ima1,ima2,ima3]
 const imag = [
  {
    src: '/assets/ee70d663c4a8db7d05f72f368ee23dc4874fe3d5.png',
       title: '',
    subtitle: '',
  }
];
  return (
    <>
      <div className="w-full relative md:h-[600px] h-[400px]">
        <Header />
        <Heroslider
          className3={'top-2 lg:top-5 md:top-9 xl:top-12'}
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
            className={`object-cover transition-opacity duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {imageLoaded && (
            <div className="absolute inset-0 bg-[#002E3C80] z-10 transition-opacity duration-500 opacity-100"></div>
          )}
        </div>
      </div>
     <div className='bg-[#002E3C]'>
      <Sectionthree />
   <Introducing ima={ima} overlay={true} text1={'Projects'} className1={'!h-[500px] overflow-hidden'} btntext={'View All Projects'}  logo={false} viewprojects={true} className={'!h-[180px] md:!h-[250px]  !w-[400px]   relative'}/>

<SectionFour images={imag} />

</div>
      <Footer />
    </>
  );
};

export default Project;
