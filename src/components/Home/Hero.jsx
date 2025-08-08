"use client"

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const LAND_VIDEO_PATH = "/assets/newdesktop.mp4";
const PORT_VIDEO_PATH = "/assets/newmobile.mp4";
const POSTER_IMAGE_PATH = "/assets/fallback.png";

export default function Section1() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobileCheck = window.innerWidth < 768;
      setIsMobile(mobileCheck);
      setVideoSrc(mobileCheck ? PORT_VIDEO_PATH : LAND_VIDEO_PATH);
    };

    // Initial check
    checkMobile();

    // Debounce resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkMobile, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const handleVideoLoad = () => {
    setIsLoaded(true);
    // Start playback if it's not already playing
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  };

  return (
    <section className="w-full pt-20 h-screen relative overflow-hidden">
      {/* Fallback image - shows immediately and fades out when video loads */}
      <div className={`absolute  inset-0 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
        <Image
          src={POSTER_IMAGE_PATH}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Video element - only rendered when we know which source to use */}
      {videoSrc && (
        <video
          ref={videoRef}

          key={videoSrc}
          className={`absolute inset-0 pt-20 w-full h-[120vh] object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
          onCanPlayThrough={handleVideoLoad}
          onError={() => console.error("Video loading failed")}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </section>
  );
}