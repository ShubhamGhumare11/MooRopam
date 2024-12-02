import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Prediction from '../Components/Prediction';
import { useNavigate } from 'react-router-dom';
import rio from "../Image/rio.png"


const PredictCard7 = () => {
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
                            Rio Olympic 2016
                        </h2>
                    </div>

                    <div className="md:w-full lg:w-full p-2">
                        <img
                            src= {rio}
                            alt="Hero Section"
                            className="w-full"
                        />
                    </div>

                    <p className="md:text-md lg:text-lg leading-relaxed p-2">
                        Most of the games in the olympic are used to be the individual sports.
                        That’s why it depends upon their consistent hard work as well as individual luck factor.
                        Success = when preparation meets the opportunity
                        I don’t mean they are not preparing well but what about the facilities given to them.
                        They need proper prior investment of time, money and facilities from the government to compete at such a big level.

                        (They are getting 3 physio’s for more than 150 sportsman and that too only at the time of event, what about training period ? )

                        Now , as per Numerology I do have hopes from the P.V. Sindhu and Sakshi
                    </p>
                </div>

            </div>
       
    );
}

export default PredictCard7;
