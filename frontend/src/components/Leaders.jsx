import React, { useState } from "react";
import childImg from "../assets/kid.png";
import flagImg from "../assets/flag.webp";
import carpetImg from "../assets/carpet.png";
import leaderImg1 from "../assets/shivaji.jpeg";
import leaderImg2 from "../assets/bhagath.jpeg";
import leaderImg3 from "../assets/subash.jpeg";
import leaderImg4 from "../assets/sardar.jpeg";
import leaderImg5 from "../assets/azad.jpeg";
import starImg from "../assets/star.png";

const Leaders = () => {
  const images = [leaderImg1, leaderImg2, leaderImg3, leaderImg4, leaderImg5];
  const [current, setCurrent] = useState(1);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen overflow-hidden text-white">
      <div className="flex items-center mt-8 space-x-4">
      <img src={starImg} alt="Star" className="w-8 h-8" />
        <h1 className="text-4xl font-bold">Leaders</h1>
      </div>

      <div className="flex mt-2 space-x-1">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === current ? "bg-gray-500" : "bg-gray-700"
            }`}
          ></span>
        ))}
      </div>

      <div className="relative flex items-center justify-center flex-grow w-full mt-8">
        <div
          onClick={prevSlide}
          className="absolute z-30 -translate-y-1/2 cursor-pointer left-3 sm:left-8 top-1/2 bottom-16"
        >
          <svg
            className="w-8 h-8 text-gray-400 hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </div>

        <div
          className="flex justify-center w-full max-w-7xl h-[60vh] relative bottom-16"
          style={{ perspective: "1200px" }}
        >
          {images.map((img, i) => {
            let position = (i - current + images.length) % images.length;

            let style = {};
            if (position === 0) {
              style = {
                transform: "translateX(0) scale(1)",
                zIndex: 10,
                boxShadow: "0px 0px 50px rgba(0,0,0,0.5)",
              };
            } else if (position === 1) {
              style = {
                transform: "rotateY(-25deg) translateX(100%) scale(0.9)",
                transformOrigin: "center left",
                zIndex: 5,
                boxShadow: "10px 0px 30px rgba(0,0,0,0.5)",
              };
            } else if (position === images.length - 1) {
              style = {
                transform: "rotateY(25deg) translateX(-100%) scale(0.9)",
                transformOrigin: "center right",
                zIndex: 5,
                boxShadow: "-10px 0px 30px rgba(0,0,0,0.5)",
              };
            } else {
              style = {
                transform: "scale(0)",
                opacity: 0,
                zIndex: 0,
              };
            }

            return (
              <div
                key={i}
                className="absolute w-[32%] h-full rounded-3xl overflow-hidden transition-all duration-700"
                style={style}
              >
                <img
                  src={img}
                  alt={`Leader ${i}`}
                  className="object-cover w-full h-full"
                />
              </div>
            );
          })}
        </div>

        <div
          onClick={nextSlide}
          className="absolute z-30 -translate-y-1/2 cursor-pointer right-3 sm:right-8 top-1/2 bottom-16"
        >
          <svg
            className="w-8 h-8 text-gray-400 hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>

      <div className="absolute flex flex-col items-center bottom-8">
        <div className="relative w-40 md:w-56">
          <img src={carpetImg} alt="Carpet" className="z-20 w-full" />
          <img
            src={childImg}
            alt="Child"
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] z-20"
          />
          <img
            src={flagImg}
            alt="Indian Flag"
            className="absolute bottom-[50%] right-[6%] w-10 md:w-24 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Leaders;