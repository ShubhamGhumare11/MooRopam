import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import herosection from "../Image/herosection.jpg";
import Chatbot from './Chatbot';
import { servicesData } from './data';


const Services = () => {
  const navigate = useNavigate();
  const [sortedServices, setSortedServices] = useState(servicesData);

  const handleCardClick = (id) => {
    navigate(`/subcard/${id}`);
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
      {/* Hero Section */}
      <div className="relative w-full h-[420px] flex items-center">
        <Chatbot />
        <img
          src={herosection}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          loading="lazy"
        />
        <div className="relative z-10 flex flex-col items-start justify-start md:justify-center h-full text-left text-white px-8 md:px-16 lg:px-24 pt-8 md:pb-20 font-serif">
          <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-6 leading-snug">
            <span className="block text-yellow-500 ">
            Dive Into Numerology
            </span>
            <span className="block text-white">Our Services</span>
          </h1>
          {/* <div className="mt-1 mr-1">
            <Link to="/services" className="px-8 py-4 border text-sm md:text-base font-semibold rounded-full hover:bg-amber-400 hover:text-black transition duration-300">
              Explore Services &rarr;
            </Link>
          </div> */}
        </div>
      </div>

      {/* Dropdown for Sorting */}
      <div className="relative inline-block text-right px-2 sm:px-8 lg:px-16 font-serif">
        <select
          onChange={(e) => sortServices(e.target.value)}
          className="border rounded p-2 bg-white"
        >
          <option value="popularity">Sort by Popularity</option>
          <option value="latest">Sort by Latest</option>
          <option value="priceLowToHigh">Sort by Price: Low to High</option>
          <option value="priceHighToLow">Sort by Price: High to Low</option>
        </select>
      </div>


      {/* Services Grid */}
      <div className="px-4 md:px-8 lg:px-16 py-8 font-serif">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedServices.map((item, index) => (
            <a href="#" onClick={() => handleCardClick(item.id)}>
              <div key={index} className="w-full max-w-sm bg-white border border-golden rounded-lg shadow-lg">
                <img
                  className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56"
                  src={item.image}
                  alt="service image"
                />

                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate">
                      {item.title}
                    </h5>
                  </a>
                  <h3 className="text-black mb-1 italic line-clamp-2 text-sm">
                    {item.subTitle}
                  </h3>

                  {/* Ratings Section */}
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734a1.522 1.522 0 0 0-.844 2.597l3.65 3.565-.861 5.018a1.522 1.522 0 0 0 2.215 1.601l4.5-2.363 4.5 2.363a1.522 1.522 0 0 0 2.215-1.601l-.861-5.018 3.65-3.565a1.522 1.522 0 0 0 .391-1.667Z" />
                        </svg>
                      ))}
                      <svg
                        className="w-4 h-4 text-gray-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734a1.522 1.522 0 0 0-.844 2.597l3.65 3.565-.861 5.018a1.522 1.522 0 0 0 2.215 1.601l4.5-2.363 4.5 2.363a1.522 1.522 0 0 0 2.215-1.601l-.861-5.018 3.65-3.565a1.522 1.522 0 0 0 .391-1.667Z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ml-3">
                      {item.rating}
                    </span>
                  </div>

                  {/* Pricing Section */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      {item.price}
                    </span>
                    <span className="text-xs text-slate-900">(Duration: {item.duration})</span>
                  </div>



                  {/* Button Section */}
                  <a
                    href="#"
                    className="flex items-center justify-center w-full rounded-lg bg-golden  focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center text-white mt-5 "
                  >
                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg> */}
                    Check Service
                  </a>


                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Services;
