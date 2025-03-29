import { useEffect, useState } from 'react'
import { MessageCircle, Heart, ShoppingCart, Star, MapPin } from 'lucide-react';
import perfumes from '@/assets/product_images/perfumes.jfif'
import { productService } from '@/api/productService';
const Shop = () => {
    const [products, setProducts] = useState([]);
    console.log("prdoucts", products)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await productService.getProducts();
                setProducts(products);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchProducts();
    }, []);


    return (
        <div>
            {/* Header */}
            <div className='mt-10 h-full flex justify-between items-center'>
                <div>
                    <MessageCircle className='ml-4 text-[#E1A5AA] w-[22px] h-[22px]' />
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
                    <ShoppingCart className='mr-4 text-[#E1A5AA] w-[22px] h-[22px]' />
                </div>
            </div>

            <div className='py-4 mt-10'>
                <h1 className='text-[22px] text-center'>
                    Great for You!
                </h1>
            </div>

            {/* Products/Card */}
            <div>
                {products.map((product, index) => (
                    <div key={index} className='relative rounded-[30px] h-[550px] w-[340px] mx-auto shadow-lg mb-10'>
                        <img
                            className='rounded-[30px] h-[500px] w-[340px]'
                            src={product.image || perfumes}
                            alt={product.name || "product image"} />

                        {/* Heart icons */}
                        <div className='absolute top-10 left-0 right-0 rounded-lg flex items-center justify-end '>
                            <div className='bg-white rounded-lg w-[40px] h-[40px] flex justify-center items-center shadow-md text-black mr-10'>
                                <Heart />
                            </div>
                        </div>

                        {/* Description */}
                        <div className='flex absolute bottom-0 left-0 right-0 h-[100px] rounded-b-[30px] items-center justify-center p-4 gap-x-8 shadow-top-only bg-gradient-to-b from-transparent via-[#E1A5AA]/100 via-30% to-[#E1A5AA]'>
                            <div>
                                <div className='flex gap-x-2'>
                                    <span>
                                        <MapPin className='text-white' />
                                    </span>
                                    <p className='text-white'>
                                        {product.distance || "N/A"} away
                                    </p>
                                </div>
                                <h1 className='font-bold text-[31px] text-white'>
                                    {product.name || "Product Name"}
                                </h1>
                            </div>
                            <div className='h-[41px] text-[#E1A5AA] rounded-[12px] flex gap-x-4 bg-white items-center w-[74px] px-2'>
                                <Star className='font-semibold' />
                                <p className='font-semibold'>
                                    {product.rating || "0.0"}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='relative rounded-[30px] h-[550px] w-[340px] mx-auto shadow-lg'>
                    <img
                        className='rounded-[30px] h-[500px] w-[340px]  '
                        src={perfumes}
                        alt="product image" />

                    {/* Heart icons */}
                    <div className='absolute top-10 left-0 right-0   rounded-lg flex  items-center   justify-around'>
                        <div className='bg-white rounded-lg w-[40px] h-[40px] flex justify-center items-center shadow-md'>
                            <Heart />
                        </div>
                        <div className='bg-[#E1A5AA] rounded-lg w-[40px] h-[40px] flex justify-center items-center shadow-md text-white'>
                            <Heart />
                        </div>
                    </div>

                    {/* Description */}
                    <div className='flex absolute bottom-0 left-0 right-0 h-[100px] rounded-b-[30px] items-center justify-center p-4 gap-x-8 shadow-top-only bg-gradient-to-b from-transparent via-[#E1A5AA]/100 via-30% to-[#E1A5AA]'>

                        <div>
                            <div className='flex gap-x-2'>
                                <span>
                                    <MapPin className='text-white' />
                                </span>
                                <p className='text-white'>
                                    1.2km away
                                </p>
                            </div>
                            <h1 className='font-bold text-[31px] text-white'>
                                Pidia Beach
                            </h1>
                        </div>
                        <div className='h-[41px] text-[#E1A5AA] rounded-[12px] flex gap-x-4 bg-white items-center w-[74px] px-2'>
                            <Star className='font-semibold' />
                            <p className='font-semibold'>
                                4.9
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
