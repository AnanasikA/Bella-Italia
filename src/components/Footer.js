import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-8 px-4 bg-green-700 text-white text-center">
      <p className="text-2xl font-bold text-red-600 mb-4" style={{ fontFamily: "'Pacifico', cursive" }}>Bella Italia</p>
      
      {/* Adres, telefon i e-mail w jednej linii */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 mb-4">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-red-600" />
          <span className="text-lg">ul. Przykładowa 123, Warszawa</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-red-600" />
          <span className="text-lg">+48 123 456 789</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-red-600" />
          <a href="mailto:kontakt@bella-italia.pl" className="text-lg text-white hover:underline">kontakt@bella-italia.pl</a>
        </div>
      </div>

      {/* Godziny otwarcia */}
      <div className="mb-4">
        <p className="text-lg">Godziny otwarcia: Pon-Sob 12:00 - 22:00, Niedz 12:00 - 20:00</p>
      </div>

      {/* Linki do mediów społecznościowych */}
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#facebook" aria-label="Facebook" className="text-white hover:text-red-600 transition-colors duration-200">
          <FaFacebook className="w-6 h-6" />
        </a>
        <a href="#instagram" aria-label="Instagram" className="text-white hover:text-red-600 transition-colors duration-200">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a href="#twitter" aria-label="Twitter" className="text-white hover:text-red-600 transition-colors duration-200">
          <FaTwitter className="w-6 h-6" />
        </a>
      </div>

      {/* Prawa autorskie */}
      <p className="text-sm mt-6 opacity-75">&copy; {new Date().getFullYear()} WebCraft Studio. Wszelkie prawa zastrzeżone.</p>
    </footer>
  );
}

export default Footer;




