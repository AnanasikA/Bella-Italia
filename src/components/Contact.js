import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Dziękujemy za wiadomość, ${formData.name}!`);
    // Tutaj można dodać logikę wysyłania danych do serwera
  };

  return (
    <section id="contact" className="py-16 px-6 bg-green-50 text-green-700 text-center">
      <h3 className="text-4xl font-bold mb-12 text-red-600">Kontakt</h3>
      
      {/* Informacje kontaktowe z ikonami w jednej linii */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 mb-12">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-red-600" />
          <span className="text-lg opacity-80">ul. Przykładowa 123, Warszawa</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-red-600" />
          <span className="text-lg opacity-80">+48 123 456 789</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-red-600" />
          <a href="mailto:kontakt@bella-italia.pl" className="text-lg text-red-600 hover:underline">kontakt@bella-italia.pl</a>
        </div>
      </div>

      {/* Formularz kontaktowy */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
        <div>
          <label className="block text-left mb-2 font-semibold">Imię i nazwisko</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-left mb-2 font-semibold">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-left mb-2 font-semibold">Temat</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-left mb-2 font-semibold">Wiadomość</label>
          <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded" rows="4" required></textarea>
        </div>
        <button type="submit" className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg">
          Wyślij wiadomość
        </button>
      </form>
    </section>
  );
}

export default Contact;

