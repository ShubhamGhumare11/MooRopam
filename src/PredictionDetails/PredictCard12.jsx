import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Prediction from '../Components/Prediction';
import { useNavigate } from 'react-router-dom';
import rcb from "../Image/rcb.png"

const PredictCard12 = () => {
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
                            RCB vs SRH Big final
                        </h2>
                    </div>

                    <div className="md:w-full lg:w-full p-2">
                        <img
                            src={rcb}
                            alt="Hero Section"
                            className="w-full"
                        />
                    </div>

                    <p className="md:text-md lg:text-lg leading-relaxed p-2">
                        Today’s date is 29th May 2016, which comes under the effect of 2 and 7.
                        This IPL 9 and 2016 both ruled by number 9.
                        That’s the reason why Warner 27th born (9) and Kohli 18(9) reached to the mega final.

                        Today’s date is more favourable to RCB
                        But warner is having year lucky.

                        Today’s score may be in the range of 160-170 or more than 190.

                        Today Shikhar dhawan , Warner, Yuvraj, and Mustafijur may perform from SRH and Gayle, Kohli, Lokesh rahul and iqbal abdulla may perform from RCB.
                    </p>
                </div>

            </div>
        
    );
}

export default PredictCard12;
