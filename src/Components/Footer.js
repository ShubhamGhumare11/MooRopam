import React from "react";
import {
 
  FaYoutube,
  FaInstagram,
  FaSearchengin,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import mooropanlogo from "../Image/mooropan logo.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-r from-lime-600 to-green-950 text-white">
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-8 md:px-16 lg:px-24 font-serif">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6 mt-6">
          <div className="md:max-w-md lg:col-span-2">
            <img src={mooropanlogo} className="w-17 h-13 mr-4" alt="MooRopan Logo" />
            <div className="mt-4 lg:max-w-sm xl:max-w-screen-md">
              <p className="text-sm text-deep-purple-50">
                MooRopan India Pvt. Ltd. was established with the motive of
                "Gau-swasthayam Rakshatu" in May 2023. We provide cattle
                healthcare aid/devices, services, and consultations pan India.
              </p>
              <p className="mt-4 text-sm text-deep-purple-50">
                Our products facilitate better management of the herd. Our
                affordable products reduce cow morbidity, enhancing milk
                quantity and quality.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 xl:col-span-4 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-yellow-600">
                Our Products
              </p>
              <ul className="mt-2 space-y-2">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-center space-x-2 group">
                    <Link to={`/mulank${num}`}>
                      <FaSearchengin className="size-4 cursor-pointer" />
                    </Link>
                    <Link
                      to={`/mulank${num}`}
                      className="transition-colors duration-300"
                    >
                      MooRopan {num}
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
                  <Link
                    to="/prediction"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Research Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.youtube.com/watch?v=4QqkWmI_kX0"
                    target="_balnk"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Videos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
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
                  <Link
                    to="/termscondition"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacypolicy"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
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
                  <a
                    href="https://x.com/mooropan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="text-2xl hover:text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/mooropan_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-2xl hover:text-white" />
                  </a>
                  <a
                    href="https://youtube.com/@mooropan1?si=2Ji9qW7jGj2hOPwk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="text-2xl hover:text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mooropan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-2xl hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto border-t border-deep-purple-accent-200 max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">
            © Copyright 2024 MooRopan. All rights reserved.
          </span>
          <span className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
            Designed by: Gtasterix
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
