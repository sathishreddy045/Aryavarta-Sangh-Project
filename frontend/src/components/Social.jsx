import React, { useState, useEffect } from 'react';
import socialworkIcon from '../assets/socialwork.webp';
import socialImg1 from '../assets/social.webp';

const Social = () => {
    const sliderImages = [socialImg1];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 3000);
        return () => clearTimeout(timer);
    }, [currentIndex, sliderImages.length]);

    return (
        <div className="flex flex-col w-full h-screen">
            <div className="flex items-center justify-center py-8 space-x-3 sm:py-12">
                <img 
                    src={socialworkIcon}
                    alt="social work icon" 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" 
                />
                <h1 className="text-4xl font-bold text-white sm:text-4xl lg:text-5xl">Social Work</h1>
            </div>

            <div className="relative flex-1 w-full overflow-hidden">
                <div 
                    className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {sliderImages.map((imageSrc, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-full">
                            <img src={imageSrc} alt={`Social work slide ${index + 1}`} className="object-cover w-full h-full" />
                        </div>
                    ))}
                </div>
                
                <div className="absolute flex items-center justify-center space-x-2 transform -translate-x-1/2 bottom-6 left-1/2">
                    {sliderImages.map((_, index) => (
                        <div 
                            key={index}
                            className={`transition-all duration-300 rounded-full ${currentIndex === index ? 'w-8 h-3 bg-gray-300' : 'w-3 h-3 bg-gray-600 opacity-70'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Social;