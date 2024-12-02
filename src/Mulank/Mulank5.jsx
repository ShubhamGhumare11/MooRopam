import React from "react";
import Chatbot from "../Components/Chatbot";

const Mulank5 = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-serif">
            <Chatbot />

            {/* Hero Section with Video */}
            <div className="flex flex-col md:flex-row items-center mt-8 px-4 md:px-10 lg:px-16 space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex-1 mb-4 md:mb-0">
                    <div className="relative w-full max-w-xl mx-auto border-4 border-yellow-600 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                        <a
                            href="https://www.youtube.com/watch?v=GL4oAHVX0Zw&list=PL1YttRNjTS7OCEVjsP-2Iy724UqAEUxO-&index=4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full"
                        >
                            <div className="relative w-full h-60 md:h-72 lg:h-80 bg-gray-300 rounded-lg overflow-hidden">
                                <iframe
                                    className="w-full h-full object-cover"
                                    src="https://www.youtube.com/embed/GL4oAHVX0Zw"
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

            <div className="flex justify-center items-center h-full mt-6"> {/* Flex container for centering */}
                <a href='https://www.youtube.com/@AuspiciousNumerology' target='_blank'>
                    <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 flex items-center justify-center">
                        <svg
                            className="w-6 h-6 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-4.214A2.021 2.021 0 0016.61 12H7.39a2.021 2.021 0 00-1.985 1.786L4 17h5m6 0V5a3 3 0 10-6 0v12m6 0a2 2 0 01-2 2 2 2 0 01-2-2m4 0H9"
                            ></path>
                        </svg>
                        Subscribe Now
                    </button>
                </a>
            </div>

            <div className="relative flex flex-col items-center px-6 md:px-12 lg:px-20 py-12 bg-white  rounded-lg mt-8 mx-4 md:mx-0">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-600 text-center mb-4">
                    Mulank 5 / Birth No. 5 / Numerology - BEST EVER Description
                </h1>
                <div className="text-gray-700 text-center md:text-left space-y-4">
                    <p className="md:text-lg lg:text-xl leading-relaxed px-2">
                        Individuals born on the 5th of any month are ruled by the planet Mercury, which symbolizes communication, adaptability, and intellect. Mulank 5 individuals are known for their vibrant and dynamic personalities, often characterized by their curiosity and love for freedom. They thrive in environments that allow them to explore new ideas and experiences, making them natural adventurers and innovators.
                    </p>
                    <p className="md:text-lg lg:text-xl leading-relaxed px-2">
                        These individuals possess exceptional communication skills and are often able to express their thoughts and ideas with clarity and charm. Their sociable nature allows them to connect with a wide range of people, making them well-liked in social settings. However, their desire for change and variety can sometimes lead to restlessness, making it essential for them to find a balance between their need for freedom and their commitments.
                    </p>
                    <p className="md:text-lg lg:text-xl leading-relaxed px-2">
                        In relationships, Mulank 5 individuals value their independence but also seek partners who can match their enthusiasm for life. They are adaptable and open-minded, often embracing new experiences with their loved ones. By learning to commit while still enjoying their freedom, they can create fulfilling and exciting relationships that foster growth and mutual understanding. Overall, their charismatic and adventurous spirit makes them influential figures who inspire those around them to embrace change and pursue their passions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mulank5;
