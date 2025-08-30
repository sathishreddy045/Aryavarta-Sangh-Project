import React, { useState, useEffect } from 'react';
import newsIcon from '../assets/news.webp';

const NewsCard = ({ images, paginationPosition, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images && images.length > 0) {
            const timer = setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, images]);

    return (
        <div className={`relative w-full h-full bg-gray-200 rounded-2xl overflow-hidden ${className}`}>
            <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images && images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full bg-gray-200">
                    </div>
                ))}
            </div>
            <div className={`absolute flex ${paginationPosition}`}>
                {images && images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

const News = () => {
    const placeholderImages = [1, 2, 3];

    return (
        <div className="flex flex-col w-full min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="flex items-center justify-center mb-6 space-x-3 sm:mb-8">
                <img 
                    src={newsIcon} 
                    alt="News Icon" 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                />
                <h1 className="text-4xl font-bold text-white sm:text-4xl lg:text-5xl">News room</h1>
            </div>

            <div className="grid flex-1 w-full grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-3 md:grid-rows-2">
                <div className="md:col-span-1 md:row-span-2 min-h-[400px]">
                    <NewsCard images={placeholderImages} paginationPosition="bottom-4 left-1/2 -translate-x-1/2 space-x-1.5" />
                </div>
                <div className="md:col-span-2 md:row-span-1 min-h-[200px]">
                    <NewsCard images={placeholderImages} paginationPosition="top-4 right-4 flex-col space-y-1.5" />
                </div>
                <div className="md:col-span-2 md:row-span-1 min-h-[200px]">
                    <NewsCard images={placeholderImages} paginationPosition="bottom-4 left-4 space-x-1.5" />
                </div>
            </div>
        </div>
    );
};

export default News;