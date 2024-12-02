import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Prediction from '../Components/Prediction';
import { useNavigate } from 'react-router-dom';
import sultan from "../Image/sultan.png";
const PredictCard9 = () => {
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
                        OMG Sultan’s success lies in the numbers.
                    </h2>
                </div>

                <div className="md:w-full lg:w-full p-2">
                    <img
                        src= {sultan}
                        alt="Hero Section"
                        className="w-full"
                    />
                </div>

                <p className="md:text-md lg:text-lg leading-relaxed p-2">
                    Sultan is a juggernaut which refuses to stop. The Salman Khan, Anushka Sharma film has earned a gross of Rs 520 crore at the box office and is still going strong.

                    It was already predicted by me.

                    Sultan’s success lies in numbers.
                    Salman is 27 born.
                    His birth no. Is 27=2+7=(9)
                    and his destiny no. is (6)
                    This is 2016=2+0+1+6=(9)
                    Currently he is 51 years 5+1=(6)
                    Sultan released on 6th (6)
                    So , you shouldn’t be surprised if
                    sultan crossed 600 crore and breaks all the record.

                    JUST TAKE A LOOK AT MY PREDICTION ABOUT SALMAN’S SUCCESS and His most awaiting MARRIAGE PUBLISHED IN MY WEEKLY COLUMN ON DATE 14 JAN 2016.
                </p>
            </div>
        </div>



    );
}

export default PredictCard9;
