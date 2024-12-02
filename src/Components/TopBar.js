import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="bg-yellow-600 text-black p-2 text-sm md:text-base font-serif ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-4 text-center relative">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 ">
            <span className="text-lg">
              For Appointments, please call us between 6-9 pm only
            </span>
            <button className="flex items-center justify-center bg-white text-customBrown p-2 rounded-full shadow-lg hover:bg-customOrange hover:text-white transition duration-300 ease-in-out">
              <FaPhoneAlt className="mr-2" />
              <span className="text-md font-semibold">Call Now</span>
            </button>
          </div>
{/*           <button
            className="focus:outline-none absolute top-2 right-4 md:relative md:top-auto md:right-auto md:ml-4"
            onClick={handleClose}
          >
            <AiOutlineClose className="text-black hover:text-red-600" />
          </button> */}
        </div>
      </div>
    )
  );
};

export default TopBar;