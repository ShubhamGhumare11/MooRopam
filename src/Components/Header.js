import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi"; // Cart icon
import logo from '../Image/ANLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false); // State for sub-dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isSubDropdownOpen) {
      setIsSubDropdownOpen(false);
    }
  };

  const toggleSubDropdown = () => {
    setIsSubDropdownOpen(!isSubDropdownOpen);
  };

  // Close all menus, dropdowns, and sub-dropdowns when an option is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false); // Close dropdown
    setIsSubDropdownOpen(false); // Close sub-dropdown
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 to-purple-950 text-white p-3 sticky top-0 z-50 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-40 h-auto sm:w-48 md:w-40 lg:w-64"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5 lg:space-x-7 text-base lg:text-lg font-serif">
          <Link to="/" className="hover:text-customLightOrange">
            Home
          </Link>
          <Link to="/about" className="hover:text-customLightOrange">
            About
          </Link>
          <Link to="/numerology" className="hover:text-customLightOrange">
            Numerology
          </Link>

          {/* Dropdown for Our Services */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-1 hover:text-customLightOrange"
            >
              <span>Our Services</span>
              <IoChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-36 bg-gradient-to-r from-blue-800 to-purple-950 text-white shadow-lg rounded-lg z-10">
                <button
                  onClick={toggleSubDropdown}
                  className="block w-full px-2 py-2 hover:text-customLightOrange flex justify-between items-center"
                >
                  Services
                  <IoChevronDown
                    className={`inline-block w-4 h-4 transition-transform duration-300 ${isSubDropdownOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                {/* Sub-dropdown Menu */}
                {isSubDropdownOpen && (
                  <div className="absolute left-full top-0 mt-6 w-40 bg-gradient-to-r from-blue-800 to-purple-950 text-white shadow-lg rounded-lg z-10">
{/*                     <Link
                      to="/usdservice"
                      className="block px-3 py-2 hover:text-customLightOrange"
                      onClick={closeMenu} // Close on selection
                    >
                      Services in Foreign
                    </Link> */}
                    <Link
                      to="/services"
                      className="block px-3 py-2 hover:text-customLightOrange"
                      onClick={closeMenu} // Close on selection
                    >
                      Services in India
                    </Link>
                  </div>
                )}

               {/*  <Link
                  to="/products"
                  className="block px-2 py-2 hover:text-customLightOrange"
                  onClick={closeMenu} // Close on selection
                >
                  Products
                </Link> */}
              </div>
            )}
          </div>

          <Link to="/prediction" className="hover:text-customLightOrange">
            Predictions
          </Link>
          <Link to="/videos" className="hover:text-customLightOrange">
            Videos
          </Link>
          <Link to="/blogs" className="hover:text-customLightOrange">
            Blogs
          </Link>
          <Link to="/contact" className="hover:text-customLightOrange">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Cart Button and Hamburger */}
        <div className="block md:hidden flex items-center space-x-4">
          {/* Cart Button */}
          <Link to="/services">
            <FiShoppingCart className="text-white w-6 h-6" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col items-center font-serif space-y-4 mt-4 text-base sm:text-lg">
          <Link to="/" className="hover:text-customLightOrange" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="hover:text-customLightOrange" onClick={closeMenu}>
            About
          </Link>
          <Link to="/numerology" className="hover:text-customLightOrange" onClick={closeMenu}>
            Numerology
          </Link>

          {/* Mobile Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-1 hover:text-customLightOrange"
            >
              <span>Our Services</span>
              <IoChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="mt-2 w-40 bg-gradient-to-r from-blue-800 to-purple-950 text-white shadow-lg rounded-lg z-10">
                <button
                  onClick={toggleSubDropdown}
                  className="block w-full px-4 py-2 flex justify-between items-center"
                >
                  Services
                  <IoChevronDown
                    className={`inline-block w-4 h-4 ml-2 transition-transform duration-300 ${isSubDropdownOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                {isSubDropdownOpen && (
                  <div className="absolute left-20 top-0 mt-14 w-40 bg-gradient-to-r from-blue-800 to-purple-950 text-white shadow-lg rounded-lg z-10">
                    <Link
                      to="/services"
                      className="block px-4 py-2 hover:text-customLightOrange"
                      onClick={closeMenu} // Close on selection
                    >
                      Services in India
                    </Link>
                   {/*  <Link
                      to="/usdservice"
                      className="block px-4 py-2 hover:text-customLightOrange"
                      onClick={closeMenu} // Close on selection
                    >
                      Services in Foreign
                    </Link> */}
                  </div>
                )}

               {/*  <Link
                  to="/products"
                  className="block px-4 py-2 hover:text-customLightOrange"
                  onClick={closeMenu} // Close on selection
                >
                  Products
                </Link> */}
              </div>
            )}
          </div>

          <Link to="/prediction" className="hover:text-customLightOrange" onClick={closeMenu}>
            Predictions
          </Link>
          <Link to="/videos" className="hover:text-customLightOrange" onClick={closeMenu}>
            Videos
          </Link>
          <Link to="/blogs" className="hover:text-customLightOrange" onClick={closeMenu}>
            Blogs
          </Link>
          <Link to="/contact" className="hover:text-customLightOrange" onClick={closeMenu}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
