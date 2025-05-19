 'use client';
import React from 'react' 
import { useState } from 'react';
import Image from 'next/image';



const sectionfour = () => {
 // data/amenities.js
 const amenities = [
  {
    name: 'Lagoon-Style Swimming Pool',
    icon: '/assets/Group1.png',
    image: '/assets/b04ad572115c3ef55b1422dbcbd8ed244b4024b6.jpg',
  },
  {
    name: 'Sky Gym',
    icon: '/assets/Group2.png',
    image: '/assets/479e86e027bcfa868462b280d97916e9e186aa17.jpg',
  },
  {
    name: 'Paddle Tennis Court',
    icon: '/assets/Group3.png',
    image: '/assets/1e0ac513a6b5ba10e574d4705bcee20e362b83de.jpg',
  },
  {
    name: 'Rooftop Lounge',
    icon: '/assets/Group4.png',
    image: '/assets/a5b3957fa99a6f078c663489685327f9b08d6c0d.jpg',
  },
  {
    name: 'Smart Home Features',
    icon: '/assets/Group5.png',
    image: '/assets/795ddf9c5169799867c059647a5c7d745de0ffb5.jpg',
  },
];


  const [activeImage, setActiveImage] = useState(amenities[0].image);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-20  md:gap-40 md:h-[700px] text-white p-6 rounded-xl max-w-6xl mx-auto">
      {/* Text Column */}
      <div className="w-full md:w-[40%] space-y-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-[60px] lg:text-[95px] font-medium mb-5 md:mb-12">Aminities</h2>
        <ul className="space-y-6">
          {amenities.map((item, i) => (
            <li
              key={i}
              className="flex items-center space-x-3 cursor-pointer group"
              onMouseEnter={() => setActiveImage(item.image)}
            >
              <Image src={item.icon} alt={item.name} width={54} height={54} />
              <span className="md:text-[23px]  group-hover: transition">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Column */}
      <div className="w-full md:w-[35%] mt-6 md:mt-0">
        <Image
          src={activeImage}
          alt="Amenity Preview"
          width={400}
          height={600}
          className="rounded-xl object-cover w-full h-[300px] md:h-[450px] transition duration-300"
        />
      </div>
    </section>
  );
}



export default sectionfour;
