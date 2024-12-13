import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold">Logo</div>
        <span className="text-lg">Ten Finplus</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Join Us
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center space-y-8 md:hidden"
          onClick={closeMenu}
        >
          <Link to="/" className="text-2xl hover:text-gray-400" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="text-2xl hover:text-gray-400" onClick={closeMenu}>
            About
          </Link>
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-2xl"
            onClick={closeMenu}
          >
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;