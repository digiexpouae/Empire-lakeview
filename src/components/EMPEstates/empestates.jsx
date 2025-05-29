import React, { useState } from 'react'
import Header from '@/layout/header'
import Footer from '@/layout/footer'
import Image from 'next/image'
import Heroslider from '@/common/heroslider'
import back from '../../../public/assets/Rectangle 13772.png'
import Hero from '../../../public/assets/cc.png'

import Sectiontext from '../../common/section_text'
import SectionThree from './sectionthree'
import Sectionfour from './sectionfour'
import Section from '@/common/section'
import SectionFive from '../../common/section_four'
import Places from '../../common/places'
import Icons from '../../components/icon'
import DubaiMiracleGarden from '../../../public/miracle.svg';
import DubaiButterflyGarden from '../../../public/butterfly.svg';
import DubaiHillsMall from '../../../public/dubai hill mall.svg';
import GlobalVillage from '../../../public/villae.svg';
import MallOfTheEmirates from '../../../public/mall of emirates.svg';
import DubaiAutodrome from '../../../public/dubai autodrome.svg';
import BurjKhalifa from '../../../public/burj.svg';
import DubaiMarinaMall from '../../../public/dubai marina mall.svg';








const empestates = () => {

const icons = [
  { img: DubaiMiracleGarden, name: 'Dubai Miracle Garden', distance: '05 minutes' },
  { img: DubaiButterflyGarden, name: 'Dubai Butterfly Garden', distance: '07 minutes' },
  { img: DubaiHillsMall, name: 'Dubai Hills Mall', distance: '15 minutes' },
  { img: GlobalVillage, name: 'Global Village', distance: '15 minutes' },
  { img: MallOfTheEmirates, name: 'Mall of the Emirates', distance: '20 minutes' },
  { img: DubaiAutodrome, name: 'Dubai Autodrome', distance: '20 minutes' },
  { img: BurjKhalifa, name: 'Burj Khalifa', distance: '20–25 minutes' },
  { img: DubaiMarinaMall, name: 'Dubai Marina Mall', distance: '25 minutes' },
]
const markers = [
  { name: 'Dubai Miracle Garden', coordinates: [25.0631, 55.2471],  icon: '/assets/miracle.svg'  },
  { name: 'Dubai Butterfly Garden', coordinates: [25.0615, 55.2468], icon: '/assets/butterfly.svg' },
  { name: 'Dubai Global Village	', coordinates: [25.0672, 55.3047], icon: '/assets/villae.svg' },
    { name: 'Burj Khalifa	', coordinates: [25.1972, 55.2744], icon: '/assets/burj.svg' },

];



  const image=[{im:'/assets/ima2.jpg',tex1:'Studio',tex2:'SIZE:443.55 SQ.FT'},
{im:'/assets/bed1.jpg',tex1:'1 Bed',tex2:'SIZE: 898.42 SQ.FT.'},
{im:'/assets/bed2.jpg',tex1:'2 Bed',tex2:'SIZE: 1,036.55 SQ.FT. TO 1,757.75 SQ.FT.'},
{im:'/assets/bed3.jpg',tex1:'2 Bed Duplex',tex2:'SIZE: 1,757.74 SQ.FT. TO 2,137.48 SQ.FT.'},
{im:'/assets/bed4.jpg',tex1:'2 Bedroom Triplex',tex2:'SIZE: 2,137.48 SQ.FT.'},
{im:'/assets/bed5.jpg',tex1:"3 Bed",tex2:"SIZE: 1,771.01 SQ.FT. To 1,771.01 SQ.FT"},

  ]
const ima = [
        {
          src: '/assets/797a6fc4ccd08d8da1139bbd3c8a9255b9ac682d (1).jpg',
             title: '',
          subtitle: '',
        }
      ];
const [cloud, setcloud] = useState(false)
const [main, setmain] = useState(false)
const images=[{im:'/assets/1a5f1869b5bf5ea58896fa4d32bb37b4af630f96.jpg',tex1:'1 Bed',tex2:'Size: 2633.68 SQ.FT. To 2682.94 SQ.FT.'},{im:'/assets/d86834808dd262a4f9acfccc932de56679469de9.jpg',tex1:"2 Bed",tex2:'SIZE: 1319 SQ.FT. TO 1328 SQ.FT.'},{im:'/assets/f23ea6b86b2d8f5b9095c62dd771d8000ce47043.jpg',tex1:'Duplex',tex2:'SIZE: 753 SQ.FT. TO 867 SQ.FT'},{im:'/assets/3bf3a024dffe0b0ca1e910dcb38db4fba83970a8.jpg',tex1:'Studio',tex2:'SIZE: 432.42 SQ.FT'},{im:'',tex1:'',tex2:''}]
      
        return (<>
      
      <div className='w-full relative md:h-[600px] h-[400px]'>
              <Header className='nav-menu absolute z-50'/>
                  <Heroslider className={'top-[15%]'} className2={'md:!top-12 xl:!top-8'} textthree={'Empire'} main_im={Hero} className3={'top-2 lg:top-5 md:top-9 xl:top-7'} texttwo={'Estates'} main={true} bottom={'bottom-0  !h-[300px]  md:!h-[700px] !w-[100%]'} cloud={cloud} />
               <Image src={back} className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' />
                </div>
              <div className='bg-[#002E3C]'>
                <Sectiontext className={'md:!h-[600px]'} text={"Empire Estates is a luxury 11-storey project in Arjan, Dubai, offering studios to 3-bedroom apartments, some with private pools. It features premium amenities like a lagoon pool, sky gym, and rooftop lounge." }/>
              <SectionThree />
              <Sectionfour />
                 <Section images={image} />
                 <Places Name={'Empire Estates'}  markers={markers} center_position={[25.0631, 55.2471]} Main_marker={'Empire Estates'} />
                <Icons icons={icons}/>
                 <SectionFive  images={ima} background={false} />
                </div>
                <Footer />
      </>
        )
      }
      
      
   

export default empestates
