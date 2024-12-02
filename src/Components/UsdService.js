import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import herosection from "../Image/herosection.jpg";
import Chatbot from './Chatbot';
import SubCardPage from '../Components/SubCardPage';
import { servicesData } from './data';
import USDservices1 from '../USDservices/USDsevices1';
import USDservices2 from '../USDservices/USDsevices2';
import USDservices3 from '../USDservices/USDsevices3';
import USDservices4 from '../USDservices/USDsevices4';
import USDservices5 from '../USDservices/USDsevices5';
import USDservices6 from '../USDservices/USDsevices6';
import USDservices7 from '../USDservices/USDsevices7';
import USDservices8 from '../USDservices/USDsevices8';
import USDservices9 from '../USDservices/USDsevices9';
import USDservices10 from '../USDservices/USDsevices10';
import USDservices11 from '../USDservices/USDsevices11';
import USDservices12 from '../USDservices/USDsevices12';
import USDservices13 from '../USDservices/USDsevices13';
import USDservices14 from '../USDservices/USDsevices14';
import USDservices15 from '../USDservices/USDsevices15';

const UsdService = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Sort by price');
  const [sortedServices, setSortedServices] = useState([...servicesData]);

  const toggleDropdown = () => setIsOpen(prevState => !prevState);

  const sortServices = (option) => {
    let sortedData = [...servicesData];
    setSortedServices(sortedData);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    sortServices(option);
    setIsOpen(false);
  };

  useEffect(() => {
    sortServices(selectedOption);
  }, [selectedOption]);

  const handleUsdCardClick = (id) => {
    navigate(`/usdservices/${id}`); // Navigate to the new page with the service ID
  };

  const subUsdCardComponents = {
    1: USDservices1,
    2: USDservices2,
    3: USDservices3,
    4: USDservices4,
    5: USDservices5,
    6: USDservices6,
    7: USDservices7,
    8: USDservices8,
    9: USDservices9,
    10: USDservices10,
    11: USDservices11,
    12: USDservices12,
    13: USDservices13,
    14: USDservices14,
    15: USDservices15
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
            <span className="block text-white"> Our Foreign Services</span>
          </h1>
          {/* <div className="mt-1 mr-1">
            <Link to="/services" className="px-8 py-4 border text-sm md:text-base font-semibold rounded-full hover:bg-amber-400 hover:text-black transition duration-300">
              Explore Services &rarr;
            </Link>
          </div> */}
        </div>
      </div>

      {/* Dropdown for Sorting */}
      <div className="relative inline-block text-right px-4 sm:px-8 lg:px-16 font-serif">
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-customOrange rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
        >
          {selectedOption}
          <span className="ml-2">•••</span>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 w-56 bg-white border border-customOrange rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {['Sort by popularity', 'Sort by latest', 'Sort by price: low to high', 'Sort by price: high to low'].map(option => (
                <button
                  key={option}
                  onClick={() => selectOption(option)}
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Services Grid */}
      <div className="px-4 md:px-8 lg:px-16 py-8 font-serif">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedServices.map((item, index) => (
            <a href="#" onClick={() => handleUsdCardClick(item.id)}>
              <div key={index} className="w-full max-w-sm bg-white border border-golden rounded-lg shadow-lg">
                {/* <a href="#" onClick={() => handleUsdCardClick(item.id)}> */}
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
                      {item.usd}
                      <br />
                      {/* {item.price} */}
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

export default UsdService;
