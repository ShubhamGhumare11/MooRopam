import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const SocialMediaSection = () => {
  return (
    <div
      className="body-font text-black py-12 font-serif"
      style={{
        backgroundColor: "#f9f9f9",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-lg md:text-3xl font-bold mb-4">Find us on</h2>
        <p className="mb-8 text-sm md:text-base">
          Auspicious Numerology has a strong community of 10Mn+ followers across
          all popular social media.
        </p>
        <div className="flex justify-center flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          <a
            href="https://youtube.com/@mooropan1?si=2Ji9qW7jGj2hOPwk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <FaYoutube
              size={48}
              className="text-red-600 group-hover:text-red-700 transition-all duration-300"
            />
            <p className="mt-2 text-xs md:text-sm group-hover:text-red-700">
              YouTube
            </p>
          </a>
          <a
            href="https://www.instagram.com/mooropan_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <FaInstagram
              size={48}
              className="text-pink-500 group-hover:text-pink-600 transition-all duration-300"
            />
            <p className="mt-2 text-xs md:text-sm group-hover:text-pink-600">
              Instagram
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/mooropan/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <FaLinkedinIn
              size={48}
              className="text-blue-500 group-hover:text-blue-600 transition-all duration-300"
            />
            <p className="mt-2 text-xs md:text-sm group-hover:text-blue-600">
              Linkedin
            </p>
          </a>
          <a
            href="https://x.com/mooropan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <FaXTwitter
              size={48}
              className="text-black-800 group-hover:text-blue-900 transition-all duration-300"
            />
            <p className="mt-2 text-xs md:text-sm group-hover:text-blue-900">
              Twitter
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
