import React, { useRef, useState } from "react";
import aim from "../Image/slide1.png";
import livelihood from "../Image/livelyhood.jpg";
import goals from "../Image/goals.jpg";
import zoo from "../Image/zoo.jpg";
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
  }}
>
      {/* Main Heading */}
      <div className="text-center mb-10">
        <h2 className="text-gray-900 text-4xl font-extrabold md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-600">
            One of the Best Products With Low Cost For Farmers
          </span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Left Side */}
        <div className="w-full bg- p-10 rounded-xl shadow-lg space-y-10">
          <h3 className="text-2xl font-bold text-center text-orange-500 mb-8">
            MooRopan
          </h3>

          {/* Card Section */}
          <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-6 sm:space-y-0 space-y-6">
            {/* Card 1 */}
            <div
              className="relative group w-full sm:w-1/4 h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:w-3/4 group-hover:w-1/4"
              style={{ backgroundImage: `url(${aim})` }}
            >
              <div className="absolute inset-0 flex justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-red-400 text-xl font-bold text-center">
                  Pioneers in Protein-Led Nutraceuticals
                </h4>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative group w-full sm:w-1/4 h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:w-3/4 group-hover:w-1/4"
              style={{ backgroundImage: `url(${livelihood})` }}
            >
              <div className="absolute inset-0 flex justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-red-400 text-xl font-bold text-center">
                  High Quality
                </h4>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="relative group w-full sm:w-1/4 h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:w-3/4 group-hover:w-1/4"
              style={{ backgroundImage: `url(${goals})` }}
            >
              <div className="absolute inset-0 flex justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-red-400 text-xl font-bold text-center">
                  Customizable & Scalable
                </h4>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="relative group w-full sm:w-1/4 h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:w-3/4 group-hover:w-1/4"
              style={{ backgroundImage: `url(${zoo})` }}
            >
              <div className="absolute inset-0 flex justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-red-400 text-xl font-bold text-center">
                  Innovative Solutions
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="w-full  ">
          <h1 className="text-2xl font-bold text-center text-blue-900 mb-8">
            Feed your Cow with Care.
          </h1>
          <div className="absolute top-2 right-2 z-10">
            <button
              onClick={togglePlayPause}
              className="px-4 py-2 bg-white text-black rounded-lg shadow-lg"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>

          <video
            ref={videoRef}
            className="w-full h-144 rounded-lg shadow-lg h-96"
            autoPlay
            muted
            loop
          >
            <source src={cattlevideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
