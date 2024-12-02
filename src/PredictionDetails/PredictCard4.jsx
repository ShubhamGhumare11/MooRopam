import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Prediction from '../Components/Prediction';
import { useNavigate } from 'react-router-dom';

const PredictCard4 = () => {
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
                            Can a specific number help you achieve success?
                        </h2>
                    </div>

                    <div className="md:w-full lg:w-full p-2">
                        <img
                            src="https://cdn.newsnationtv.com/resize/460_-/images/2023/06/26/umesh-56.JPG"
                            alt="Hero Section"
                            className="w-full"
                        />
                    </div>

                    <p className="md:text-md lg:text-lg leading-relaxed p-2">
                        Despite the loss of 2nd ODI we must praise Hardik Pandya and Umesh Yadaav for playing an outstanding fighting 9th wicket 49 run stand.

                        Umesh Yadaav played his part very well with the bat and before that during kiwis batting Umesh strikes 2nd ball to give a blow to NZ at the start of the match when nearly unplayable delivery just moved enough to unroot the off stump of Martin Guptil for a Duck.

                        In 1st ODI Umesh had Ross Taylor caught for a duck by Dhoni and later took couple of mind blowing catches at mid-on off Hardik Pandya’s bowling.





                        Now , Umesh has become an integral part of the team india.
                        But in 2014, it was a different scenario.
                        He was out of the team since long time and then in March 2014 , i suggested him to change his Jersey number from 78 to 19 and to add an extra ‘A’ in his surname.
                        And then his tremendous hard work is assisted by a little push of luck and he became a regular member of indian team and become highest indian wicket taker bowler in 2015 world cup.

                        CAN A SPECIFIC NUMBER HELP TO GET THE SUCCESS YOU WANT ??
                        Yess, that’s the reason sports person’s are used to wear a specific number on their back.

                        MOST OF THE CRICKETERS ARE USING NUMEROLOGY TO IMPROVE THEIR LUCK FACTOR ALONG WITH THEIR HARD WORK.

                        #NUMEROLOGY #WORKS.


                    </p>
                </div>
            </div>
      
    );
}

export default PredictCard4;
