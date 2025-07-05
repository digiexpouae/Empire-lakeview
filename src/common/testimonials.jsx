'use client';

import React from 'react';
import Testimonial from '../components/swiperslider';

const testimonials = () => {
  const testimonial = [
    {
      text: "I've never been so excited about spices until I discovered . Their spices have transformed my home cooking. The flavors are bold, authentic, and just what I need to create restaurant-quality meals. It's like having a spice bazaar right in my kitchen!",
      name: 'Emily P.',
      image: '/assets/testi2.png',
      role: 'House Wife',
    },
    {
      text: "I've never been so excited about spices until I discovered . Their spices have transformed my home cooking. The flavors are bold, authentic, and just what I need to create restaurant-quality meals. It's like having a spice bazaar right in my kitchen!",
      name: 'Emily P.',
      image: '/assets/testi2.png',
      role: 'House Wife',
    },
    {
      text: "I've never been so excited about spices until I discovered . Their spices have transformed my home cooking. The flavors are bold, authentic, and just what I need to create restaurant-quality meals. It's like having a spice bazaar right in my kitchen!",
      name: 'Emily P.',
      image: '/assets/testi2.png',
      role: 'House Wife',
    },
  ];

  return (
    <div className="w-full py-16 px-4 flex items-center justify-center">
      <div
        className="rounded-2xl w-full  max-w-5xl px-6 md:py-10 flex items-center justify-center shadow-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/testbg.png')", // replace with your image
        }}
      >
        <div className="bg-transparent p-4 justify-center rounded-xl w-full">
          <Testimonial testimonial={testimonial} />
        </div>
      </div>
    </div>
  );
};

export default testimonials;
