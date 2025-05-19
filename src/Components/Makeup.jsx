import React from 'react';
import OIP from '../assets/OIP.jpg';
import Makeupp from '../assets/Makeup.jpg';

function Makeup() {
  return (
    <div className='grid grid-cols-1 gap-8 p-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
        <div className='flex justify-center'>
          <img src={OIP} alt='Clesto Face Wash' className='w-full h-150 object-cover rounded-md shadow-md ' />
        </div>
        <div className='space-y-4'>
          <h1 className='text-6xl text-purple-700 '>Clesto Face Wash</h1>
          <h3 className='text-purple-700'>Refreshingly Clear</h3>
          <p className=' text-purple-700 text-xl'>Refreshingly Clear Facial Wash with pink grapefruit for blemish-prone skin. Developed to help prevent imperfections, the face wash gel gently cleanses to help prevent imperfections, without overdrying skin, for a clearer, more radiant complexion.</p>
          <button className='mt-2 px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200'>MORE</button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-[-32px]'>
        <div className='space-y-4'>
          <h1 className='text-6xl text-purple-700 '>Multi Makeup Remover</h1>   
          <h3 className='text-purple-700'>FACE–EYE–LIPS</h3>
       <p className='text-purple-700 text-xl'>It is an all-in-one cleansing solution and makeup remover that promotes healthy skin while respecting sensitive skin as it eliminates impurities from your face and around your eyes.</p>
          <button className='mt-2 px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200'>MORE</button>
        </div>
        <div className='flex justify-center'>
          <img src={Makeupp} alt='Multi Makeup Remover' className='w-full h-150 object-cover rounded-md shadow-md ' />
        </div>
      </div>
    </div>
  );
}

export default Makeup;