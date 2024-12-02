import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Prediction from '../Components/Prediction';
import { useNavigate } from 'react-router-dom';
import topTen from '../Image/topten.png'
const PredictCard8 = () => {
    const [showPrediction, setShowPrediction] = useState(false);
    const navigate = useNavigate(); 

    const handleClose = () => {
        console.log("Close button clicked!"); // Logging for confirmation
       navigate('/prediction') // Show the Prediction component
    };

    if (showPrediction) {
        return <Prediction />;
    }

    return (
        <div className="relative w-full h-full flex items-center">
            <button
                className="absolute top-4 left-4 text-xl text-gray-700 cursor-pointer z-50" // Ensuring z-index
                onClick={handleClose}
            >
                <IoClose className="w-6 h-6" />
            </button>
                <div className="relative z-10 flex flex-col items-center justify-center text-left px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pd-4 font-serif">
                    <div className="container mx-auto px-6 py-3 sm:px-8 lg:px-16 max-w-7xl text-center">
                        <h2 className="text-4xl font-bold text-customBrown">
                            What numbers can do ???
                        </h2>
                    </div>

                    <div className="md:w-full lg:w-full p-2">
                        <img
                            src= {topTen}
                            alt="Hero Section"
                            className="w-full"
                        />
                    </div>

                    <p className="md:text-md lg:text-lg leading-relaxed p-2">
                        Before few years I suggested my well-wisher Mr. Bablu Maheshwari
                        (person behind my columns in Nava-Bharat newspaper)
                        to let his daughter choose the fashion designing field.
                        Guided her with Numerology ,
                        I have predicted that her 24 age will be a turning point,
                        advised her to wear her lucky number 33=3+3=(6)
                        and at the age of 24=2+4=(6) She is selected in Top 10 INIFD Designers who will rock the Ramp at Fashion Scout during London Fashion Week #inifdrocks #londonfashionweek #fashionscout #historymaking#proudofyouNidhi

                        Numbers can definitely assist your Hard Work.
                    </p>
                </div>

            </div>
       
    );
}

export default PredictCard8;
