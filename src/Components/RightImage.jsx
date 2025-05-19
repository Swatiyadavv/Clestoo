import React from 'react'
import clestoRight from '../assets/flower.jpg'
function RightImage() {
  return (
  <div className='grid grid-cols-1 md:grid-cols-2 items-center p-8 gap-4'>
  <div className='space-y-4'>
    <h1 className='text-6xl text-purple-700'>CLESTO</h1>
    <p className='text-purple-700 text-xl'>
“Clesto” is one of “Madar Group” ‘s many brands, and it specializes in personal care and cosmetics.
 our mother Company Madar Group is a group of manufacturing and distribution companies specializing
 in detergents and consumer products for home care, personal care, childcare, and cosmetics.</p>
   <button className='px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200'>MORE</button>
  </div>
  <div className='flex justify-center'>
    <img src={clestoRight}
    alt="Clesto"
    className='w-full h-full object-cover rounded-md shadow-lg'/>
  </div>
 </div>
  )
}
export default RightImage;



