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
import {
  FaUserGraduate,
  FaAward,
  FaMicroscope,
  FaServicestack,
  FaStar,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SocialMediaSection from "./SocialMediaSection";
import FeaturedOn from "./FeaturedOn";
import course1 from "../Image/course1.jpg";
import course2 from "../Image/course2.jpg";
import course3 from "../Image/course3.jpg";
import course4 from "../Image/course4.jpg";
import Book from "../Image/Book.png";
import {
  newInterestedUserForNumerologyBookEmailFormat,
  sendEmailWithAttachment,
} from "../Email-service/emailSendingService";
import imagescow2 from "../Image/imagescow2.jpg";
import yearSur from "../Image/yearSur.png";
import pandya from "../Image/pandya.png";
import summit from "../Image/summit.png";
import nidhi from "../Image/nidhi.png";
import bollywood from "../Image/bollywood.png";
import service1 from "../Image/service1.jpg";
import service2 from "../Image/service2.jpg";
import service3 from "../Image/service3.jpg";
import service5 from "../Image/service5.jpg";
import eight from "../Image/eightnumber.png";
import VideoPage from "./VideoPage";

const Home = () => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [intrestedEmail, setintrestedEmail] = useState("");
  const [intrestedName, setintrestedName] = useState("");

  const nav = useNavigate();
  const navigate = useNavigate();
  const handleInterestedClick = () => {
    setShowEmailInput(true);
  };

  const handleCancelClick = () => {
    setShowEmailInput(false);
  };
  const handleStayUpdatedClick = async (e) => {
    e.preventDefault();
    const htmlEmailFormat = newInterestedUserForNumerologyBookEmailFormat({
      name: intrestedName,
      email: intrestedEmail,
    });
    await sendEmailWithAttachment(htmlEmailFormat);
    setShowEmailInput(false);
    setintrestedEmail("");
    setintrestedName("");
  };
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

  const handleCardClick = (id) => {
    nav(`/subcard/${id}`);
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
      <VideoPage/>

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
        <div className="bg-gradient-to-r from-lime-300 to-transparent relative overflow-hidden p-2 md:p-6 mt-2 flex flex-col lg:flex-row items-center lg:items-start rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out w-full h-screen max-w-screen">
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
            <div className="mt-6 md:mt-8 lg:mt-8 inline-flex rounded-md shadow-lg">
              <button
                onClick={handleInterestedClick}
                className="py-3 px-6 bg-customOrange hover:bg-orange-600 focus:ring-customBrown focus:ring-offset-customOrange text-white transition-transform transform-gpu hover:scale-105 duration-300 text-center text-base font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Enter your Email
              </button>
            </div>
            {showEmailInput && (
              <div className="mt-6 md:mt-8 bg-gray-50 p-4 md:p-5 rounded-lg shadow-inner">
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Enter your Name:
                </label>
                <input
                  onChange={(e) => {
                    setintrestedName(e.target.value);
                  }}
                  className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customOrange transition-shadow shadow-sm hover:shadow-lg"
                  placeholder="Name"
                />
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Enter your email:
                </label>
                <input
                  onChange={(e) => {
                    setintrestedEmail(e.target.value);
                  }}
                  className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customOrange transition-shadow shadow-sm hover:shadow-lg"
                  placeholder="you@example.com"
                />

                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <button
                    onClick={handleStayUpdatedClick}
                    className="py-2 px-4 sm:py-2 sm:px-5 bg-customOrange hover:bg-orange-500 focus:ring-customBrown focus:ring-offset-customOrange text-white transition-transform transform-gpu hover:scale-105 duration-300 text-center text-base font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-2 sm:mb-0"
                  >
                    Stay Updated
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="py-2 px-4 sm:py-2 sm:px-5 bg-gray-400 hover:bg-gray-500 text-white transition-transform transform-gpu hover:scale-105 duration-300 text-center text-base font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
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

      <SocialMediaSection />

      <div className="text-gray-600 body-font font-serif bg-lime-200">
        <div className="py-7 px-6 md:px-10 lg:px-20 mt-5 font-serif bg-cover bg-center mb-6">
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
                <a href="#" onClick={() => handleCardClick(1)}>
                  <img
                    className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56 "
                    src={Mastimed}
                    alt="service image"
                  />
                </a>
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

                  {/* Button Section */}
                  {/* <a
                    href="#"
                    className="flex items-center justify-center w-full rounded-lg bg-golden  focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center text-white mt-5 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add To Cart
                  </a> */}
                </div>
              </div>

              <div className="w-full max-w-sm bg-white border border-golden rounded-lg shadow-lg">
                <a href="#" onClick={() => handleCardClick(2)}>
                  <img
                    className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56"
                    src={soilropan}
                    alt="service image"
                  />
                </a>
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
                <a href="#" onClick={() => handleCardClick(3)}>
                  <img
                    className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56 "
                    src={Mastimed}
                    alt="service image"
                  />
                </a>
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

                  {/* Button Section */}
                  {/* <a
                    href="#"
                    className="flex items-center justify-center w-full rounded-lg bg-golden  focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center text-white mt-5 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add To Cart
                  </a> */}
                </div>
              </div>

              <div className="w-full max-w-sm bg-white border border-golden rounded-lg shadow-lg ">
                <a href="#" onClick={() => handleCardClick(5)}>
                  <img
                    className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56 "
                    src={soilropan}
                    alt="service image"
                  />
                </a>
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

                  {/* Button Section */}
                  {/* <a
                    href="#"
                    className="flex items-center justify-center w-full rounded-lg bg-golden  focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center text-white mt-5 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add To Cart
                  </a> */}
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

          {/* <div className="text-end mt-8">
            <button
              onClick={handleServices}
              className="bg-customBrown text-white font-semibold py-3 px-6 rounded-full hover:bg-customOrange transition-colors duration-300"
            >
              Explore All Services →
            </button>
          </div> */}
        </div>
      </div>

      {/* <div className="pt-4 pb-16 bg-white text-black font-serif">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl text-center">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-customBrown">
              Our Courses
            </h2>
            <p className="mt-3 text-lg text-customOrange">
              Discover insights and courses designed to guide you through life's
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="https://pgtlm.courses.store/436648"
              target="_blank"
              className="flex flex-col md:flex-row bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                className="object-cover w-full md:w-64 h-[200px] md:h-[250px] md:rounded-l-lg border-b md:border-b-0 md:border-r border-gray-200"
                src={course2}
                alt="Auspicious Numerology LIFETIME"
              />
              <div className="flex flex-col justify-between p-4 w-full">
                <h5 className="mb-2 text-xl sm:text-2xl font-bold text-gray-900">
                  Auspicious Numerology LIFETIME
                </h5>
                <h6 className="mb-2 text-lg sm:text-xl font-semibold text-amber-600">
                  Basic to Advance
                </h6>
                <p className="text-lg font-bold text-gray-800 mr-2">
                  Starts at
                </p>
                <p className="text-gray-700">
                  <span className="line-through text-black mr-2 font-bold">
                    INR 28,000
                  </span>
                  <span className="text-customBrown text-xl font-bold">
                    INR 9,199 /-
                  </span>
                </p>
                <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
                  Enroll Now
                </button>
              </div>
            </a>

            <a
              href="https://pgtlm.courses.store/160862"
              target="_blank"
              className="flex flex-col md:flex-row bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                className="object-cover w-full md:w-64 h-[200px] md:h-[250px] md:rounded-l-lg border-b md:border-b-0 md:border-r border-gray-200"
                src={course3}
                alt="Auspicious Numerology Course"
              />
              <div className="flex flex-col justify-between p-4 w-full">
                <h5 className="mb-2 text-xl sm:text-2xl font-bold text-gray-900">
                  Auspicious Numerology Course
                </h5>
                <h6 className="mb-2 text-lg sm:text-xl font-semibold text-amber-600">
                  Basic to Advance
                </h6>
                <p className="text-lg font-bold text-gray-800 mr-2">
                  Starts at
                </p>
                <p className="text-gray-700">
                  <span className="line-through text-gray-900 mr-2 font-bold">
                    INR 5,599
                  </span>
                  <span className="text-customBrown text-xl font-bold">
                    INR 4,599 /-
                  </span>
                </p>
                <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
                  Enroll Now
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/*       <div className="pt-4 pb-16 bg-white text-black font-serif">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl text-center">
          <div className="text-center flex flex-col items-center justify-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-customBrown mb-8">
              Upcoming Course
            </h2>

            <a
              href="#"
              className="mt-2 block max-w-lg w-full p-12 bg-gradient-to-r from-amber-50 via-white to-amber-100 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                How to Succeed in Business / Business Numerology
              </h5>
              <p className="font-normal text-amber-600 dark:text-gray-400">
                Discover how business numerology can help you make strategic decisions, optimize your financial outcomes, and gain a competitive edge in the business world. Learn the secret numbers behind success!
              </p>
            </a>
          </div>
        </div>
      </div>
 */}
      {/* <section className="bg-amber-600 text-black font-serif py-2">
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8  bg-amber-200">
          <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
            <div className="text-center">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-customBrown mb-8">
                  Upcoming Course
                </h2>
                <h2 className=" max-w-lg mb-6 font-serif text-3xl font-bold leading-none tracking-tight text-[#000000] sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-[#FAFAFA] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="b039bae0-fdd5-4311-b198-8557b064fce0"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">How to Succeed in</span>
                  </span>{" "}
                  Business / Business Numerology
                </h2>
                <p className="text-base text-[#6A4A00] md:text-lg">
                  Discover how business numerology can help you make strategic
                  decisions, optimize your financial outcomes, and gain a
                  competitive edge in the business world. Learn the secret
                  numbers behind success!
                </p>
              </div>

              <p className="max-w-md mx-auto mb-10 text-xs text-[#6A4A00] sm:text-sm md:mb-10">
                Limited seats available. Don't miss your chance to transform
                your business!
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <Testimonials />

      <section className="bg-customLightOrange text-black font-serif py-2">
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

          {/* <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mumbai terror attacks and numerology behind it",
                date: "January 21, 2021",
                description:
                  "⁠⁠⁠On the eve of sixth anniversary of MUMBAI TERROR ATTACK wanna share something about number 26 and number 8. Dangerous number 8 This year 17 July 2014 Malaysia Airlines flight MH17 has crashed in Ukraine...",
                imgSrc:
                  "https://static.tnn.in/thumb/msid-105505021,thumbsize-839491,width-1280,height-720,resizemode-75/105505021.jpg?quality=100",
              },
              {
                title: "Romantic Bollywood couple and their numerology",
                date: "January 22, 2021",
                description:
                  "Bollywood, the heart of Indian cinema, has given rise to legendary on-screen couples whose chemistry transcends the boundaries of the silver screen...",
                imgSrc: bollywood,
              },
              {
                title: "Dangerous number 8",
                date: "January 23, 2021",
                description:
                  "If you observe my posts about number 8 … You will come to know that I consider this number as a dangerous number … I used to warn all 8 number peoples to be cautious and carefull on these dates 8,17 and 26 ….",
                imgSrc: eight,
              },
            ].map((post, index) => (
              <a
                key={index}
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline text-black shadow-lg bg-white rounded"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded-t h-44 bg-gray-500"
                  src={post.imgSrc}
                  alt={post.title}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-customBrown">
                    {post.title}
                  </h3>
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <p>{post.description}</p>
                </div>
              </a>
            ))}
          </div> */}
          

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
        <img
        src={cowart}>
        
        </img>
      </section>

      <section className="text-gray-600 body-font bg-gradient-to-r from-lime-500 to-blue-950 py-3">
        <div className="container px-6 py-10 mx-auto font-serif">
          <div className="flex flex-wrap justify-center text-center">
            <div className="p-4 w-full sm:w-1/4">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold text-white mb-2"> 15 K</h2>
                <p className="leading-relaxed text-gray-200 text-lg font-semibold">
                  
                </p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/4">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold text-white mb-2"> 1700</h2>
                <p className="leading-relaxed text-gray-200 text-lg font-semibold">
                  Cattel Cure
                </p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/4">
              <div className="flex flex-col items-center justify-center">
                {/* Subscribers in thousands */}
                <h2 className="text-5xl font-bold text-white mb-2"> 125 k</h2>
                <p className="leading-relaxed text-gray-200 text-lg font-semibold">
                  Happy Farmers
                </p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/4">
              <div className="flex flex-col items-center justify-center">
                {/* Total Views in millions */}
                <h2 className="text-5xl font-bold text-white mb-2"> 19.7 B</h2>
                <p className="leading-relaxed text-gray-200 text-lg font-semibold">
                  Happy Coustomers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 
      <section className="py-8 bg-white text-black font-serif">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-customBrown">
            Reasons to Trust
          </h2>
          <p className="mt-4 text-lg text-customBrown">
            Discover the unique blend of expertise, experience, and commitment
            that sets Dr. Sumiit Messhram apart.
          </p>
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {[
            {
              title: "Expertise",
              description:
                "Dr. Sumiit Messhram brings a unique blend of medical knowledge and numerological expertise, offering a scientific and holistic approach to numerology.",
              icon: <FaUserGraduate className="text-customOrange w-10 h-10" />,
              additionalInfo:
                "With over 20 years of experience, Dr. Messhram's guidance has positively impacted countless lives.",
            },
            {
              title: "Proven Track Record",
              description:
                "With a history of accurate predictions, Dr. Messhram has earned the trust of renowned personalities, including international cricketers and politicians.",
              icon: <FaAward className="text-customBrown w-10 h-10" />,
              additionalInfo:
                "His predictions have guided key decisions in the careers of many high-profile individuals.",
            },
            {
              title: "Scientific Approach",
              description:
                "Our numerological analyses are based on rigorous calculations rather than mysticism, ensuring logical and reasonable predictions.",
              icon: <FaMicroscope className="text-golden w-10 h-10" />,
              additionalInfo:
                "Every analysis is backed by data and a deep understanding of numerological principles.",
            },
            {
              title: "Diverse Services",
              description:
                "Dr. Sumiit Messhram brings a unique blend of medical knowledge and numerological expertise, offering a scientific and holistic approach to numerology.",
              icon: (
                <FaServicestack className="text-customLightOrange w-10 h-10" />
              ),
              additionalInfo:
                "From personal consultations to corporate advice, Dr. Messhram offers a wide range of services.",
            },
            {
              title: "Celebrity Clientele",
              description:
                "Dr. Messhram has successfully guided well-known individuals, including movie stars, athletes, and politicians, with his numerological insights.",
              icon: <FaStar className="text-customOrange w-10 h-10" />,
              additionalInfo:
                "His insights have been sought after by some of the most influential figures in various industries.",
            },
            {
              title: "Commitment to Education",
              description:
                "Beyond numerology, Dr. Messhram is a multifaceted individual actively involved in education and social work, demonstrating his commitment to making a positive impact.",
              icon: (
                <FaChalkboardTeacher className="text-customBrown w-10 h-10" />
              ),
              additionalInfo:
                "He regularly conducts workshops and seminars to share his knowledge and empower others.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white text-black rounded-lg shadow-lg"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mt-4 text-customBrown">
                {item.title}
              </h3>
              <p className="text-center mt-2">{item.description}</p>
              <p className="text-sm mt-2 text-customBrown">
                {item.additionalInfo}
              </p>
            </div>
          ))}
        </div>
        <div className="container mx-auto text-center mt-12">
          <Link
            to="/contact"
            className="px-8 py-3 bg-customOrange text-white font-semibold rounded hover:bg-customBrown transition duration-300"
          >
            Contact Dr. Messhram Today
          </Link>
        </div>
      </section> */}
      
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
