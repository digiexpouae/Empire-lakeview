import { useRef, useEffect, useState } from 'react';

export default function PropertyGallerySlider() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const slides = [
    {
      image: '/assets/gardens/g-1.jpg',
      title: 'Modern Kitchen',
      description: 'Contemporary design with premium appliances'
    },
    {
      image: '/assets/gardens/g-2.jpg',
      title: 'Infinity Pool',
      description: 'Stunning rooftop pool with panoramic views'
    },
    {
      image: '/assets/gardens/g-3.jpg',
      title: 'Community Gardens',
      description: 'Lush green spaces and walking paths'
    },
    {
      image: '/assets/gardens/g-4.jpg',
      title: 'Luxury Apartments',
      description: 'Spacious living with modern amenities'
    },
    {
      image: '/assets/gardens/g-5.jpg',
      title: 'Resort Pool',
      description: 'Olympic-sized pool with sunset views'
    },
    {
      image: '/assets/gardens/g-6.jpg',
      title: 'Architectural Excellence',
      description: 'Award-winning contemporary design'
    }
    , {
      image: '/assets/gardens/g-7.jpg',
      title: 'Modern Kitchen',
      description: 'Contemporary design with premium appliances'
    },
    {
      image: '/assets/gardens/g-8.jpg',
      title: 'Infinity Pool',
      description: 'Stunning rooftop pool with panoramic views'
    },
    {
      image: '/assets/gardens/g-9.jpg',
      title: 'Community Gardens',
      description: 'Lush green spaces and walking paths'
    },
    {
      image: '/assets/gardens/g-10.jpg',
      title: 'Luxury Apartments',
      description: 'Spacious living with modern amenities'
    },
    {
      image: '/assets/gardens/g-11.jpg',
      title: 'Resort Pool',
      description: 'Olympic-sized pool with sunset views'
    },
    {
      image: '/assets/gardens/g-12.jpg',
      title: 'Architectural Excellence',
      description: 'Award-winning contemporary design'
    }
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let intervalId;
    let isPaused = false;

    const autoScroll = () => {
      if (!isPaused && !isDragging) {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        const currentScroll = slider.scrollLeft;

        if (currentScroll >= maxScroll - 1) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: slider.clientWidth / 4, behavior: 'smooth' });
        }
      }
    };

    intervalId = setInterval(autoScroll, 4000);

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };



  const downloadFiles = () => {
    const files = [
      'https://empire-lakeview.vercel.app/files/Empire Gardens DLRC - Individual Floor Plans Book.pdf',
      'https://empire-lakeview.vercel.app/files/Empire Gardens DLRC - Typical Floor Plans Book.pdf'
    ];

    files.forEach((file) => {
      const link = document.createElement('a');
      link.href = file;
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div className="  py-4 ">
      <div className="w-full">

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="flex overflow-x-auto gap-5 md:gap-7 py-5 cursor-grab active:cursor-grabbing scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .slide-card::-webkit-scrollbar { display: none; }
          `}</style>
          {[...slides, ...slides].map((slide, index) => (
            <div
              key={index}
              className="slide-card group relative flex-shrink-0 w-64 h-64  md:w-84 md:h-96 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none select-none"
                draggable="false"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 z-10">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                  {slide.title}
                </h3>
                <p className="text-sm opacity-90 drop-shadow-md">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center w-full mt-4'>
          <a
            onClick={downloadFiles}
            className="bg-gradient-to-r from-[#CCAB64] text-center cursor-pointer to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[200px] py-1 rounded-full transition-colors duration-300 text-sm lg:text-base mx-auto md:mx-0 block">
            Download Floor Plan
          </a>


        </div>

      </div>

    </div>
  );
}