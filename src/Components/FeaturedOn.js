import React, { useRef, useState } from "react";
import { FaSyringe, FaAppleAlt } from "react-icons/fa"; // Correct imports from Font Awesome
import { MdOutlineAgriculture } from "react-icons/md"; // Correct cow icon from Material Design
import cattlevideo from "../Image/cattlevideo.mp4";
import cowbg8 from "../Image/imagesbg.jpg";

const FeaturedOn = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="py-16 px-6"
      style={{
        backgroundImage: `url(${cowbg8})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
          <span className="bg-customBrown  text-transparent bg-clip-text">
            Premium Products at Affordable Prices for Farmers
          </span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Side - MooRopan Section */}
        <div className="flex-1 max-w-lg lg:max-w-none lg:h-[500px] flex flex-col justify-between p-10 rounded-2xl shadow-2xl bg-gradient-to-br from-green-100 to-green-200">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-6">
            MooRopan
          </h3>
          <p className="text-base text-gray-700 text-center mb-6">
            MooRopan India Pvt. Ltd. provides cattle healthcare aid, devices, and consultations pan India. Established in May 2023 with the motive of "Gau-swasthayam Rakshatu," we aim to enhance cattle health and productivity.
          </p>
          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Medicine Card */}
            <div className="bg-gradient-to-br from-orange-300 to-orange-500 shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 p-6 text-center">
              <FaSyringe className="text-5xl text-white mb-4 mx-auto" />
              <h2 className="text-lg font-semibold text-white">Medicine</h2>
              <p className="text-sm text-gray-200 mt-2">
                Find the best treatments and medications for your cattle's needs.
              </p>
            </div>

            {/* Food Card */}
            <div className="bg-gradient-to-br from-pink-300 to-pink-500 shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 p-6 text-center">
              <FaAppleAlt className="text-5xl text-white mb-4 mx-auto" />
              <h2 className="text-lg font-semibold text-white">Food</h2>
              <p className="text-sm text-gray-200 mt-2">
                Provide healthy and nutritious food options for your cattle.
              </p>
            </div>

            {/* Cattle Card */}
            <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 p-6 text-center">
              <MdOutlineAgriculture className="text-5xl text-white mb-4 mx-auto" />
              <h2 className="text-lg font-semibold text-white">Cattle</h2>
              <p className="text-sm text-gray-200 mt-2">
                Ensure proper care and feeding for your livestock.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Feed Your Cows with Care Video Section */}
        <div className="flex-1 max-w-lg lg:max-w-none lg:h-[500px] flex flex-col justify-between p-10 rounded-2xl shadow-2xl bg-gradient-to-br from-green-100 to-green-200">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-6">
            Feed Your Cows with Care
          </h3>
          <div className="relative flex-1">
            <video
              ref={videoRef}
              className="w-full h-full rounded-xl shadow-lg"
              autoPlay
              muted
              loop
            >
              <source src={cattlevideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={togglePlayPause}
              className="absolute bottom-4 left-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
