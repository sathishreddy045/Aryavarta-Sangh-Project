import React from "react";
import aboutImg from "../assets/about-img.jpeg";

const About = () => {
    return (
        <div className="flex items-center w-full min-h-screen text-white">
            <div className="flex flex-col justify-center w-full p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 md:w-1/2">
                <h2 className="text-lg font-bold leading-tight text-orange-500 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    मैं मनचाहा साम्राज्य बनाने निकला हूँ,<br /> 
                    कुर्बानियां देने में जरा भी कतराऊंगा नहीं!
                </h2>
                <button className="self-start px-4 py-2 mt-4 text-sm font-semibold text-black transition-colors bg-orange-500 rounded-full sm:px-6 sm:py-3 sm:mt-6 md:mt-8 lg:px-8 hover:bg-orange-600">
                    Read More!
                </button>
            </div>
            
            <div className="hidden w-1/2 h-screen md:block">
                <img 
                    src={aboutImg} 
                    alt="About" 
                    className="object-cover w-full h-full" 
                />
            </div>
            
            <div className="w-1/2 h-screen md:hidden">
                <img 
                    src={aboutImg} 
                    alt="About" 
                    className="object-cover w-full h-full" 
                />
            </div>
        </div>
    )
}

export default About;