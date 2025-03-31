import React from 'react'
import { Heart, Star, MapPin } from 'lucide-react';

const Product = ({
  products,
  currentIndex,
  wishlist,
  perfumes
}) => {
  return (
    <div className='relative rounded-[30px] h-[550px] w-[340px] mx-auto shadow-lg mb-10'>
      <img
        className='rounded-[30px] h-[500px] w-[340px]'
        src={products[currentIndex].image || perfumes}
        alt={products[currentIndex].name || 'product image'}
      />


      <div className='absolute top-10 left-0 right-0 rounded-lg flex items-center justify-end '>
        <div
          className={` rounded-xl w-[40px] h-[40px] flex justify-center items-center shadow-md text-black mr-10 ${wishlist.some((item) => item.productId === products[currentIndex].id)
            ? 'text-white bg-[#E1A5AA]'
            : 'bg-white'
            }`}
        >
          <Heart />
        </div>
      </div>


      <div className='flex absolute bottom-0 left-0 right-0 h-[100px] rounded-b-[30px] items-center justify-center p-4 gap-x-8 shadow-top-only bg-gradient-to-b from-transparent via-[#E1A5AA]/100 via-30% to-[#E1A5AA]'>
        <div>
          <div className='flex gap-x-2'>
            <span>
              <MapPin className='text-white' />
            </span>
            <p className='text-white'>
              {products[currentIndex].distance || 'N/A'} away
            </p>
          </div>
          <h1 className='font-bold text-[31px] text-white'>
            {products[currentIndex].name || 'Product Name'}
          </h1>
        </div>
        <div className='h-[41px] text-[#E1A5AA] rounded-[12px] flex gap-x-4 bg-white items-center w-[74px] px-2'>
          <Star className='font-semibold' />
          <p className='font-semibold'>
            {products[currentIndex].rating || '0.0'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product
