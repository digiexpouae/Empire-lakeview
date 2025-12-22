'use client'
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const SectionThree = () => {
  const container = useRef()
  const scrollRef = useRef()

  const galleryItems = [
    { src: '/assets/living1.webp', className: 'mt-20 w-[22%] h-[110px] md:h-[190px] lg:h-[290px]', imgClass: 'object-center' },
    { src: '/assets/living16.webp', className: 'w-[22%] h-[120px] md:h-[200px] lg:h-[280px]' },
    { src: '/assets/living4.webp', className: 'w-[22%] h-[90px] md:h-[170px] lg:h-[250px] mt-16' },
    { src: '/assets/living5.webp', className: 'w-[22%] h-[120px] md:h-[200px] lg:h-[290px]' },
    { src: '/assets/living6.webp', className: 'w-[22%] h-[100px] md:h-[180px] lg:h-[260px] -mt-2 md:-mt-10' },
    { src: '/assets/living7.webp', className: 'w-[22%] h-[140px] md:h-[270px] lg:h-[350px] -mt-10 md:-mt-10 lg:-mt-12' },
    { src: '/assets/living9.webp', className: 'w-[22%] h-[80px] md:h-[160px] lg:h-[240px] -mt-12 md:-mt-30' },
    { src: '/assets/living10.webp', className: 'w-[22%] h-[120px] md:h-[200px] lg:h-[290px] -mt-16 md:-mt-24' },
    { src: '/assets/living11.webp', className: 'w-[22%] h-[140px] md:h-[270px] lg:h-[350px] -mt-2 md:-mt-12 lg:-mt-10' },
    { src: '/assets/living13.webp', className: 'w-[22%] h-[100px] md:h-[180px] lg:h-[260px] md:-mt-28 lg:-mt-12' },
    { src: '/assets/living17.webp', className: 'w-[22%] h-[60px] md:h-[140px] lg:h-[320px] -mt-32 md:-mt-70 lg:-mt-42' },
    { src: '/assets/living15.webp', className: 'w-[22%] h-[100px] md:h-[180px] lg:h-[260px] -mt-16 md:-mt-38' },
    { src: '/assets/living2.webp', className: 'w-[22%] h-[140px] md:h-[270px] lg:h-[350px]' },
    { src: '/assets/livng3.webp', className: 'w-[22%] h-[90px] md:h-[170px] lg:h-[250px] -mt-20 md:-mt-84 lg:-mt-46' },
    { src: '/assets/living.jpg', className: 'w-[22%] h-[140px] md:h-[270px] lg:h-[350px] lg:-mt-38 md:-mt-90 -mt-40' },
    { src: '/assets/empirelivin (16).jpg', className: 'w-[22%] h-[140px] md:h-[270px] lg:h-[350px] -mt-20 md:-mt-52' },
    { src: '/assets/living4.webp', className: 'w-[22%] h-[90px] md:h-[170px] lg:h-[250px] -mt-4 md:-mt-2' },
    { src: '/assets/living17.webp', className: 'w-[22%] h-[140px] md:h-[270px] lg:h-[350px] -mt-16 md:-mt-84 lg:-mt-54' },
    { src: '/assets/living10.webp', className: 'w-[22%] h-[140px] md:h-[270px] lg:h-[350px] -mt-26 md:-mt-65 lg:-mt-18' },
    { src: '/assets/living16.webp', className: 'w-[22%] h-[140px] md:h-[270px] lg:h-[350px] -mt-8 md:-mt-24' },
    { src: '/assets/living12.webp', className: 'w-[22%] h-[120px] md:h-[200px] lg:h-[290px]' },
    {
      type: 'download',
      containerClass: 'flex flex-col items-center w-[45%]',
      imageSrc: '/assets/027c45cd5e3cbdca981eddff217b55b3ddc776c2.webp',
      imageContainerClass: 'w-[90%] h-[120px] md:h-[150px] -mt-8',
      link: '/files/Empire Livings - Floor Plan (3).pdf',
      label: 'Download Floor Plans'
    },
    { src: '/assets/ep.jpg', className: 'w-[22%] h-[120px] md:h-[180px] lg:h-[260px]' }
  ]

  useLayoutEffect(() => {
    if (!scrollRef.current || !container.current) return;

    let ctx;
    let mm;

    import("gsap").then((gsapModule) => {
      import("gsap/ScrollTrigger").then((scrollTriggerModule) => {
        const gsap = gsapModule.default;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.normalizeScroll(true);
        mm = gsap.matchMedia();
        ctx = gsap.context(() => {
          const scrollEl = scrollRef.current;
          const scrollHeight = scrollEl.scrollHeight;
          const containerHeight = container.current.offsetHeight;
          const scrollDistance = scrollHeight - containerHeight;
          const ending = scrollDistance + 1000;

          mm.add("(min-width: 1024px)", () => {
            // Reset scrollTop initially
            scrollEl.scrollTop = 0;

            gsap.to(scrollEl, {
              scrollTop: ending,
              ease: "none",
              scrollTrigger: {
                trigger: container.current,
                start: "center center",
                end: `+=${ending}`,
                scrub: true,
                pin: true,
                pinType: "fixed",
                pinSpacing: true,
                onLeave: () => {
                  container.current.style.position = "relative";
                },
              },
            });
          });
        });
      });
    });

    return () => {
      if (ctx?.kill) ctx.kill();
      if (mm?.revert) mm.revert();
    };
  }, [container]);

  return (
    <div className='flex flex-col items-center justify-center w-full text-center h-auto lg:h-[100vh] z-[10] relative' ref={container} style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}>
      <h1 className='text-[45px] lg:text-[100px] my-heading text-white font-bold' style={{ transform: 'translate3d(0,0,0)' }}>Envision Your Legacy
      </h1>
      <div className='w-full h-auto lg:h-screen overflow-hidden scrollbar-hide flex flex-col items-center justify-center' ref={scrollRef} style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}>
        <div className='w-[90%] md:w-[80%] h-full flex items-center justify-center' style={{ transform: 'translate3d(0,0,0)' }}>
          <div className='columns-4 flex flex-wrap h-full m-auto items-center justify-center gap-3' style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', perspective: '1000px' }}>
            {galleryItems.map((item, index) => (
              item.type === 'download' ? (
                <div key={index} className={item.containerClass} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}>
                  <div className={item.imageContainerClass} style={{ transform: 'translate3d(0,0,0)' }}>
                    <Image src={item.imageSrc} className='!h-full !w-full rounded-3xl object-contain' style={{ transform: 'translate3d(0,0,0)' }} alt="Floor Plan" width={1000} height={1000} />
                  </div>
                  <a
                    href={item.link}
                    download
                    className="h-[30px] md:h-auto cursor-pointer flex items-center justify-center bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[120px] md:w-[180px] lg:px-2 py-1 rounded-full transition-colors duration-300 transform text-[9px] md:text-sm lg:text-base whitespace-nowrap"
                    style={{ transform: 'translate3d(0,0,0)' }}
                  >
                    {item.label}
                  </a>
                </div>
              ) : (
                <div key={index} className={item.className} style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}>
                  <Image loading="lazy" src={item.src} className={`!h-full !w-full rounded-3xl object-cover ${item.imgClass || ''}`} style={{ transform: 'translate3d(0,0,0)' }} alt={`Gallery image ${index}`} width={1000} height={1000} />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      <div className='absolute left-0 right-0 bottom-0 w-full md:h-[50px] lg:h-[50px]' style={{ background: 'linear-gradient(180deg, rgba(0, 46, 60, 0) 50%, #0E1527 97%)', transform: 'translate3d(0,0,0)' }}></div>
    </div>
  )
}

export default SectionThree