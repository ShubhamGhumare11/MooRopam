import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import supriya from "../Image/supriya.png";

import ankita from "../Image/ankita.png";
import aryan from "../Image/aryan.png";

const testimonials = [
    {
        name: "Dr. Ankita Singh",
        role: "Founder",
        image: ankita,
    },
    {
        name: "Aryan Donga",
        role: "Co-Founder",
        image: aryan,
    },
    {
        name: "Supriya Shetkar",
        role: "CFO",
        image: supriya,
    },
    {
        name: "Dr. Ankita Singh",
        role: "Founder",
        image: ankita,
    },
    {
        name: "Aryan Donga",
        role: "Co-Founder",
        image: aryan,
    },
    {
        name: "Supriya Shetkar",
        role: "CFO",
        image: supriya,
    }
  
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 4;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - itemsToShow : (prevIndex - itemsToShow + testimonials.length) % testimonials.length
        );
    };

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsToShow);

    return (
        <div className="max-w-full mx-auto px-4 py-12 relative font-serif overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-customBrown mb-4">Our Team</h2>
            <p className="mb-12 text-base md:text-lg text-customBrown text-center">
                In the journey of MooRopan
            </p>
            <div className="flex items-center justify-between">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="p-2 bg-orange-300 rounded-full hover:bg-orange-400 transition duration-200"
                >
                    <BiChevronLeft size={30} />
                </button>

                {/* Testimonials grid */}
                <div className="flex-grow mx-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {visibleTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-orange-100 via-white to-yellow-100 shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 transform hover:shadow-2xl"
                                style={{ width: '100%', maxWidth: '320px' }} // Removed fixed height
                            >
                                <div className="w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-orange-300">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-customBrown mb-2">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                 <button
                    onClick={nextSlide}
                    className="p-2 bg-orange-300 rounded-full hover:bg-orange-400 transition duration-200"
                >
                    <BiChevronRight size={30} />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
