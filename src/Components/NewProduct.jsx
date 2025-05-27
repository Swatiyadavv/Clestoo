import React from 'react';
import img from '../assets/NewProduct.jpg';
import { useNavigate } from 'react-router-dom';

function NewProduct() {
  const navigate =  useNavigate();
  const handleupcome = (e)=>
  {
       e.preventDefault();
        navigate('/Upcoming')
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-200">
      <div className="text-center">
        <h1 className="font-bold text-purple-600 text-2xl mb-4">NEW PRODUCT</h1>
        <img
          src={img}
          alt="New Product"
          className="w-full h-auto max-w-md mx-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-purple-700 text-2xl">Our new Clesto product will update soon.</p>
        <button onClick={handleupcome}
         className=' text-black border border-black rounded-md px-2 py-3 hover:bg-purple-200'>Upcoming</button>
      </div>
    </div>
  );
}
export default NewProduct;
