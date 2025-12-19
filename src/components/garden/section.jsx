import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image'
export default function PropertyShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { number: '13', label: 'Residential', sublabel: 'Floors' },
    { number: '221', label: 'Total', sublabel: 'Apartments' },
    { number: '50', label: 'Studios', sublabel: 'With Pool' },
    { number: '3', label: 'Parking', sublabel: 'Floors' }
  ];

  return (
    <div className="min-h-screen py-12 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Main Container with Border Effect */}
        <div className="relative p-[3px] rounded-lg">
          <div className="rounded-lg overflow-hidden">
            
            {/* Header Section */}
            <div className=" md:px-8 px-4 py-10 ">
              <h1 className="text-4xl md:text-6xl font-semibold text-white text-center leading-[1.2]">
                A Concrete Rise In The<br />
                City's Finest Selling
              </h1>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto gap-6 mt-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center relative">
                  
                    <div className="text-4xl md:text-5xl font-semibold bg-gradient-to-r   bg-[linear-gradient(90deg,#CCAB64_0%,#FAECC9_100%)]  bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-white text-lg font-medium mt-2">{stat.label}</div>
                    <div className="text-white text-lg ">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video/Image Section */}
            <div className="relative aspect-video rounded-lg ">
              {/* <Image
                src="/assets/gardens/rise.jpg"
                alt="Luxury rooftop terrace"
                width={800}
                height={675}
                className="w-full h-full object-cover rounded-lg"
              />
              */}

<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="rounded-lg"
>
  <source
    src="/assets/Empire Garden Teaser 02 Hor.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>


              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Play Button */}
              

           
            </div>

          </div>
        </div>

        {/* Additional Info Below */}
       
      </div>
    </div>
  );
}