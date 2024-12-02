import React from 'react';
import Chatbot from './Chatbot';
import herosection from "../Image/herosection.jpg"

const Products = () => {
    const products = [
        {
            id: 1,
            image: "https://flowbite.com/docs/images/products/apple-watch.png",
            title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            rating: 5,
            price: "₹599",
        },
        {
            id: 2,
            image: "https://flowbite.com/docs/images/products/apple-watch.png",
            title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            rating: 5,
            price: "₹599",
        },
        {
            id: 3,
            image: "https://flowbite.com/docs/images/products/apple-watch.png",
            title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            rating: 5,
            price: "₹599",
        },
        {
            id: 4,
            image: "https://flowbite.com/docs/images/products/apple-watch.png",
            title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            rating: 5,
            price: "₹599",
        },
        {
            id: 5,
            image: "https://flowbite.com/docs/images/products/apple-watch.png",
            title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            rating: 5,
            price: "₹599",
        },
        {
            id: 6,
            image: "https://flowbite.com/docs/images/products/apple-watch.png",
            title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            rating: 5,
            price: "₹599",
        },
    ];

    return (

        <div>
            <div className="relative w-full h-[420px] flex items-center">
                <Chatbot />
                <img
                    src={herosection}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background"
                />
                <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-6 md:px-16 lg:px-24 pb-20 font-serif">
                    {/* <h1 className="text-lg md:text-2xl lg:text-4xl font-bold mb-3 mt-20 leading-snug">
                        <span className="block text-yellow-500 mb-2 text-xl md:text-3xl lg:text-5xl">
                            Dive into Numerology
                        </span>
                    </h1>
   */}
                </div>
            </div>
       


  {/* Coming Soon Section */}
<div className="flex items-center justify-center pt-10 font-serif">
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-md mx-auto transition-transform transform hover:scale-105">
        <h1 className="text-customBrown text-3xl font-bold mb-4">Products Coming Soon</h1>
        <p className="text-customBrown text-lg mb-6">
            We're excited to announce that our amazing products are on their way!
        </p>

        {/* Product Teaser */}
        <div className="mb-6">
            <h2 className="text-xl font-semibold text-customBrown mb-2">Sneak Peek:</h2>
            <p className="text-gray-600">
                Discover our innovative features designed to elevate your experience. Get ready to enjoy unmatched quality and performance!
            </p>
        </div>

   

        {/* Bounce Animation Icon */}
        <div className="animate-bounce mb-4">
            <svg
                className="w-12 h-12 text-customBrown mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                />
            </svg>
        </div>

        <p className="text-center text-gray-600 mb-4">
            Stay tuned for updates!
        </p>
    </div>
</div>

        </div>
    );
}

export default Products;

