import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import UMESHYADAV from "../Image/UMESHYADHAV.jpg";
import RAMANDEEP from "../Image/RAMANDEEP.jpg";
import NEHALWADHERA from "../Image/NEHALWADHERA.jpg";
import NAMAN_DHIR from "../Image/NAMAN_DHIR.jpg";
import KARAN_SHARMA from "../Image/KARAN_SHARMA.jpg";
import SUREKHA_TAI_THAKARE from "../Image/SUREKHA_TAI_THAKARE.jpg";
import SURESH_DESHMUKH from "../Image/SURESH_DESHMUKH.jpg";
import SANTOSH_MAHATME from "../Image/SANTOSH_MAHATME.jpg";
import NISHIGANDHA_WAD from "../Image/NISHIGANDHA_WAD.jpg";
import BHUSHAN_KULKARNI from "../Image/BHUSHAN_KULKARNI.jpg";
import gujrat from "../Image/gujrat.jpg";

const testimonials = [
    {
        name: "Nishigandha Wad",
        role: "Indian film & television actress, social scientist, and author",
        image: NISHIGANDHA_WAD,
    },
    {
        name: "Gujarat Giants",
        role: "Gujarat Giants, formerly Gujarat Fortune Giants, is a professional kabaddi team based in Ahmedabad,",
        image: gujrat,
    },
    {
        name: "Ramandeep Singh",
        role: "Indian cricketer",
        image: RAMANDEEP,
    },
    {
        name: "Karn Sharma",
        role: "Indian cricketer, all-rounder for the Railways cricket team, left-hand batsman and leg break bowler",
        image: KARAN_SHARMA,
    },
    {
        name: "Nehal Wadhera",
        role: "Indian cricketer, left-handed batsman and an occasional legbreak bowler, previously represented the India under-19 cricket team",
        image: NEHALWADHERA,
    },
    {
        name: "Naman Dhir",
        role: "Batting allrounder hard-hitting allrounder from Punjab and Mumbai Indians",
        image: NAMAN_DHIR,
    },
    {
        name: "Umesh Yadav",
        role: "Indian cricketer who represented the Indian cricket team, currently plays for Vidarbha in domestic cricket and Gujarat Titans",
        image: UMESHYADAV,
    },
    {
        name: "Mrs. Surekhatai Thakre",
        role: "Incharge of Nationalist Mahila Congress Maharashtra state. Former President Zila parishad Amravati district.",
        image: SUREKHA_TAI_THAKARE,
    },
    {
        name: "Santosh Mahatme",
        role: "President, Nationalist Congress Party, Amravati (Rural) Hon. Vice President, Zilla Parishad Amravati President, Rajmata Ahilyadevi Foundation, Amravati",
        image: SANTOSH_MAHATME,
    },
    {
        name: "Suresh Deshmukh",
        role: "Former member of the Indian National Congress, Member of the Maharashtra Legislative Assembly from the Wardha constituency.",
        image: SURESH_DESHMUKH,
    },
    {
        name: "Bhuushan Kulkarni",
        role: "Actor",
        image: BHUSHAN_KULKARNI,
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-customBrown mb-4">Our Clients</h2>
            <p className="mb-12 text-base md:text-lg text-customBrown text-center">
                In the journey of Auspicious Numerology
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
