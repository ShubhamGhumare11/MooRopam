import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Prediction from '../Components/Prediction';
import { useNavigate } from 'react-router-dom';
import pandya from "../Image/pandya.png"
const PredictCard2 = () => {
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
            Number six and its significance on Indian cricket
          </h2>
        </div>

        <div className="md:w-full lg:w-full p-2">
          <img
            src= {pandya}
            alt="Hero Section"
            className="w-full"
          />
        </div>

        <p className="md:text-md lg:text-lg leading-relaxed p-2">
          INDORE: Cricket is a game of numbers. Runs, wickets, averages, strike rate, economy, records all are numbers. The cricketers these days are mindful of what number of jersey they wear. Though none of them accepts it publicly, they follow certain suggested by numerologists.
          Nagpur based numerologist Sumiit Messhram, who was in Indore on Saturday, said number 6 has a great significance to the Indian cricket. “Number 6 is very lucky for India. India with the date of independence August 15 ruled by 1+5=6 and name number 3 are always lucky for Team India. Whether it’s calender year or date of the match if total is 6 or 3, India have an advantage. A great example is 1983 World Cup with total 1+9+8+3= 21= 2+1= 3. It was also the third world cup. The final score also 183= 1+8+3=12=1+2=3,” Messhram, who claims to have given numerological tips to fast bowler Umesh Yadav, told TOI.

          Messhram also claims to have given tips to other India A and domestic cricketers. Messhram, a physiotherapist by profession, said 6, 15, 24, 3, 12, 21, 30 dates are lucky for Team India. “Numbers can also predict whether you can win or lose. No, it’s not statistics it’s numerology. Believe it or not numbers follow us,” he said.
          “India won the Twenty20 World Cup defeating Pakistan on September 24, 2007. The total of which is 6. The historical Kolkata Test, which India won after being asked to follow on, started on March 15, 2001. The first ODI double century, hit by master blaster Sachin Tendulkar, came on February 24, 2010 against South Africa…..
        </p>
      </div>
    </div>
   
  );
}

export default PredictCard2;
