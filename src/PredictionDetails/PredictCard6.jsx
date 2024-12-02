import React,  { useState } from 'react';
import { IoCallOutline, IoClose } from "react-icons/io5";
import Prediction from '../Components/Prediction';
import { useNavigate } from 'react-router-dom';
import fashion from "../Image/fashion.png"


const PredictCard6 = () => {
    const [showPrediction,  setShowPrediction] = useState(false);
    const navigate = useNavigate(); 

    const handleClose = () => {
        console.log("Close button clicked!"); // Logging for confirmation
       navigate('/prediction') // Show the Prediction component
    };
    if (showPrediction) {
      return <Prediction />;
    }
    return (
        <div>
            <div className="relative w-full flex items-center">
            <button
                    className="absolute top-4 left-4 text-xl text-gray-700 "
                    onClick={handleClose}
                >
                    <IoClose className="w-6 h-6" />
                </button>
                <div className="relative z-10 flex flex-col items-center justify-center text-left px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pd-4 font-serif">
                    <div className="container mx-auto px-6 py-3 sm:px-8 lg:px-16 max-w-7xl text-center">
                        <h2 className="text-4xl font-bold text-customBrown">
                            IS YOUR CAREER SUITABLE ACCORDING TO YOUR DATE OF BIRTH
                        </h2>
                    </div>

                    <div className="md:w-full lg:w-full p-2">
                        <img
                            src={fashion}
                            alt="Hero Section"
                            className="w-full"
                        />
                    </div>

                    <p className="md:text-md lg:text-lg leading-relaxed p-2">
                        Before few years when NIDHI and Family were at cross-road, they were confused about whether to continue the engineering or to choose the passion of fashion designing.
                        As a numerologist I assessed her birth chart and told her to choose Fashion designing and predicted that her 24 age and 2016 would be her turning point.
                        Now , in 2016 she had showcased her designs at london fashion week.

                        It’s a proud moment as a Numerologist when your prediction come true.

                        #inifdrocks #londonfashionweek #fashionscout #historymaking#proudofyouNidhi

                        Numbers can guide you.
                        Numbers can show you path and
                        Numbers can definitely assist your Hard Work.              </p>
                </div>
            </div>
        </div>
    );
}

export default PredictCard6;
