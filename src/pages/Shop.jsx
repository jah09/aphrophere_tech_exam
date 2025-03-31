import { useEffect, useState } from 'react'
import { MessageCircle, Heart, ShoppingCart } from 'lucide-react';
import perfumes from '@/assets/product_images/perfumes.jfif'
import { productService } from '@/api/productService';
import { wishListService } from '@/api/wishListService';
import { useSwipeable } from 'react-swipeable';
import { cartService } from '@/api/cartService';
import Product from '@/component/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wishlist, setWishlist] = useState([]);
    const [cartData, setCartData] = useState([]);
    const userId = 'userId123'

    const fetchWishlist = async () => {
        try {
            const wishlist = await wishListService.getWishlist(userId);
            setWishlist(wishlist);
        } catch (error) {
            console.error(error.message);
        }
    }

    const getCartData = async () => {
        try {
            const response = await cartService.getCartData();
            setCartData({
                cartLength: response.cartLength,
                cartData: response.cartData,
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    //Fetch the products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await productService.getProducts();
                setProducts(products);
            } catch (error) {
                console.error(error.message);
            }
        };

        getCartData();
        fetchWishlist();
        fetchProducts();
    }, []);

    const handleSwipeLeft = () => {
        // Skip the current product
        if (currentIndex < products.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Reset to the first product
        }
    };


    //Handle swipe right (add to wishlist)
    const handleSwipeRight = async () => {
        const currentProduct = products[currentIndex];
        const payload = {
            userId: userId,
            productId: products[currentIndex].id,
            heart: true,
            productName: products[currentIndex].name,
        }
        try {
            // Check if the product is already in the wishlist
            const isAlreadyInWishlist = wishlist.some((item) => item.productId === currentProduct.id);
            if (isAlreadyInWishlist) {
                console.log("Product is already in the wishlist");
            } else {
                // Add the product to the wishlist
                await wishListService.createWishlist(payload);

                // Fetch the updated wishlist
                await fetchWishlist();
            }
        } catch (error) {
            console.error("Error in handleSwipeRight:", error.message);
        }

        // Move to the next product
        if (currentIndex < products.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Reset to the first product
        }
    };

    //Handle swipe up (add to cart)
    const handleSwipeUp = async () => {
        const currentProduct = products[currentIndex];

        const payload = {
            userId: userId,
            productId: products[currentIndex].id,
            productName: products[currentIndex].name,
        }
        try {
            // Add the product to the cart
            const isAlreadyInCart = cartData.cartData.some((item) => item.productId === currentProduct.id);
            if (isAlreadyInCart) {
                console.log("Product is already in the wishlist");
            } else {
                // Add the product to the wishlist
                const response = await cartService.createCartData(payload);
                console.log("handleSwipeUp response", response);

                // Fetch the updated cart data
                await getCartData();
            }
        }
        catch (error) {
            console.error("Error in handleSwipeUp:", error.message);
        }

    }

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
        onSwipedUp: handleSwipeUp,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });
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
                <div className='relative  h-10 flex items-center'>
                    {cartData.cartLength > 0 ? (
                        <div className='absolute top-0 right-1 rounded-full w-[20px] h-[20px] flex items-center justify-center text-red-900 font-semibold'>
                            {cartData.cartLength}
                        </div>
                    ) : null}
                    {/* Cart icon */}
                    <ShoppingCart className='mr-4 text-[#E1A5AA] w-[22px] h-[22px]' />
                </div>
            </div>

            <div className='py-4 mt-10'>
                <h1 className='text-[22px] text-center'>
                    Great for You!
                </h1>
            </div>

            {/* Products/Card */}
            <div {...handlers} className='relative'>
                {products.length > 0 && currentIndex < products.length ? (
                    <Product
                        products={products}
                        currentIndex={currentIndex}
                        wishlist={wishlist}
                        cartData={cartData}
                        perfumes={perfumes}
                    />
                ) : (
                    <p className='text-center'>No more products to show!</p>
                )}
            </div>
        </div>
    )
}

export default Shop
