import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi'; // Import cart icon from react-icons
import logo from '../Image/mooropan logo.png';

const Header = ({ cart = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isSubDropdownOpen) setIsSubDropdownOpen(false);
  };
  const toggleSubDropdown = () => setIsSubDropdownOpen(!isSubDropdownOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsSubDropdownOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-yellow-500 to-green-600 text-white p-3 sticky top-0 z-50 shadow-2xl">
      <div className="container mx-1 my-6 flex justify-between items-center whitespace-nowrap">
        {/* Logo */}
        <div className="flex items-center whitespace-nowrap">
          <Link to="/" className="flex items-center px-7 whitespace-nowrap">
            <img src={logo} alt="Logo" className="w-10 h-16 sm:w-48 md:w-20 lg:w-20" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5 lg:space-x-7 text-base lg:text-lg decoration-from-font">
          <Link to="/" className="hover:text-customLightOrange">Home</Link>
          <Link to="/about" className="hover:text-customLightOrange">About</Link>

          {/* Dropdown for Our Services */}
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-1 hover:text-customLightOrange">
              <Link to="/services"><span>Our Services</span></Link>
            </button>
          </div>

          <Link to="/videos" className="hover:text-customLightOrange">Videos</Link>
          <Link to="/blogs" className="hover:text-customLightOrange">Blogs</Link>
          <Link to="/contact" className="hover:text-customLightOrange">Contact Us</Link>

          {/* Cart Icon */}
          <Link to="/cart" className="flex items-center space-x-1 hover:text-customLightOrange">
            <FiShoppingCart className="w-6 h-6" />
            {/* Show the cart count */}
            <span>{cart.length || 0}</span> {/* Fallback to 0 if cart is empty */}
          </Link>
        </nav>

        {/* Mobile Navbar Toggle */}
        <div className="block md:hidden flex items-center space-x-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <nav className="flex flex-col items-center font-serif space-y-4 mt-4 text-base sm:text-lg">
          <Link to="/" className="hover:text-customLightOrange" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="hover:text-customLightOrange" onClick={closeMenu}>About</Link>

          <div className="relative">
            <button className="flex items-center space-x-1 hover:text-customLightOrange">
              <Link to="/services"><span>Our Services</span></Link>
            </button>
          </div>

          <Link to="/videos" className="hover:text-customLightOrange" onClick={closeMenu}>Videos</Link>
          <Link to="/blogs" className="hover:text-customLightOrange" onClick={closeMenu}>Blogs</Link>
          <Link to="/contact" className="hover:text-customLightOrange" onClick={closeMenu}>Contact Us</Link>

          {/* Cart Icon in Mobile */}
          <Link to="/cart" className="flex items-center space-x-1 hover:text-customLightOrange">
            <FiShoppingCart className="w-6 h-6" />
            <span>{cart.length || 0}</span> {/* Display cart count with fallback */}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
