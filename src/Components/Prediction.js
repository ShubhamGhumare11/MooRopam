import React, { useState, useEffect } from 'react';
import Chatbot from './Chatbot';
import herosection from "../Image/herosection.jpg";
import { predictionData } from './data';
import logo from '../Image/auspiciousNumerologyLogo.png';
import PredictCard1 from '../PredictionDetails/PredictCard1';
import PredictCard2 from '../PredictionDetails/PredictCard2';
import PredictCard3 from '../PredictionDetails/PredictCard3';
import PredictCard4 from '../PredictionDetails/PredictCard4';
import PredictCard5 from '../PredictionDetails/PredictCard5';
import PredictCard6 from '../PredictionDetails/PredictCard6';
import PredictCard7 from '../PredictionDetails/PredictCard7';
import PredictCard8 from '../PredictionDetails/PredictCard8';
import PredictCard9 from '../PredictionDetails/PredictCard9';
import PredictCard10 from '../PredictionDetails/PredictCard10';
import PredictCard11 from '../PredictionDetails/PredictCard11';
import PredictCard12 from '../PredictionDetails/PredictCard12';
import PredictCard13 from '../PredictionDetails/PredictCard13';
import PredictCard14 from '../PredictionDetails/PredictCard14';
import PredictCard15 from '../PredictionDetails/PredictCard15';
import PredictCard16 from '../PredictionDetails/PredictCard16';
import { useNavigate } from 'react-router-dom';

const Shimmer = () => (
  <div className="relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden h-full flex flex-col animate-pulse">
    <div className="relative h-40 w-full bg-gray-300">
      <img
        src={logo}
        alt="Logo"
        className="absolute top-0 left-0 right-0 bottom-0 m-auto opacity-35 h-30 w-20"
        style={{ zIndex: 10 }}
      />
    </div>
    <div className="p-3 flex-grow flex flex-col">
      <div className="h-6 bg-gray-300 mb-2 rounded"></div>
      <div className="h-4 bg-gray-300 mb-4 rounded"></div>
      <div className="h-4 bg-gray-300 mb-2 rounded"></div>
      <div className="h-4 bg-gray-300 mb-2 rounded"></div>
    </div>
    <div className="px-3 py-2">
      <div className="h-8 bg-gray-300 rounded-full"></div>
    </div>
  </div>
);


const Prediction = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlePredictCardClick = (id) => {
    navigate(`/prediction/${id}`); // Navigate to the detailed component
  };

  return (
    <div>
      <div className="relative w-full h-[420px] flex items-center">
        <Chatbot />
        <img
          src={herosection}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          loading="lazy"
        />
        <div className="relative z-10 flex flex-col items-start justify-start md:justify-center h-full text-left text-white px-8 md:px-16 lg:px-24 pt-8 md:pb-20 font-serif">
          <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-6 leading-snug">
            <span className="block text-yellow-500 ">
              Dr. Sumiit Messhram’s 
            </span>
            <span className="block text-white">Predictions: </span>
          </h1>
          {/* <div className="mt-1 mr-1">
            <Link to="/services" className="px-8 py-4 border text-sm md:text-base font-semibold rounded-full hover:bg-amber-400 hover:text-black transition duration-300">
              Explore Services &rarr;
            </Link>
          </div> */}
        </div>
      </div>
      <div className="py-14 bg-white text-black font-serif">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl text-center">
          <div className="flex flex-wrap justify-start -mx-2">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                  <Shimmer />
                </div>
              ))
            ) : (
              predictionData.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4"
                  onClick={() => handlePredictCardClick(item.id)} // Add onClick handler
                >
                  <div className="relative bg-gradient-to-r from-customOrange to-customBrown shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden h-full flex flex-col cursor-pointer"> {/* Add cursor-pointer */}
                    <img
                      className="h-40 w-full object-cover transition-opacity duration-300 hover:opacity-90"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-40"></div>
                    <div className="relative bg-white p-3 flex-grow flex flex-col">
                      <h1 className="text-customBrown font-bold text-lg mb-1 transition-colors duration-300 hover:text-customOrange cursor-pointer">
                        {item.title}
                      </h1>
                      <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                        {item.paragraph}
                      </p>
                      <p className="text-customOrange mt-3 italic border-l-4 border-customLightOrange pl-3 text-sm">
                        {item.quote}
                      </p>
                      <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
                        {item.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
