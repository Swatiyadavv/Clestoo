import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import west from '../assets/shm1.jpg';
import nike from '../assets/shm2.jpg';

const products = [
  {
    id: 1,
    title: 'SHAMPOO',
    description: 'Ginger with sea',
    image: west,
    bgColor: 'bg-gradient-to-r from-indigo-200 to-indigo-400',
  },
  {
    id: 2,
    title: 'SHAMPOO',
    description: 'Canola Oil With Passion Fruit',
    image: nike,
    bgColor: 'bg-gradient-to-r from-red-200 to-red-400',
  },
  
];
const MoveCarousel = () => {
const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const product = products[currentIndex];

  return (
    <div className={`${product.bgColor} w-full py-12 transition-colors duration-500`}>
      <div className="px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-bold text-black-900 text-7xl mb-2">{product.title}</h3>
                <p className="text-black-700 mb-4 text-4xl">{product.description}</p>
                {/* <button className="px-8 py-4 border border-blue-950 rounded-4xl hover:bg-blue-700 text-blue-700 hover:text-white transition">
                  View Product
                </button> */}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-96 h-96 object-cover rounded-full shadow-lg transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoveCarousel;
