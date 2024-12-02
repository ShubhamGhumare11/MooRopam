import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Prediction from '../Components/Prediction';
import { useNavigate } from 'react-router-dom';
import sachin from "../Image/sachin.png"

const PredictCard14 = () => {
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
                            The GOD of CRICKET. SACHIN RAMESH TENDULKAR
                        </h2>
                    </div>

                    <div className="md:w-full lg:w-full p-2">
                        <img
                            src= {sachin}
                            alt="Hero Section"
                            className="w-full"
                        />
                    </div>

                    <p className="md:text-md lg:text-lg leading-relaxed p-2">
                        Born on 24th April.
                        Birth number 2+4=(6)

                        Made a world record in School match at the age of 15=1+5=(6)

                        Made his international debut on 15th November 1989.
                        15=1+5=(6)

                        Made first international double century on 24th February 2010.
                        24=2+4=(6)

                        Played his last inning on 15th November
                        15=1+5=(6)

                        Played 24 years of cricket.
                        2+4=(6)

                        His dream of lifting world cup completed in his 6th world cup. (91,96,99,2003,2007,2011*)

                        Got his Bharat-Ratna award in the year 2013
                        2+0+1+3=(6)

                        Numbers always work.
                        Numbers never lie not even in case of God.

                        Very Happy birthday to our pride Mr. SACHIN RAMESH TENDULKAR.
                    </p>
                </div>

            </div>
       
    );
}

export default PredictCard14;
