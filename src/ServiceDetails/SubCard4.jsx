import React, { useState } from 'react';
import { IoCallOutline, IoClose } from "react-icons/io5";
import Services from '../Components/Services';
import service4 from "../Image/service4.jpg"
import { useNavigate } from 'react-router-dom';

const SubCard4 = () => {
    const [showServices, setShowServices] = useState(false);
    const navigate = useNavigate(); 

  const handleClose = () => {
    navigate('/services'); 
  };

    if (showServices) {
        return <Services />;
    }

 
      const handleCheckout = () => {
        const serviceData = {
          productName: "love or marriage compatibility consultation",
          price: "₹ 2800",  
        };
        navigate('/checkout', { state: serviceData }); 
      };



    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden relative">
            {/* Close Button */}
            <button
                className="absolute top-4 left-4 text-xl text-gray-700 "
                onClick={handleClose}
            >
                <IoClose className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row items-start mt-4 md:mt-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 space-y-6 md:space-y-0 overflow-x-hidden">
                {/* Contact Form */}
                <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
                    <img
                        src={service4}
                        alt="Description of the image"
                        className="w-full h-auto rounded-lg"
                    />
                     <div className="flex items-center justify-between mt-4">
                        <a
                             className="flex items-center font-serif justify-center w-full rounded-lg bg-golden focus:ring-4 focus:outline-none font-medium text-sm px-5 py-2.5 text-center text-white mt-5"
                            onClick={handleCheckout}
                        >
                            <svg
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
                            </svg>
                            Book Your Appointment
                        </a>
                    </div>
                </div>

                {/* Contact Details */}
                <div className="flex-1 p-2 sm:p-6 md:p-8 lg:p-10 font-serif">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-yellow-600">
                    love or marriage compatibility consultation
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wide mb-4">
                    You will get a compatibility email report or telephonic conversation with possibilities of marriage and remedies if possibilities are high or needed.
                    </p>

                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-yellow-600">
                        How to Proceed with Us?
                    </h3>
                    <ol className="list-decimal list-inside mb-4 space-y-1">
                        <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                            Make payment on the below given bank details.
                        </li>
                        <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                            Share the screenshot or reference number to
                            <span className="block">Mob: (8390005111)</span>
                            <span className="block">Email: (sumiit@auspiciousnumerology.com)</span>
                        </li>
                        <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                            Please have patience for our reply after sending payment; we will get back to you within 1-2 days.
                        </li>
                    </ol>

                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-yellow-600">
                        Bank Details:
                    </h3>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                        <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                            <strong>Account Name:</strong> Sumiit Madhukar Messhram
                        </li>
                        <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                            <strong>Account Number:</strong> 916020012990025
                        </li>
                        <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                            <strong>Bank Name:</strong> AXIS BANK, WARDHA BRANCH
                        </li>
                        <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                            <strong>IFSC:</strong> UTIB0000808
                        </li>
                        <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                            <strong>Swift Code:</strong> AXISINBB048
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SubCard4