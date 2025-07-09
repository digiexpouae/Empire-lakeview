'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    logo: '/assets/cardlogo.jpg',
    location: 'LIWAN',
    description:
      'Liwan homes by Empire Development feature open layouts and high-end finishes. In Premium Residences, Liwan residents enjoy a modern lifestyle. It’s a peaceful and eco-friendly place. Empire Lakeview by Empire Development is great for Liwan, Dubai property investment, or Dubai real estate investments.',
    image: '/assets/slider/lakeview.png',
    href: '/lakeviews',
  },
  {
    logo: '/assets/cardlogo3.png',
    location: 'DUBAI',
    description:
      'Empire Development offers apartments for sale in Dubai in Jumeirah Village. This prime location makes life easier. It also offers great opportunities for real estate investment in Dubai. Empire Development apartments are ideal for anyone seeking a spacious and stylish home. These apartments also feature modern tech automation. It’s a great chance to buy luxury homes in Dubai. ',
    image: '/assets/slider/living.png',
    href: '/EMPliving',
  },
  {
    logo: '/assets/cardlogo2.jpg',
    location: 'JVC',
    description:
      'Empire Estate by Empire Development has set a new standard for luxury living in Dubai. This project offers high-end residences in Dubai. It includes many top-notch amenities. Empire Development homes blend comfort, smart features, and stylish design. This project is among the top luxury residential projects in Dubai.',
    image: '/assets/slider/estate.png',
    href: '/EMPEstates',
  },
];

const LatestProjects = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([gsapModule, ScrollTriggerModule]) => {
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule;

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.normalizeScroll(true);

      const checkMobile = () => window.innerWidth < 768;
      const mobile = checkMobile();
      setIsMobile(mobile);


      const setupScrollTrigger = () => {
        const sections = gsap.utils.toArray('.project-card');
        const container = containerRef.current;
        const slider = sliderRef.current;

        if (!container || !slider) return;

        const getTotalWidth = () => {
          const gap = 20;
          return sections.reduce((total, section) => {
            return total + section.offsetWidth + gap;
          }, 0) - gap;
        };

        gsap.set(slider, {
          width: getTotalWidth(),
          x: 0
        });

        const totalScrollWidth = getTotalWidth();
        const containerWidth = container.offsetWidth;
        const scrollDistance = Math.max(0, totalScrollWidth - containerWidth);
const disance = scrollDistance + 10;
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        animationRef.current = gsap.to(slider, {
          x: -disance,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            pinSpacing: true,
            start: 'center center',
            end: () => `+=${scrollDistance + (window.innerWidth * 0.4)}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (self.direction === -1 && self.progress < 0.01) {
                slider.style.transform = 'translateX(0px)';
              } else if (self.direction === 1 && self.progress > 0.99) {
                slider.style.transform = `translateX(-${scrollDistance}px)`;
              }
            }
          }
        });

        const onResize = () => {
          const newMobile = checkMobile();
          if (newMobile !== mobile) {
            window.location.reload();
            return;
          }

          gsap.set(slider, { width: getTotalWidth() });
          if (animationRef.current?.scrollTrigger) {
            animationRef.current.scrollTrigger.refresh();
          }
        };

        window.addEventListener('resize', onResize);
        return () => {
          window.removeEventListener('resize', onResize);
          if (animationRef.current) {
            animationRef.current.kill();
            animationRef.current.scrollTrigger?.kill();
          }
        };
      };

      const images = containerRef.current?.querySelectorAll('img');
      if (images?.length > 0) {
        Promise.all(
          Array.from(images).map(
            img =>
              new Promise(resolve => {
                if (img.complete) resolve();
                else img.onload = resolve;
              })
          )
        ).then(setupScrollTrigger);
      } else {
        setupScrollTrigger();
      }
    });
  }, []);

  return (
    <section className="bg-[#0D1028] py-10 md:py-16">
      <h2 className="text-white text-[30px] md:text-[60px] font-bold text-center mb-8 md:mb-12 px-4">
        Our Latest Projects
      </h2>
      <div ref={containerRef} className="relative min-h-[70vh] w-full">
        <div className="h-[calc(90vh-100px)] md:h-[80vh] w-full overflow-hidden">
        <div ref={sliderRef} className="h-full flex items-center px-3 md:px-4 gap-4 md:gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-2xl p-4 md:p-6 w-[85vw] md:w-[580px] h-auto max-h-[80vh] shrink-0 shadow-xl flex flex-col"
            >
              <div className="flex flex-col item h-full">
                {/* Header with Logo and Button */}
                <div className="flex-shrink-0 mb-2 md:mb-4">
                  <div className="flex justify-between items-center">
                    <div className="relative w-14 h-14 md:w-28 md:h-28">
                      <Image
                        src={project.logo}
                        alt="Logo"
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <Link href={project.href} passHref legacyBehavior>
                      <a className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] text-black text-xs md:text-sm rounded-full font-semibold hover:scale-105 transition whitespace-nowrap flex items-center justify-center" target="_self">
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 mb-3 md:mb-4">
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed pr-2 line-clamp-5">
                    {project.description}
                  </p>
                </div>

                {/* Project Image */}
                <div className="w-full h-[180px] relative rounded-xl overflow-hidden bg-gray-50 mt-auto">
                  <Image
                    src={project.image}
                    alt={project.location}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, 580px"
                    priority={index < 2}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default LatestProjects;
