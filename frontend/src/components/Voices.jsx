import React from "react";
import microphoneIcon from "../assets/Microphone.webp";

const Voices = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 overflow-hidden text-white">
            <div className="flex items-center justify-center mb-8 space-x-3">
                <img 
                    src={microphoneIcon} 
                    alt="microphone" 
                    className="w-8 h-10 sm:w-10 sm:h-12" 
                />
                <h1 className="text-4xl font-bold sm:text-4xl lg:text-5xl">Voices</h1>
            </div>

            <div className="relative flex items-center justify-center w-full mx-auto max-w-7xl">
                <div className="absolute z-10 hidden cursor-pointer -left-12 lg:block xl:-left-16">
                    <svg 
                        className="w-8 h-8 text-gray-600 transition-colors hover:text-white lg:w-10 lg:h-10" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </div>

                <div className="flex justify-center w-full px-2 space-x-3 overflow-x-auto sm:px-4 lg:px-0 lg:space-x-8 lg:overflow-visible snap-x snap-mandatory scrollbar-hide">
                    <div className="flex-shrink-0 w-56 h-56 bg-gray-200 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-3xl snap-center"></div>
                    
                    <div className="flex-shrink-0 w-56 h-56 bg-gray-200 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-3xl snap-center"></div>
                    
                    <div className="flex-shrink-0 w-56 h-56 bg-gray-200 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-3xl snap-center"></div>
                </div>

                <div className="absolute z-10 hidden cursor-pointer -right-12 lg:block xl:-right-16">
                    <svg 
                        className="w-8 h-8 text-gray-600 transition-colors hover:text-white lg:w-10 lg:h-10" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default Voices;