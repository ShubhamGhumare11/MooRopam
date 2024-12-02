import React from 'react';
import lokmat from "../Image/lokmat.jpg";
import lokshahi from "../Image/lokshahi.jpg";
import Navbharat from "../Image/Navbharat.jpg";
import TimesOfIndia from "../Image/TimesOfIndia.jpg";
import mgiri from "../Image/mgiri.jpg";
import wardha from "../Image/wardha.jpg";

const FeaturedOn = () => {
  return (
    <div className="bg-yellow-100 py-6">
      <div className="max-w-7xl mx-auto px-4 font-serif font-bold">
        <h2 className="text-center text-lg text-black uppercase mb-8">
          As Featured On
        </h2>
        <div className="flex justify-center flex-wrap gap-4 md:gap-6">
          <img
            src={TimesOfIndia}
            alt="Times Of India"
            className="h-16 md:h-20 w-auto "
          />
          <img
            src={lokshahi}
            alt="Lokshahi"
            className="h-16 md:h-20 w-auto "
          />
          <img
            src={mgiri}
            alt="MGIRI"
            className="h-16 md:h-20 w-auto"
          />
          <img
            src={wardha}
            alt="Wardha"
            className="h-16 md:h-20 w-auto"
          />
          <img
            src={Navbharat}
            alt="Navbharat"
            className="h-16 md:h-20 w-auto "
          />
           <img
            src={lokmat}
            alt="Lokmat"
            className="h-16 md:h-20 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
