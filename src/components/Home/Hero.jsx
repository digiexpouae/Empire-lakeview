"use client"


import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
// import posterImage from "../../../public/assets/homebg.png";
// import Logo from "../../../public/assets/logo2.png"; 

const LAND_VIDEO_PATH = "/assets/video.mp4";
const PORT_VIDEO_PATH = "/assets/video.mp4";
const POSTER_IMAGE_PATH = "/assets/homebg.png";
const LOGO_PATH = "/assets/logo2.png";

export default function Section1() {
  const [videoSrc, setVideoSrc] = useState(LAND_VIDEO_PATH);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
      setVideoSrc(isMobile ? PORT_VIDEO_PATH : LAND_VIDEO_PATH);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Re-check on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleVideoReady = () => {
    setVideoReady(true);
  };

  return (
    <section className="w-full h-screen relative">
      {/* Show image until video is ready */}
      {!videoReady && (
        <img
          src={POSTER_IMAGE_PATH}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ transition: "opacity 0.5s" }}
        />
      )}

      {/* Video */}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 ${videoReady ? "opacity-100" : "opacity-0"}`}
        src={videoSrc}
        poster={POSTER_IMAGE_PATH}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={handleVideoReady}
      />

      {/* Centered SVG Logo
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img src={LOGO_PATH} alt="Logo" className="w-52 md:w-80 h-auto" />
      </div> */}
    </section>
  );
}
