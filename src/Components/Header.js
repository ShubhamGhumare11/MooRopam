import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../Components/CartContext'; // Correct import for useCart
import logo from '../Image/mooropan logo.png';

const Header = () => {
  const { cart } = useCart(); // Use the useCart hook
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0); // Calculate total items
  };

  return (
    <header className="bg-gradient-to-r from-yellow-500 to-green-600 text-white p-3 sticky top-0 z-50 shadow-2xl">
      <div className="container mx-1 my-6 flex justify-between items-center whitespace-nowrap">
        <div className="flex items-center whitespace-nowrap">
          <Link to="/" className="flex items-center px-7 whitespace-nowrap">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-16 sm:w-48 md:w-20 lg:w-20"
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-5 lg:space-x-7 text-base lg:text-lg">
          <Link to="/" className="hover:text-customLightOrange">Home</Link>
          <Link to="/about" className="hover:text-customLightOrange">About</Link>
          <Link to="/services" className="hover:text-customLightOrange">Services</Link>
          {/* <Link to="/videos" className="hover:text-customLightOrange">Videos</Link> */}
          <Link to="/blogs" className="hover:text-customLightOrange">Blogs</Link>
          <Link to="/contact" className="hover:text-customLightOrange">Contact Us</Link>
          <Link to="/cart" className="flex items-center space-x-1 hover:text-customLightOrange">
            <FiShoppingCart className="w-6 h-6" />
            <span>{getTotalItems()}</span>
          </Link>
        </nav>

        <div className="block md:hidden flex items-center space-x-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col items-center font-serif space-y-4 mt-4 text-base sm:text-lg">
          <Link to="/" className="hover:text-customLightOrange" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="hover:text-customLightOrange" onClick={closeMenu}>About</Link>
          <Link to="/services" className="hover:text-customLightOrange" onClick={closeMenu}>Services</Link>
          <Link to="/videos" className="hover:text-customLightOrange" onClick={closeMenu}>Videos</Link>
          <Link to="/blogs" className="hover:text-customLightOrange" onClick={closeMenu}>Blogs</Link>
          <Link to="/contact" className="hover:text-customLightOrange" onClick={closeMenu}>Contact Us</Link>
          <Link to="/cart" className="flex items-center space-x-1 hover:text-customLightOrange">
            <FiShoppingCart className="w-6 h-6" />
            <span>{getTotalItems()}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
