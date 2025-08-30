import React from "react";
import logo from "../assets/logo.png";
import left from "../assets/left-bg.jpg";
import right from "../assets/right-bg.jpg";
import whiteSmoke from "../assets/white smoke.png";
import whiteShadow from "../assets/white-shadow.png";
import twitterLogo from "../assets/x.png";
import instagramLogo from "../assets/insta.webp";
import facebookLogo from "../assets/facebook.jpeg";
import youtubeLogo from "../assets/youtube.png";

const Hero = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
            <img src={whiteShadow} alt="spotlight" className="absolute top-0 z-10 w-full opacity-70 md:w-3/4" />
            <img src={whiteSmoke} alt="smoke effect" className="absolute z-30 block w-full opacity-100 -bottom-2" />
            
<img 
  src={left} 
  alt="left-pic" 
  className="absolute z-0 w-[38%] md:w-[30%] left-5 top-10 md:top-24"
/>

<img 
  src={right} 
  alt="right-pic" 
  className="absolute right-0 z-0 w-[38%] md:w-[30%] top-10 md:top-24"
/>

            
<img 
  src={logo} 
  alt="logo" 
  className="relative z-20 w-48 sm:w-64 lg:w-80 top-8 md:top-12"
/>

            
<div className="absolute z-40 w-full px-4 -translate-x-1/2 bottom-10 left-1/2">
  <div className="flex flex-col items-center w-full max-w-6xl mx-auto space-y-4 sm:flex-row sm:justify-between sm:space-y-0 sm:space-x-0">
    
    <div className="flex space-x-6">
      <a 
        href="#" 
        className="flex items-center justify-center w-full max-w-xs px-6 py-2 space-x-3 font-semibold text-black transition bg-white rounded-full sm:w-auto hover:bg-gray-100"
      >
        <img src={twitterLogo} alt="Twitter" className="w-7 h-7" />
        <span>Twitter</span>
      </a>

      <a 
        href="#" 
        className="flex items-center justify-center w-full max-w-xs px-6 py-2 space-x-3 font-semibold text-black transition bg-white rounded-full sm:w-auto hover:bg-gray-100"
      >
        <img src={instagramLogo} alt="Instagram" className="w-7 h-7" />
        <span>Instagram</span>
      </a>
    </div>

    <div className="flex space-x-6">
      <a 
        href="#" 
        className="flex items-center justify-center w-full max-w-xs px-6 py-2 space-x-3 font-semibold text-black transition bg-white rounded-full sm:w-auto hover:bg-gray-100"
      >
        <img src={facebookLogo} alt="Facebook" className="w-7 h-7" />
        <span>Facebook</span>
      </a>

      <a 
        href="#" 
        className="flex items-center justify-center w-full max-w-xs px-6 py-2 space-x-3 font-semibold text-black transition bg-white rounded-full sm:w-auto hover:bg-gray-100"
      >
        <img src={youtubeLogo} alt="YouTube" className="w-7 h-7" />
        <span>YouTube</span>
      </a>
    </div>

  </div>
</div>

        </div>
    )
}

export default Hero;