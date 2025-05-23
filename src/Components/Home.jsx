import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import fourthImage from '../assets/fourth.jpg';
import secondImage from '../assets/second.jpg';
import thirdImage from '../assets/third.jpg';
import firstImage from '../assets/first.jpg';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [fourthImage, secondImage, thirdImage, firstImage];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full h-[900px] sm:h-[450px] md:h-[450px] lg:h-[450px] -mt-4 overflow-hidden mx-auto">
      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="w-screen h-full object-cover"
      />
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1 z-10">
        <button
          onClick={prevSlide}
          className="bg-white bg-opacity-70 text-black text-xl p-2 rounded-full shadow hover:bg-opacity-90"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white bg-opacity-70 text-black text-xl p-2 rounded-full shadow hover:bg-opacity-90"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Home;
