import React from "react";
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const SocialMediaSection = () => {
    return (
        <div className="body-font bg-gradient-to-r from-yellow-500 to-amber-950 text-white py-12 font-serif">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-lg md:text-3xl font-bold mb-4">Find us on</h2>
                <p className="mb-8 text-sm md:text-base">Auspicious Numerology has a strong community of 10Mn+ followers across all popular social media.</p>
                <div className="flex justify-center flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    <a href="https://www.youtube.com/@AuspiciousNumerology" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                        <FaYoutube size={24} className="text-3xl md:text-4xl" />
                        <p className="mt-2 text-xs md:text-sm">YouTube</p>
                    </a>
                    <a href="https://www.instagram.com/auspicious_numerology/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                        <FaInstagram size={24} className="text-3xl md:text-4xl" />
                        <p className="mt-2 text-xs md:text-sm">Instagram</p>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                        <FaTwitter size={24} className="text-3xl md:text-4xl" />
                        <p className="mt-2 text-xs md:text-sm">Twitter</p>
                    </a>
                    {/* <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                        <FaLinkedin size={24} className="text-3xl md:text-4xl" />
                        <p className="mt-2 text-xs md:text-sm">LinkedIn</p>
                    </a> */}
                    <a href="https://www.facebook.com/AuspiciousNumerology" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                        <FaFacebook size={24} className="text-3xl md:text-4xl" />
                        <p className="mt-2 text-xs md:text-sm">Facebook</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaSection;
