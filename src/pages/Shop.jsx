import React from 'react'
import { MessageCircle, Heart, ShoppingCart } from 'lucide-react';
import perfumes from '@/assets/product_images/perfumes.jfif'

const Shop = () => {
    return (
        <div>
            {/* Header */}
            <div className='mt-10 h-full flex justify-between items-center'>
                <div>
                    <MessageCircle className='ml-2 text-[#E1A5AA] w-[22px] h-[22px]' />
                </div>
                <div className='rounded-full bg-white shadow-md p-2 flex justify-between items-center h-[40px] w-[258px]'>
                    <div className='text-center py-1 w-[125px] h-[32px]'>
                        Grid
                    </div>
                    <div className='text-white text-center py-1 bg-[#E1A5AA] w-[125px] h-[32px] rounded-full'>
                        Swipe
                    </div>
                </div>
                <div>
                    <ShoppingCart className='mr-2 text-[#E1A5AA] w-[22px] h-[22px]' />
                </div>
            </div>

            <div className='py-4'>
                <h1 className='text-[22px] text-center'>
                    Great for You!
                </h1>
            </div>

            {/* Products */}
            <div>
                <div className='relative rounded-[30px] h-[500px] w-[340px] mx-auto shadow-lg'>
                    <img
                        className='rounded-[30px] h-[500px] w-[340px]  '
                        src={perfumes}
                        alt="product image" />

                    {/* Heart icons */}
                    <div className='absolute top-10 left-0 right-0   rounded-lg flex  items-center   justify-around'>
                        <div className='bg-white rounded-lg w-[30px] h-[30px] flex justify-center items-center shadow-md'>
                            <Heart />
                        </div>
                        <div className='bg-[#E1A5AA] rounded-lg w-[30px] h-[30px] flex justify-center items-center shadow-md text-white'>
                            <Heart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
