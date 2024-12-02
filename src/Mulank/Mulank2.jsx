import React from "react";
import Chatbot from "../Components/Chatbot";

const Mulank2 = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-serif">
            <Chatbot />

            {/* Hero Section with Video */}
            <div className="flex flex-col md:flex-row items-center mt-8 px-4 md:px-10 lg:px-16 space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex-1 mb-4 md:mb-0">
                    <div className="relative w-full max-w-xl mx-auto border-4 border-yellow-600 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                        <a
                            href="https://www.youtube.com/watch?v=7j-MyiPpyMI&list=PL1YttRNjTS7OCEVjsP-2Iy724UqAEUxO-&index=3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full"
                        >
                            <div className="relative w-full h-60 md:h-72 lg:h-80 bg-gray-300 rounded-lg overflow-hidden">
                                <iframe
                                    className="w-full h-full object-cover"
                                    src="https://www.youtube.com/embed/7j-MyiPpyMI"
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
                    Mulank 2 / Birth No. 2 / Numerology - BEST EVER Description
                </h1>
                <div className="text-gray-700 text-center md:text-left space-y-4">
                    <p className="md:text-lg lg:text-xl leading-relaxed px-2">
                        Individuals born on the 2nd of any month are governed by the Moon, which embodies emotions, intuition, and a deep sense of empathy. Mulank 2 individuals are naturally sensitive and tend to thrive in harmonious environments. They excel in roles where they can mediate and foster cooperation, as their gentle and diplomatic approach often helps resolve conflicts peacefully. These individuals value relationships and often put others' needs before their own, making them caring and supportive companions.
                    </p>
                    <p className="md:text-lg lg:text-xl leading-relaxed px-2">
                        Their emotional intelligence is one of their greatest strengths, but it can also be a source of vulnerability. Mulank 2 people may struggle with mood swings, self-doubt, or a tendency to overthink. At times, they may find it difficult to make decisions quickly, as they often weigh every possible outcome. However, when they learn to trust their instincts and balance their emotions with reason, they can make wise, intuitive choices that benefit everyone around them.
                    </p>
                    <p className="md:text-lg lg:text-xl leading-relaxed px-2">
                        In personal relationships, Mulank 2 individuals are nurturing and loyal, always striving to create a loving and supportive environment. They tend to avoid confrontation and prefer to maintain peace, which can sometimes lead them to suppress their own needs. Learning to assert themselves while maintaining their compassionate nature is key to their personal growth.
                    </p>
                    <p className="md:text-lg lg:text-xl leading-relaxed px-2">
                        Overall, Mulank 2 individuals are gentle souls with a unique ability to bring balance and harmony wherever they go. When they overcome their inner fears and harness their emotional power, they can become inspiring leaders and trusted advisors, capable of guiding others with both wisdom and kindness.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mulank2;
