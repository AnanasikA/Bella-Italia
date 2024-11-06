import React, { useState } from 'react';
import openIcon from '../images/menu.png';
import closeIcon from '../images/close.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 w-full z-20 shadow-md px-20 py-4 flex justify-between items-center font-sans" 
      style={{ 
        background: 'linear-gradient(to bottom, rgba(55, 71, 35, 1), rgba(85, 107, 47, 0.9), rgba(85, 107, 47, 0.7))',
        fontFamily: "'Josefin Sans', sans-serif"
      }}
    >
      {/* Logo */}
      <a href="/" className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Pacifico', cursive" }}>
        Bella Italia
      </a>

      {/* Ikona menu na małych ekranach */}
      <button
        className="md:hidden focus:outline-none z-40"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img
          src={isMenuOpen ? closeIcon : openIcon}
          alt="Menu Icon"
          className="w-8 h-8"
        />
      </button>

      {/* Nawigacja */}
      <nav
        className={`fixed top-0 right-0 h-full w-full md:w-auto md:static transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0 shadow-lg md:shadow-none flex flex-col md:flex-row items-center px-8 py-8 md:p-0 space-y-8 md:space-y-0 md:space-x-8`}
        style={{
          background: isMenuOpen ? 'rgba(85, 107, 47, 1)' : 'transparent', // Jednolite tło tylko na małych ekranach
          zIndex: 30
        }}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8 text-white text-lg font-medium text-center md:text-left">
          <li>
            <a href="/#about" className="hover:text-red-500 transition-colors duration-200">O nas</a>
          </li>
          <li>
            <a href="/#featured_dish" className="hover:text-red-500 transition-colors duration-200">Danie Dnia</a>
          </li>
          <li>
            <a href="/menu" className="hover:text-red-500 transition-colors duration-200">Menu</a>
          </li>
          <li>
            <a href="/#gallery" className="hover:text-red-500 transition-colors duration-200">Galeria</a>
          </li>
          <li>
            <a href="/#contact" className="hover:text-red-500 transition-colors duration-200">Kontakt</a>
          </li>
        </ul>
        <a href="/reservation" className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-200 shadow-lg mt-4 md:mt-0">
          Zarezerwuj stolik
        </a>
      </nav>
    </header>
  );
}

export default Header;





























