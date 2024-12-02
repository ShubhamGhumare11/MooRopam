import React, { useState, useEffect, useRef } from "react";
import { IoCallOutline, IoCloseOutline } from "react-icons/io5";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const popupRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setIsFloating((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`relative flex items-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full p-4 cursor-pointer transition-transform transform-gpu hover:scale-110 hover:rotate-3 hover:shadow-2xl ${isOpen ? "rotate-45" : ""
          } ${isFloating ? "animate-float" : "animate-zoom"}`}
        onClick={toggleChat}
        style={{ perspective: "500px" }}
      >
        <div className="absolute inset-0 rounded-full overflow-hidden z-0">
          <div className="w-full h-full bg-yellow-600 rounded-full animate-pulse bg-opacity-20 blur-sm"></div>
          <div className="absolute inset-0 bg-yellow-200 opacity-10 rounded-full animate-ping"></div>
        </div>

        <div className="relative flex items-center z-10 transform-gpu hover:rotate-x-6 hover:rotate-y-6">
          {isOpen ? (
            <IoCloseOutline className="text-white" size={24} />
          ) : (
            <>
              <IoCallOutline
                className="text-white animate-spin-slow transition-transform duration-300"
                size={24}
              />
              <span className="ml-2 text-white font-medium text-base">
                Book your appointment
              </span>

            </>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          ref={popupRef}
          className="fixed bottom-20 right-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-300 p-6 shadow-2xl rounded-3xl w-80 animate-fade-in-up transform transition-all duration-300 ease-out"
        >
          <div className="bg-white bg-opacity-60 rounded-2xl p-4 shadow-inner">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-yellow-600 p-2 rounded-full">
                <IoCallOutline className="text-white" size={24} />
              </div>
              <div className="ml-3">
                <h3 className="text-gray-900 text-xl font-bold font-serif">
                  Book Your Appointment
                </h3>
                <p className="text-gray-600 text-sm font-sans">
                  Available between 6-9 PM
                </p>
              </div>
            </div>

            <a href="tel:+918390005111">
              <button
                className="relative bg-yellow-600 text-white px-6 py-3 rounded-lg w-full transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl font-serif overflow-hidden"
              >
                <span className="absolute inset-0  opacity-30 animate-pulse rounded-full"></span>
                <span className="relative z-10 font-bold text-gray-900">Call Now</span>
              </button>
            </a>

            <a
              href="https://wa.me/918390005111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="relative bg-green-700 text-white px-6 py-3 rounded-lg w-full transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl font-serif overflow-hidden mt-3"
              >
                <span className="absolute inset-0 opacity-30 animate-pulse rounded-full"></span>
                <span className="relative z-10 font-bold text-gray-900">WhatsApp Now</span>
              </button>
            </a>

            <p className="text-gray-500 text-xs mt-3 text-center font-sans">
              We value your time. Response within 24 hours.
            </p>
          </div>
        </div>
      )}
    </div>
  );

};

export default Chatbot;