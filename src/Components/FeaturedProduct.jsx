import React from 'react'
import feat from '../assets/feat.jpg'
function FeaturedProduct() {
  return (
    <div className='bg-gray-800'> 
     <div className='text-center'>
    <span className='text-bold bg-purple-800 text-white text-3xl rounded-2xl inline-block px-4 py-2 mt-10'>
        FEATURED PRODUCT
    </span>
</div>

     <div className='grid grid-cols-1 md:grid-cols-2 items-center p-8 gap-4'>
      
         <div className='flex justify-center'>
       <img src={feat}
       alt="feat"
       className='w-200 h-100 object-cover rounded-md shadow-amber-50'/>
     </div>
     <div className='space-y-4 px-4 py-4'>
       <h1 className='text-4xl text-white '>CLESTO SHAMPOO WITH ROSEMARY AND ARGAN OIL</h1>
      <ul className='text-white list-disc list-inside text-xl'>
        <li>
       Specially developed formula to moisturize and nourish hair
        </li>
        <li>
         It contains 100% natural extracts without harmful chemicals
        </li>
        <li>
            Reduces hair loss
        </li>
        <li>
            Gives hair shine and vitality
            </li>
            <li>
                Vitamin H in argan oil helps reduce hair breakage

            </li>
      </ul>
      <button className='px-4 py-2 border text-white border-gray-400 rounded-md hover:bg-gray-200'>MORE</button>
     </div>
    </div>
    </div>
     )
}

export default FeaturedProduct