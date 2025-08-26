import React, { useEffect, useState } from "react";
import Image from "next/image";

const BrandPillars = () => {
  const icons = [
    {
      src: "/assets/craftsmanship.png",
      alt: "Craftsmanship",
      label: 'Masterful Craftsmanship',
      defining_label:'Precision in every detail, creating enduring landmarks.',
      width: 50,
      height: 50,
    },
    {
      src: "/assets/design.png",
      alt: "Signature Design",
      label: "Signature Design",
      width: 50,
      height: 50,
      defining_label:'Distinctive spaces that embody style, purpose, and innovation.',
    },
    {
      src: "/assets/quality.png",
      alt: "Uncompromising Quality",
      label: "Uncompromising Quality",
      width: 50,
      height: 50,
      defining_label:'Delivering standards that endure and define prestige.'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % icons.length);
    }, 1000); // 1 second interval

    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <section
      className="py-12 px-6 md:px-16"
      style={{
        background: "linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-center gap-6">
        {/* Left Text */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-1">
            The Brand Pillars
          </h2>
          <p className="text-md text-gray-800">A Legacy Built on Core Values</p>
          <small className="text-[9px] leading-[0.5]">Our foundation is built on three defining pillars that set Empire apart</small>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex gap-10 md:gap-8 flex-wrap md:flex-nowrap">
          {icons.map((icon, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={45}
                height={45}

                className="mb-2 !h-[45px] !w-[45px] "
              />
              <p className="text-base font-medium md:text-[12px] lg:text-auto text-gray-900 " style={{whiteSpace:'nowrap'}} >
                {icon.label}
              </p>
              <small className="text-[9px] hidden md:block ">{icon.defining_label}</small>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="flex flex-col items-center md:hidden justify-center">
          <div className="flex flex-col h-[90px]  items-center text-center transition-all duration-500 ease-in-out">
            <Image
              src={icons[currentIndex].src}
              alt={icons[currentIndex].alt}
              width={icons[currentIndex].width}
              height={icons[currentIndex].height}
              className="mb-2"
            />
            <p className="text-base font-medium text-gray-900">
              {icons[currentIndex].label}
            </p>
          

          </div>
          <small className="text-[9px]  ">{icons[currentIndex].defining_label}</small>
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;
