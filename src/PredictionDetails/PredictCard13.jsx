import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Prediction from '../Components/Prediction';
import { useNavigate } from 'react-router-dom';
import vivoipl from "../Image/vivoipl.png"


const PredictCard13 = () => {
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
                            Vivo IPL 2016 Qualifier 2
                        </h2>
                    </div>

                    <div className="md:w-full lg:w-full p-2">
                        <img
                            src= {vivoipl}
                            alt="Hero Section"
                            className="w-full"
                        />
                    </div>

                    <p className="md:text-md lg:text-lg leading-relaxed p-2">
                        Everybody is excited for this blockbuster match so am i.
                        Who will win , who will perform and will it be a thriller ???
                        Let’s see what numbers are saying …

                        This year 2016 which comes under the effect of 2+0+1+6=(9).
                        That’s why the person belongs to number 9 are getting more success in this year.
                        Suresh raina 27th November born(9), David warner 27th October (9) born and none other than Virat kohli with jersey number 18 (9) are few captains who are about to win the first ever title for their teams.

                        Today’s prediction.
                        As today’s date is also 27=2+7=(9)
                        Its lucky for both the captains.
                        Hence we can definitely see a very close encounter. May be a nail biting finish.

                        But as per the team names Gujrat lions is having an upper hand.

                        Total score may be in the range of 170-190

                        Macculum, Raina and Amit mishra may perform from Gujrat and

                        Warner, Naman ojha and mustafijur rehman may perform from Hyderabad.
                    </p>
                </div>

            </div>
         );
}

export default PredictCard13;
