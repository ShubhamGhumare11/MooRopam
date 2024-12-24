import React, { useEffect, useState } from "react";
// import herosection from "../Image/herosection.jpg";
import Testimonials from "./Testimonials";
import Chatbot from "./Chatbot";
import cow from "../Image/cow.jpg";
import cow2 from "../Image/cow2.jpg";
import cow3 from "../Image/cow3.jpg";
import mainpagephoto from "../Image/mainpagephoto.png";
// import slide4 from "../Image/slide4.jpg";
import soilropan from "../Image/SiloRopan.png";
import Mastimed from "../Image/Mastimed.png";
import grass from "../Image/grass.jpg";
import cowart from "../Image/cowart.png"

import { Link, useNavigate } from "react-router-dom";
import SocialMediaSection from "./SocialMediaSection";
import FeaturedOn from "./FeaturedOn";


import VideoPage from "./VideoPage";

const Home = () => {
 
  const nav = useNavigate();
  const navigate = useNavigate();

  

  // services
  const handlepredictions = () => {
    nav("/prediction");
  };
  const handleServices = () => {
    nav("/services");
  };

  const handleBlogs = () => {
    nav("/blogs");
  };



  const handlePredictCardClick = (id) => {
    navigate(`/prediction/${id}`);
  };

  const slides = [cow, cow2, cow3, mainpagephoto, cow];
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className=" ">
      <Chatbot />

      <div className="relative w-full bg-orange-200">
        <div
          id="default-carousel"
          className="relative w-full bg-orange-200"
          data-carousel="slide"
        >
          {/* Carousel Wrapper */}
          <div className="relative h-[450px] overflow-hidden rounded-lg md:h-[500px]  ">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`duration-700 ease-in-out ${
                  index === currentSlide ? "block" : "hidden"
                }`}
                data-carousel-item
              >
                <img
                  src={slide}
                  className="absolute block w-full h-full object-cover top-0 left-0"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Previous Button */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          {/* Next Button */}
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      <FeaturedOn />
      <VideoPage />

      <div className="flex flex-col md:flex-row items-center mt-4 md:mt-8 px-4 md:px-8 lg:px-12  ">
        <div className="flex-1 p-4 sm:p-6 md:p-10 lg:p-12 mb-10 font-serif">
          <h2 className="text-md md:text-xl lg:text-3xl font-bold text-yellow-600">
            Cattel HealthCare Consultation
          </h2>
          <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl mx-auto p-2">
            MooRopan India Pvt. Ltd. was established with the motive of
            "Gau-swasthayam Rakshatu" in May 2023. We provide cattle healthcare
            aid/ devices, services and consultations pan India.
          </p>
        </div>
        <div className="flex-1  my-11">
          <div className="relative w-full max-w-xl mx-auto border-4 border-yellow-600 rounded-lg shadow-xl overflow-hidden">
            <a
              href="https://youtu.be/4QqkWmI_kX0?si=sr8dN2R8xWMuIe6g"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <div className="relative w-full h-60 md:h-72 lg:h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/4QqkWmI_kX0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        className="p-6 md:p-8 font-normal"
        style={{
          backgroundImage: `url(${grass})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center mb-10">
          <h2 className="text-gray-900 text-4xl font-extrabold md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">
              Best Products for Cattel HealthCare
            </span>
          </h2>
        </div>

        {/* Single Div Wrapper for Everything */}
        <div className="bg-gradient-to-r from-lime-300 to-transparent relative overflow-hidden p-2 md:p-6 mt-2 flex flex-col lg:flex-row items-center lg:items-start rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out w-full  max-w-screen">
         {/* Content Section */}
          <div className="w-full lg:w-3/5 py-6 md:py-8 px-4 md:px-6 lg:py-14 lg:px-10 z-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-900 mb-4 md:mb-5">
              <span className="block">MooRopan India Pvt. Ltd.</span>
              <span className="block text-orange-900">
                Cattel Health Care Consultation
              </span>
            </h2>
            <p className="text-base md:text-xl lg:text-lg mt-2 mb-6 md:mb-8 text-red-500 leading-relaxed">
              Our products facilitate better management of herd. Our affordable
              products reduce cow morbidity, enhance milk quantity and quality.
            </p>
            <p className="text-base md:text-lg lg:text-base mb-6 md:mb-8 text-black">
              <strong className="text-orange-900 text-2xl">
                Subscribe Up For UpComming New Products And updates
              </strong>
              <br />
              Sign up now to receive exclusive updates and a special early-bird
              offer.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full h-full lg:w-2/5 lg:h-[500px] lg:flex-shrink-0 mb-6 lg:mb-0 relative">
            <img
              src={soilropan}
              className="w-full h-full lg:h-[500px] object-contain rounded-lg transition-transform transform-gpu hover:scale-105 duration-300"
              alt="Book Cover"
            />
          </div>

          <div className="absolute inset-0 pointer-events-none"></div>
        </div>
      </div>

      {/* ------------------------ */}

      <div className="py-8 bg-lime-200 text-black font-serif ">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl text-center">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-customBrown">
              Our Research Products
            </h2>
            <p className="mt-3 text-base text-customBrown">
              One of the Best and low Cost Products Compare to Other Products{" "}
            </p>
          </div>
 
          <div className="flex flex-wrap justify-start -mx-2">
            <div
              className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4"
              onClick={() => handlePredictCardClick(3)}
            >
              <div className="relative bg-gradient-to-r from-customOrange to-customBrown shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden h-full flex flex-col">
                <img
                  className="h-40 w-full object-cover transition-opacity duration-300 hover:opacity-90"
                  src={soilropan}
                  alt="Prediction Image"
                />
 
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-40"></div>
                <div className="relative bg-white p-3 flex-grow flex flex-col">
                  <h1 className="text-customBrown font-bold text-lg mb-1 transition-colors duration-300 hover:text-customOrange cursor-pointer">
                    SoilRopan
                  </h1>
                  <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                    Mastitis is udder inflammation in cows resultant of
                    bacterial infection.
                  </p>
                  <p className="text-customOrange mt-3 italic border-l-4 border-customLightOrange pl-3 text-sm">
                    "Conventionally dairy farmers depend on animal veterinarian
                    for diagnosing and prescription of antibiotics for mastitis
                    treatment in cows."
                  </p>
                  <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
 
            <div
              className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4"
              onClick={() => handlePredictCardClick(1)}
            >
              <div className="relative bg-gradient-to-r from-customOrange to-customBrown shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden h-full flex flex-col">
                <img
                  className="h-40 w-full object-cover transition-opacity duration-300 hover:opacity-90"
                  src={Mastimed}
                  alt="Prediction Image"
                />
 
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-40"></div>
                <div className="relative bg-white p-3 flex-grow flex flex-col">
                  <h1 className="text-customBrown font-bold text-lg mb-1 transition-colors duration-300 hover:text-customOrange cursor-pointer">
                    Mastitis is udder inflammation in cows resultant of
                    bacterial infection{" "}
                  </h1>
                  <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                    Conventionally dairy farmers depend on animal veterinarian
                    for diagnosing and prescription of antibiotics for mastitis
                    treatment in cows.{" "}
                  </p>
                  <p className="text-customOrange mt-3 italic border-l-4 border-customLightOrange pl-3 text-sm">
                    Our product is ethno veterinarian formulation (EVF),
                    traditional remedies backed by scientific studies on
                    bacterial causatives of the disease.{" "}
                  </p>
                  <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
 
            <div
              className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4"
              onClick={() => handlePredictCardClick(2)}
            >
              <div className="relative bg-gradient-to-r from-customOrange to-customBrown shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden h-full flex flex-col">
                <img
                  className="h-40 w-full object-cover transition-opacity duration-300 hover:opacity-90"
                  src={soilropan}
                  alt="Prediction Image"
                />
 
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-40"></div>
                <div className="relative bg-white p-3 flex-grow flex flex-col">
                  <h1 className="text-customBrown font-bold text-lg mb-1 transition-colors duration-300 hover:text-customOrange cursor-pointer">
                    SoilRopan{" "}
                  </h1>
                  <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                    Conventionally dairy farmers depend on animal veterinarian
                    for diagnosing and prescription of antibiotics for mastitis
                    treatment in cows.{" "}
                  </p>
                  <p className="text-customOrange mt-3 italic border-l-4 border-customLightOrange pl-3 text-sm">
                    Our product is ethno veterinarian formulation (EVF),
                    traditional remedies backed by scientific studies on
                    bacterial causatives of the disease.{" "}
                  </p>
                  <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
 
            <div
              className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4"
              onClick={() => handlePredictCardClick(5)} // Move onClick here
            >
              <div className="relative bg-gradient-to-r from-customOrange to-customBrown shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden h-full flex flex-col cursor-pointer">
                <img
                  className="h-40 w-full object-cover transition-opacity duration-300 hover:opacity-90"
                  src={Mastimed}
                  alt="Numerology Success"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-40"></div>
                <div className="relative bg-white p-3 flex-grow flex flex-col">
                  <h1 className="text-customBrown font-bold text-lg mb-1 transition-colors duration-300 hover:text-customOrange cursor-pointer">
                    Mastimed{" "}
                  </h1>
                  <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                    Mastitis is udder inflammation in cows resultant of
                    bacterial infection.{" "}
                  </p>
                  <p className="text-customOrange mt-3 italic border-l-4 border-customLightOrange pl-3 text-sm">
                    "Conventionally dairy farmers depend on animal veterinarian
                    for diagnosing and prescription of antibiotics for mastitis
                    treatment in cows."{" "}
                  </p>
                  <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          {/* Centered 'See All Predictions' Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handlepredictions}
              className="bg-lime-400 text-white font-semibold py-3 px-6 rounded-full hover:bg-customOrange transition-colors duration-300"
            >
              See All Products →
            </button>
          </div>
        </div>
      </div>
      {/* --------------------------------- */}

     

      {/* ----------------------------------------- */}

      <div className="text-gray-600 body-font font-serif bg-lime-200">
        <div className="py-7 px-6 md:px-10 lg:px-20  font-serif bg-cover bg-center mb-6">
          <div className="flex flex-col text-center w-full mb-2 md:mb-6">
            <h2 className="text-4xl font-bold text-customBrown">
              Explore Our Services
            </h2>
            <p className="mt-4 text-lg text-customBrown">
              MooRopan India Pvt. Ltd. was established with the motive of
              "Gau-swasthayam Rakshatu" in May 2023. We provide cattle
              healthcare aid/ devices, services and consultations pan India.{" "}
            </p>
          </div>

          <div className="px-4 md:px-8 lg:px-16 py-8 font-serif mt-4">
            <h2 className="text-4xl font-bold text-customBrown mb-4 text-center">
              Services we Provide
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="w-full max-w-sm bg-white border border-golden rounded-lg shadow-lg ">
                <Link to="/services">
                  <img
                    className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56"
                    src={Mastimed}
                    alt="Mastimed Service"
                  />
                </Link>

                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900   truncate">
                      Mastimed
                    </h5>
                  </a>
                  <h3 className="text-black   mb-1 italic line-clamp-2 text-sm">
                    {/* {item.subTitle} */}
                  </h3>

                  {/* Ratings Section */}
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg
                        // key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        // key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        // key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        // key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded   ms-3">
                      5.0
                    </span>
                  </div>

                  {/* Pricing Section */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900  ">
                      INR 1,900/-
                    </span>
                    <span className="text-xs text-slate-900">
                      (Duration: 25-30 Days )
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-sm bg-white border border-golden rounded-lg shadow-lg">
              <Link to="/services">
                  <img
                    className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56"
                    src={soilropan}
                    alt="service image"
                  />
               </Link>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate">
                      SoilRopan{" "}
                    </h5>
                  </a>
                  <h3 className="text-black mb-1 italic line-clamp-2 text-sm">
                    {/* {item.subTitle} */}
                  </h3>

                  {/* Ratings Section */}
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-200"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                      5.0
                    </span>
                  </div>

                  {/* Pricing Section */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      INR 1,900/-
                    </span>
                    <span className="text-xs text-slate-900">
                      (Duration: 25-30 Days)
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-sm bg-white border border-golden rounded-lg shadow-lg ">
              <Link to="/services">
                  <img
                    className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56 "
                    src={Mastimed}
                    alt="service image"
                  />
                </Link>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900   truncate">
                      Mastimed{" "}
                    </h5>
                  </a>
                  <h3 className="text-black   mb-1 italic line-clamp-2 text-sm">
                    {/* {item.subTitle} */}
                  </h3>

                  {/* Ratings Section */}
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg
                        // key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        // key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        // key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        // key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                      5.0
                    </span>
                  </div>

                  {/* Pricing Section */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900  ">
                      INR 1,900/-
                    </span>
                    <span className="text-xs text-slate-900">
                      (Duration: 25-30 Days )
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-sm bg-white border border-golden rounded-lg shadow-lg ">
              <Link to="/services">
                  <img
                    className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56 "
                    src={soilropan}
                    alt="service image"
                  />
              </Link>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900   truncate">
                      SoilRopan{" "}
                    </h5>
                  </a>
                  <h3 className="text-black   mb-1 italic line-clamp-2 text-sm">
                    {/* {item.subTitle} */}
                  </h3>

                  {/* Ratings Section */}
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg
                        // key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        // key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        // key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        // key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-200  "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded   ms-3">
                      5.0
                    </span>
                  </div>

                  {/* Pricing Section */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900  ">
                      INR 2,800/-
                    </span>
                    <span className="text-xs text-slate-900">
                      (Duration: 25-30 Days )
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleServices}
              className="bg-customBrown text-white font-semibold py-3 px-6 rounded-full hover:bg-customOrange transition-colors duration-300"
            >
              Explore All Services →
            </button>
          </div>
        </div>
      </div>

      {/* --------------------------------------------- */}

      <Testimonials />

      <section className="bg-lime-200 text-black font-serif py-2">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h2 className="text-4xl font-bold text-customBrown">
              Read Our Blogs
            </h2>
          </div>

          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 text-black shadow-lg"
          >
            <img
              src={Mastimed}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5 bg-white rounded-r">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-customBrown">
                Mastitis is udder inflammation in cows resultant of bacterial
                infection.
              </h3>
              <span className="text-xs text-gray-500">February 19, 2021</span>
              <p>
                Conventionally dairy farmers depend on animal veterinarian for
                diagnosing and prescription of antibiotics for mastitis
                treatment in cows. Our product is ethno veterinarian formulation
                (EVF), traditional remedies backed by scientific studies on
                bacterial causatives of the disease......
              </p>
            </div>
          </a>

          <div className="flex justify-center">
            <button
              onClick={handleBlogs}
              type="button"
              className="bg-customBrown text-white font-semibold py-3 px-6 rounded-full hover:bg-customOrange transition-colors duration-300"
            >
              Read more posts...
            </button>
          </div>
        </div>
      </section>
      <section>
        <img src={cowart}></img>
      </section>

      <section className="text-gray-600 body-font bg-lime-100 py-8">
  <div className="container mx-auto px-6 py-10 font-serif">
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-gray-700 tracking-wide mb-4">
        Our Achievements
      </h1>
      <p className="text-lg text-gray-600">
        Trusted by thousands of farmers and veterinarians across the country.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 bg-blue-300">
        <div className="flex items-center justify-center bg-white bg-opacity-20 w-20 h-20 rounded-full mb-4">
          <span className="text-white text-5xl font-bold">🌾</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-2">15 K</h2>
        <p className="text-white font-medium text-lg">Farmers Reached</p>
      </div>
      {/* Card 2 */}
      <div className="p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 bg-orange-300">
        <div className="flex items-center justify-center bg-white bg-opacity-20 w-20 h-20 rounded-full mb-4">
          <span className="text-white text-5xl font-bold">🐄</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-2">1700</h2>
        <p className="text-white font-medium text-lg">Cattle Cure</p>
      </div>
      {/* Card 3 */}
      <div className="p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 bg-purple-300">
        <div className="flex items-center justify-center bg-white bg-opacity-20 w-20 h-20 rounded-full mb-4">
          <span className="text-white text-5xl font-bold">😊</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-2">125 K</h2>
        <p className="text-white font-medium text-lg">Happy Farmers</p>
      </div>
      {/* Card 4 */}
      <div className="p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 bg-red-300">
        <div className="flex items-center justify-center bg-white bg-opacity-20 w-20 h-20 rounded-full mb-4">
          <span className="text-white text-5xl font-bold">🌟</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-2">19.7 B</h2>
        <p className="text-white font-medium text-lg">Happy Customers</p>
      </div>
    </div>
  </div>
</section>

<SocialMediaSection />



    </div>
  );
};

const CountUp = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      start += increment;
      setCount(start);

      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <h2 className="text-5xl font-bold text-white mb-2">{count}</h2>;
};

export default Home;
