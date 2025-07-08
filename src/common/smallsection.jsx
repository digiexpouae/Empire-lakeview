'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ImageCard from './ImageCard'; // adjust path

const Introducing = ({
  Logo,
  ima,
  logo,
  text1,
  text2,
  links,
  className,
  className1,
  introRef,
  btntext,
  viewprojects,
  overlay,
  intro,
}) => {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const runGsap = async () => {
      const gsap = (await import('gsap')).default;
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
      gsap.registerPlugin(ScrollTrigger);

      const wrapper = wrapperRef.current;
      const container = containerRef.current;
      const slider = sliderRef.current;

      const totalScrollWidth = slider.scrollWidth;
      const containerWidth = container.offsetWidth;
      const scrollDistance = totalScrollWidth - containerWidth;

      const containerHeight = container.offsetHeight;
      wrapper.style.height = `${containerHeight + scrollDistance}px`; // ← dynamic wrapper height

      gsap.fromTo(
        slider,
        { x: 0 },
        {
          x: `-${scrollDistance}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: `+=${scrollDistance}`,
            scrub: true,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        }
      );
    };

    runGsap();

    return () => {
      if (typeof window !== 'undefined') {
        const { ScrollTrigger } = require('gsap/ScrollTrigger');
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className={`w-full overflow-hidden whitespace-nowrap px-4 ${
          overlay ? 'h-[200px] md:!h-[300px]' : 'h-auto'
        } ${className1} flex items-center container relative bg-[#0D1028]`}
      >
        <div
          ref={sliderRef}
          className={`inline-flex ${viewprojects ? 'gap-[20px]' : 'gap-[30px]'} items-center`}
        >
          {/* Text + Logo Block */}
          <div className="shrink-0 flex flex-col items-center justify-center gap-[20px] mb-[20px] md:w-[380px]">
            <span className="text-white">{text1}</span>

            {logo ? (
              <div className="md:h-[80px] md:w-[150px] h-[60px] w-[100px]">
                <Image
                  src={Logo}
                  className="!w-full !h-full"
                  width={150}
                  height={80}
                  alt="Logo"
                />
              </div>
            ) : (
              <div>
                <h3 className="text-[15px] md:text-[25px] text-center my-heading leading-6 text-white font-medium">
                  Successfully <br /> Delivered
                </h3>
              </div>
            )}

            {logo ? (
              <a
                href="/files/03 - Fact Sheet - Empire LakeViews (4).pdf"
                download
                className="button !py-[5px] !w-[170px] !text-[15px] flex items-center justify-center"
              >
                {btntext}
              </a>
            ) : (
              <a
                href={links}
                className="button !py-[5px] !w-[90px] md:!w-[170px] !text-[9px] md:!text-[15px] cursor-pointer flex items-center justify-center"
              >
                {btntext}
              </a>
            )}
          </div>

          {/* Image Blocks */}
          {ima.map((elem, index) =>
            viewprojects ? (
              <ViewProjectCard
                key={index}
                elem={elem}
                className={className}
                overlay={overlay}
                intro={intro}
              />
            ) : (
              <ImageCard
                key={index}
                elem={elem}
                index={index}
                className={className}
                overlay={overlay}
                intro={intro}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Introducing;
