import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Prediction from '../Components/Prediction';
import { useNavigate } from 'react-router-dom';
import summit from '../Image/MastiSense.png'

const PredictCard5 = () => {
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
                        Mastitis is udder inflammation
                        caused by bacterial infection.                          </h2>
                    </div>

                    <div className="md:w-full lg:w-full p-2">
                        <img
                            src= {summit}
                            alt="Hero Section"
                            className="w-full"
                        />
                    </div>

                    <p className="md:text-md lg:text-lg leading-relaxed p-2">
                    Such infection results in
                    breaching of blood milk barrier
                    and changes the composition of
                    milk which can be analyzed using
                    sensors.
                    MastiSense -TM detects bovine
                    mastitis at an early stage and is a
                    cow side device, easy to use and
                    interpret

                    Milk analyte used for
                    diagnosing mastitis can be
                    repooled with bulk milk.
                    It is affordable and available
                    under subscription revenue
                    model with android app for
                    data as Add-on feature
              </p>
                </div>
            </div>
        
    );
}

export default PredictCard5;
