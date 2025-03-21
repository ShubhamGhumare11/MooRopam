import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from './data';
import Chatbot from './Chatbot';
import ProductCard from './ProductCard';

const Services = () => {
  const navigate = useNavigate();
  const [sortedServices, setSortedServices] = useState(servicesData);
  const [cart, setCart] = useState([]); // State for the cart

  const handleCardClick = (id) => {
    navigate(`/subcard/${id}`);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const sortServices = (criteria) => {
    let sortedData;
    switch (criteria) {
      case 'popularity':
        sortedData = sortByPopularity(servicesData);
        break;
      case 'latest':
        sortedData = sortByLatest(servicesData);
        break;
      case 'priceLowToHigh':
        sortedData = sortByPriceLowToHigh(servicesData);
        break;
      case 'priceHighToLow':
        sortedData = sortByPriceHighToLow(servicesData);
        break;
      default:
        sortedData = servicesData; // No sorting
    }
    setSortedServices(sortedData);
  };

  const sortByPopularity = (data) => {
    return [...data].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d.-]/g, ''));
      const priceB = parseInt(b.price.replace(/[^\d.-]/g, ''));
      return priceB - priceA; // Higher prices first
    });
  };

  const sortByLatest = (data) => {
    return [...data].sort((a, b) => b.id - a.id); // Higher IDs first
  };

  const sortByPriceLowToHigh = (data) => {
    return [...data].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d.-]/g, ''));
      const priceB = parseInt(b.price.replace(/[^\d.-]/g, ''));
      return priceA - priceB; // Lower prices first
    });
  };

  const sortByPriceHighToLow = (data) => {
    return [...data].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d.-]/g, ''));
      const priceB = parseInt(b.price.replace(/[^\d.-]/g, ''));
      return priceB - priceA; // Higher prices first
    });
  };

  return (
    <div>
      

      {/* Services Grid */}
      <div className="px-4 md:px-8 lg:px-16 py-8 font-serif">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedServices.map((item, index) => (
            <div key={index} className="w-full max-w-sm bg-white border rounded-lg shadow-lg">
              <img
                className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56"
                src={item.image}
                alt="service image"
              />

              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate">
                  {item.title}
                </h5>
                <h3 className="text-black mb-1 italic line-clamp-2 text-sm">
                  {item.subTitle}
                </h3>

                {/* Pricing Section */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-gray-900">{item.price}</span>
                  <span className="text-xs text-slate-900">(Duration: {item.duration})</span>
                </div>

                {/* Button Section */}
                <button
                  onClick={() => addToCart(item)} // Add to Cart on click
                  className="flex items-center justify-center w-full rounded-lg bg-golden focus:ring-4 focus:outline-none font-medium text-sm px-5 py-2.5 text-center text-white mt-5"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Component */}
      <ProductCard cart={cart} setCart={setCart} />
    </div>
  );
};

export default Services;
