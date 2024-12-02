import React from 'react';
import { FaTwitter, FaFacebookSquare, FaYoutube, FaInstagram, FaSearchengin  } from 'react-icons/fa';
import ANLogo from "../Image/ANLogo.png";
import android from "../Image/android.png";
import ios from "../Image/ios.jpg";
import TermsConditions from './TermsConditions';
import PrivacyPolicy from './PrivacyPolicy';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="relative mt-16 bg-gradient-to-r from-blue-800 to-purple-950 text-white ">
            <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-8 md:px-16 lg:px-24 font-serif">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6 mt-6">
                    <div className="md:max-w-md lg:col-span-2">
                        <img src={ANLogo} className="w-56 h-12 mr-4" />
                        <div className="mt-4 lg:max-w-sm xl:max-w-screen-md">
                            <p className="text-sm text-deep-purple-50">
                                Dr. Messhram’s journey into numerology began in his formative years when his innate talent for precise predictions emerged.
                            </p>
                            <p className="mt-4 text-sm text-deep-purple-50">
                                Over time, he has honed his skills and developed a scientific approach to numerology, making his predictions grounded, logical, and incredibly accurate, thus creating Auspicious Numerology.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 row-gap-8 xl:col-span-4 lg:col-span-4 md:grid-cols-4">
                        <div>
                            <p className="font-semibold tracking-wide text-yellow-600">
                                Category
                            </p>
                            <ul className="mt-2 space-y-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                    <li key={num} className="flex items-center space-x-2 group">
                                        <Link to={`/mulank${num}`} >
                                            <FaSearchengin  className="size-4 cursor-pointer" />
                                        </Link>
                                        <Link to={`/mulank${num}`} className="transition-colors duration-300">
                                            Mulank {num}
                                        </Link>
                                    </li>
                                ))}
                            </ul>


                        </div>
                        <div>
                            <p className="font-semibold tracking-wide text-yellow-600">
                                Quick Links
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link to="/prediction" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                                        Predictions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blogs" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/videos" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                                        Videos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold tracking-wide text-yellow-600">
                                Help & Legal
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link to="/termscondition" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacypolicy" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold tracking-wide text-yellow-600">
                                Follow Us
                            </p>
                            <div className="mt-2">
                                <div className="flex items-center space-x-4 sm:mt-0">
                                    <a href="https://www.facebook.com/AuspiciousNumerology/" target="_blank">
                                        <FaFacebookSquare className="text-2xl hover:text-white" />
                                    </a>
                                    <a href="https://www.instagram.com/auspicious_numerology/" target="_blank">
                                        <FaInstagram className="text-2xl hover:text-white" />
                                    </a>
                                    <a href="https://www.youtube.com/@AuspiciousNumerology" target="_blank">
                                        <FaYoutube className="text-2xl hover:text-white" />
                                    </a>
                                </div>
                                <div className="mt-24 w-5/6">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=co.edvin.pgtlm&hl=en_IN&pli=1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full"
                                    >
                                        <img
                                            src={android}
                                            alt="Android App"
                                            className="w-full h-auto cursor-pointer rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                        />
                                    </a>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=co.edvin.pgtlm&hl=en_IN&pli=1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full mt-2"
                                    >
                                        <img
                                            src={ios}
                                            alt="iOS App"
                                            className="cursor-pointer rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-10 w-40"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto border-t border-deep-purple-accent-200 max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-white sm:text-center">© Copyright 2024 Auspicious Numerology. All rights reserved.</span>
                    <span className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                        Designed by: UI/UX Partners
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
